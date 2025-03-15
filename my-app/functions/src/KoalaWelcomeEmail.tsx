import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

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

export const KoalaWelcomeEmail = ({
  userFirstname,
  userLastname,
  userEmail,
  userPhone,
  userService,
  userCarType,
  userCarYear,
  userCity,
  userPostalCode,
}: KoalaWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>New Appointment Request</Preview>
        <Container style={container}>
          <Img
            src={`../../assets/pneuspeedy-removebg-preview.png`}
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Hi Speedy,</Text>
          <Text style={paragraph}>
            You have received a new appointment request from{" "}
            <strong>
              {userFirstname} {userLastname}
            </strong>{" "}
            for <strong>{userService}</strong>.
            <br />
            Please review the details and get in touch with the client at your
            earliest convenience.
          </Text>
          <Text style={paragraph}>
            <strong>📧 Email:</strong> {userEmail}
            <br />
            <strong>📞 Phone:</strong>
            <a
              href={`tel:${userPhone}`}
              style={{ color: "#5F51E8", textDecoration: "none" }}
            >
              {userPhone}
            </a>
            <br />
            <strong>🚗 Car:</strong> {userCarYear} {userCarType}
            <br />
            <strong>📍 Location:</strong>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(userCity + " " + userPostalCode)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#5F51E8", textDecoration: "none" }}
            >
              {userCity}, {userPostalCode}
            </a>
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://your-website.com/appointments">
              View Appointment
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Service Team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            470 Noor Ave STE B #1148, South San Francisco, CA 94080
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = { margin: "0 auto", padding: "20px 0 48px" };
const logo = { margin: "0 auto" };
const paragraph = { fontSize: "16px", lineHeight: "26px" };
const btnContainer = { textAlign: "center" as const };
const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};
const hr = { borderColor: "#cccccc", margin: "20px 0" };
const footer = { color: "#8898aa", fontSize: "12px" };
