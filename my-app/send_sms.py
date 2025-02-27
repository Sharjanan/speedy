import os
from twilio.rest import Client
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Twilio Credentials
account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
twilio_phone = os.getenv("TWILIO_PHONE_NUMBER")
mechanic_phone = os.getenv("MECHANIC_PHONE_NUMBER")

def send_mechanic_notification(appointment):
    """ Sends SMS notification to the mechanic with client details. """
    client = Client(account_sid, auth_token)

    message_body = (
     f"New appointment request:\n"
        f"Name: {appointment['firstName']} {appointment['lastName']}\n"
        f"Phone: {appointment['phone']}\n"
        f"Email: {appointment['email']}\n"
        f"Service Needed: {appointment['serviceNeeded']}\n"
        f"Car: {appointment['carYear']} {appointment['carType']}\n"
        f"Location: {appointment['city']}, {appointment.get('postalCode', 'N/A')}\n\n"
        f"Please contact the client ASAP.\n"
        f"Reply STOP to unsubscribe."
    )

    try:
        message = client.messages.create(
            body=message_body,
            from_=twilio_phone,
            to=mechanic_phone
        )
        print("📩 SMS sent successfully:", message.sid)
    except Exception as e:
        print("⚠️ Error sending SMS:", str(e))

# Example data from Firestore (Replace with actual Firestore data)
appointment_data = {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+15141234567",
    "serviceNeeded": "Oil Change",
    "carType": "Sedan",
    "carYear": "2021",
    "city": "Montreal",
    "postalCode": "H1H 1H1"
}

# Send SMS notification
send_mechanic_notification(appointment_data)