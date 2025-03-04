import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import { render } from "@react-email/render";
import * as React from "react";
import KoalaWelcomeEmail from "./KoalaWelcomeEmail";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

dotenv.config();
initializeApp();
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

// ✅ Submit function (store appointment in Firestore)
export const submit = onRequest(async (req, res) => {
  try {
    const formData: AppointmentData = req.body;
    const writeResult = await getFirestore()
      .collection("Appointments")
      .add({ formData });

    res.json({ result: `Appointment with ID: ${writeResult.id} stored.` });
  } catch (error) {
    console.error("❌ Error storing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Firestore Trigger Function to Send Email on New Appointment
export const sendEmail = onDocumentCreated("/Appointments/{documentId}", async (event) => {
  try {
    console.log("📩 Firestore Trigger Activated!");

    // ✅ Retrieve new appointment document
    const docData = event.data?.data();
    if (!docData || !docData.formData) {
      console.warn("⚠️ No appointment data found in Firestore!");
      return;
    }

    const appointment: AppointmentData = docData.formData;

    // ✅ Extract appointment details
    const firstName = appointment.firstName || "Unknown";
    const lastName = appointment.lastName || "Unknown";

    // ✅ Ensure KoalaWelcomeEmail is treated as a component
    const emailHtml = await render(React.createElement(KoalaWelcomeEmail, { userFirstname: firstName }));

    const msg: sgMail.MailDataRequired = {
      to: MECHANIC_EMAIL,
      from: SENDGRID_SENDER,
      subject: "New Appointment Request",
      html: String(emailHtml), // ✅ Ensures html is a string
    };

    await sgMail.send(msg);
    console.log("📩 Email sent successfully!");
  } catch (error: unknown) {
    console.error("⚠️ Error sending email:", error);
    if (error instanceof Error) {
      console.error("SendGrid Error Response:", error.message);
    }
  }
});
