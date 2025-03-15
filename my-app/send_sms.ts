import twilio from "twilio";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define TypeScript interfaces
interface Appointment {
  firstName: string;
  lastName: string;
  phone: string;
  serviceNeeded: string;
  carYear: string;
  carType: string;
  city: string;
  postalCode?: string;
}

// Retrieve environment variables and validate them
const accountSid: string = process.env.TWILIO_ACCOUNT_SID || "";
const authToken: string = process.env.TWILIO_AUTH_TOKEN || "";
const twilioPhone: string = process.env.TWILIO_PHONE_NUMBER || "";
const mechanicPhone: string = process.env.MECHANIC_PHONE_NUMBER || "";

// Ensure that required env variables are set
if (!accountSid || !authToken || !twilioPhone || !mechanicPhone) {
  console.error("❌ Missing Twilio credentials in environment variables.");
  process.exit(1);
}

// Create Twilio client
const client = twilio(accountSid, authToken);

// Get appointment data from command-line arguments
const formData: Appointment = JSON.parse(process.argv[2]);

// Format the SMS message
const messageBody: string = `
New Appointment Request:
Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Service: ${formData.serviceNeeded}
Car: ${formData.carYear} ${formData.carType}
Location: ${formData.city}, ${formData.postalCode || "N/A"}

✅ Please contact the client ASAP!
`;

// Function to send an SMS using Twilio
async function createMessage(): Promise<void> {
  try {
    const message = await client.messages.create({
      body: messageBody,
      from: twilioPhone,
      to: mechanicPhone,
    });

    console.log("📩 SMS Sent Successfully:", message.body);
  } catch (error) {
    console.error("❌ Error sending SMS:", error);
  }
}

// Execute the function
createMessage();
