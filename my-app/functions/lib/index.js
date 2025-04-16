"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.submit = void 0;
const https_1 = require("firebase-functions/v2/https");
const firestore_1 = require("firebase-functions/v2/firestore");
const mail_1 = __importDefault(require("@sendgrid/mail"));
const dotenv_1 = __importDefault(require("dotenv"));
const React = __importStar(require("react"));
const KoalaWelcomeEmail_1 = __importDefault(require("./KoalaWelcomeEmail"));
const app_1 = require("firebase-admin/app");
const firestore_2 = require("firebase-admin/firestore");
const cors_1 = __importDefault(require("cors"));
const server_1 = require("react-dom/server");
dotenv_1.default.config();
(0, app_1.initializeApp)();
const corsHandler = (0, cors_1.default)({ origin: true });
const db = (0, firestore_2.getFirestore)();
const getEnv = (key) => {
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
mail_1.default.setApiKey(SENDGRID_API_KEY);
console.log("✅ Environment variables loaded successfully!");
// ✅ Submit function (store appointment in Firestore)
exports.submit = (0, https_1.onRequest)(async (req, res) => {
    return corsHandler(req, res, async () => {
        try {
            console.log("📥 Received Request Body:", req.body);
            const formData = req.body;
            const writeResult = await db.collection("Appointments").add({ formData });
            res.json({ result: `Appointment with ID: ${writeResult.id} stored.` });
        }
        catch (error) {
            console.error("❌ Error storing request:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
});
// ✅ Firestore Trigger Function to Send Email on New Appointment
exports.sendEmail = (0, firestore_1.onDocumentCreated)("/Appointments/{documentId}", async (event) => {
    var _a;
    try {
        console.log("📩 Firestore Trigger Activated!");
        const docData = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
        if (!docData || !docData.formData) {
            console.warn("⚠️ No appointment data found in Firestore!");
            return;
        }
        const appointment = docData.formData;
        console.log("✅ Appointment Data:", appointment);
        // 🔥 Await the render() function to ensure it resolves before being used
        const emailHtml = (0, server_1.renderToStaticMarkup)(React.createElement(KoalaWelcomeEmail_1.default, {
            userFirstname: appointment.firstName,
            userLastname: appointment.lastName,
            userEmail: appointment.email,
            userPhone: appointment.phone,
            userService: appointment.serviceNeeded,
            userCarType: appointment.carType,
            userCarYear: appointment.carYear,
            userCity: appointment.city,
            userPostalCode: appointment.postalCode,
        }));
        console.log("🚀 Generated Email HTML:", emailHtml);
        const msg = {
            to: MECHANIC_EMAIL,
            from: SENDGRID_SENDER,
            subject: "New Appointment Request",
            html: emailHtml, // ✅ No more [object Promise]
        };
        console.log("📤 Sending email...");
        await mail_1.default.send(msg);
        console.log("📩 Email sent successfully!");
    }
    catch (error) {
        console.error("⚠️ Error sending email:", error);
        if (error instanceof Error) {
            console.error("SendGrid Error Response:", error.message);
        }
    }
});
