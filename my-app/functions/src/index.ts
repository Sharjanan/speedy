import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

import * as React from "react";
import KoalaWelcomeEmail from "./KoalaWelcomeEmail";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import cors from "cors";
import { renderToStaticMarkup } from "react-dom/server";
dotenv.config();
initializeApp();

const corsHandler = cors({ origin: true });

const db = getFirestore();

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }
  return value;
};

// ✅ Define Environment Variables with Fallback
const SENDGRID_API_KEY = getEnv("SENDGRID_API_KEY");
const MECHANIC_EMAIL = getEnv("MECHANIC_EMAIL");
const SENDGRID_SENDER = getEnv("SENDGRID_SENDER");

// const getConfig = async (key: string): Promise<string> => {
//   try {
//     const docRef = db.collection("Config").doc("SendGrid");
//     const doc = await docRef.get();

//     if (!doc.exists) {
//       throw new Error("❌ Configuration document does not exist in Firestore.");
//     }

//     const data = doc.data();
//     if (!data || !data[key]) {
//       throw new Error(`❌ Missing configuration key in Firestore: ${key}`);
//     }

//     return data[key];
//   } catch (error) {
//     console.error("⚠️ Error fetching config:", error);
//     throw error;
//   }
// };

// const SENDGRID_API_KEY = config().sendgrid.api_key;
// const MECHANIC_EMAIL = config().sendgrid.mechanic_email;
// const SENDGRID_SENDER = config().sendgrid.sender_email;

// ✅ Set API Key
sgMail.setApiKey(SENDGRID_API_KEY);
console.log("✅ Environment variables loaded successfully!");

// ✅ Define TypeScript Interface for Appointment Data
interface AppointmentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  carType: string;
  carYear: string;
  city: string;
  postalCode: string;
}
interface KoalaWelcomeEmailProps {
  userFirstname: string;
  userLastname: string;
  userEmail: string;
  userPhone: string;
  userService: string;
  userCarType: string;
  userCarYear: string;
  userCity: string;
  userPostalCode: string;
}
// ✅ Submit function (store appointment in Firestore)
export const submit = onRequest(async (req, res) => {
  return corsHandler(req, res, async () => {
    try {
      console.log("📥 Received Request Body:", req.body);
      const formData: AppointmentData = req.body;
      const writeResult = await db.collection("Appointments").add({ formData });

      res.json({ result: `Appointment with ID: ${writeResult.id} stored.` });
    } catch (error) {
      console.error("❌ Error storing request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

// ✅ Firestore Trigger Function to Send Email on New Appointment
export const sendEmail = onDocumentCreated(
  "/Appointments/{documentId}",
  async (event) => {
    try {
      console.log("📩 Firestore Trigger Activated!");

      const docData = event.data?.data();
      if (!docData || !docData.formData) {
        console.warn("⚠️ No appointment data found in Firestore!");
        return;
      }

      const appointment: AppointmentData = docData.formData;
      console.log("✅ Appointment Data:", appointment);

      // 🔥 Await the render() function to ensure it resolves before being used
      const emailHtml = renderToStaticMarkup(
        React.createElement(KoalaWelcomeEmail, {
          userFirstname: appointment.firstName,
          userLastname: appointment.lastName,
          userEmail: appointment.email,
          userPhone: appointment.phone,
          userService: appointment.serviceNeeded,
          userCarType: appointment.carType,
          userCarYear: appointment.carYear,
          userCity: appointment.city,
          userPostalCode: appointment.postalCode,
        } as KoalaWelcomeEmailProps)
      );
      console.log("🚀 Generated Email HTML:", emailHtml);

      const msg: sgMail.MailDataRequired = {
        to: MECHANIC_EMAIL,
        from: SENDGRID_SENDER,
        subject: "New Appointment Request",
        html: emailHtml, // ✅ No more [object Promise]
      };

      console.log("📤 Sending email...");
      await sgMail.send(msg);
      console.log("📩 Email sent successfully!");
    } catch (error: unknown) {
      console.error("⚠️ Error sending email:", error);
      if (error instanceof Error) {
        console.error("SendGrid Error Response:", error.message);
      }
    }
  }
);
