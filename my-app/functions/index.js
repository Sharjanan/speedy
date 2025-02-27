// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");


// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

dotenv.config();
initializeApp();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.submit = onRequest(async (req, res) => {
  try {
    const formData = req.body;
    
    const writeResult = await getFirestore()
        .collection("Appointments")
        .add({formData});
    // Send back a message that we've successfully written the message
    res.json({result: `Appointment with ID: ${writeResult.id} stored.`});
  } catch (error) {
    console.error("❌ Error storing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  });
  // Listens for new messages added to /messages/:documentId/original
// and saves an uppercased version of the message
// to /messages/:documentId/uppercase
exports.sendEmail = onDocumentCreated("/Appointments/{documentId}", async (event) => {
  try {
    console.log("📩 Firestore Trigger Activated!"); // ✅ Check if function is triggered

    // Retrieve the newly created document from Firestore
    const docData  = event.data.data(); 

    console.log("🔥 Raw Appointment Data from Firestore:", docData ); // ✅ Debugging

    if (!docData || !docData.formData) {
      console.warn("⚠️ No appointment data found in Firestore!");
      return;
    }
    const appointment = docData.formData;
    // 🔥 Ensure data fields are correctly retrieved
    const firstName = appointment.firstName || "Unknown";
    const lastName = appointment.lastName || "Unknown";
    const email = appointment.email || "Unknown";
    const phone = appointment.phone || "Unknown";
    const serviceNeeded = appointment.serviceNeeded || "Unknown Service";
    const carType = appointment.carType || "Unknown";
    const carYear = appointment.carYear || "N/A";
    const city = appointment.city || "Unknown";
    const postalCode = appointment.postalCode || "N/A";

    console.log(`✅ Appointment Details:
      Name: ${firstName} ${lastName}
      Phone: ${phone}
      Email: ${email}
      Service: ${serviceNeeded}
      Car: ${carYear} ${carType}
      Location: ${city}, ${postalCode}
    `); // ✅ Debugging retrieved data

    // Send Email
    const msg = {
      to: process.env.MECHANIC_EMAIL, 
      from: process.env.SENDGRID_SENDER, 
      subject: "New Appointment Request",
      text: `New appointment request from ${firstName} ${lastName}.`,
      html: `<p>New appointment request from <b>${firstName} ${lastName}</b>.</p>`
    };

    await sgMail.send(msg);
    console.log("📩 Email sent successfully to mechanic!");
  } catch (error) {
    console.error("⚠️ Error sending email:", error);
    if (error.response) {
      console.error("SendGrid Error Response:", error.response.body);
    }
  }
});
