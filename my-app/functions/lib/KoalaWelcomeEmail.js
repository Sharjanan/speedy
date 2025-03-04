"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoalaWelcomeEmail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
const KoalaWelcomeEmail = ({ userFirstname }) => {
    return ((0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(components_1.Head, {}), (0, jsx_runtime_1.jsxs)(components_1.Body, { style: main, children: [(0, jsx_runtime_1.jsx)(components_1.Preview, { children: "New Appointment Request" }), (0, jsx_runtime_1.jsxs)(components_1.Container, { style: container, children: [(0, jsx_runtime_1.jsx)(components_1.Img, { src: `${baseUrl}/static/koala-logo.png`, width: "170", height: "50", alt: "Koala", style: logo }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: paragraph, children: ["Hi ", userFirstname, ","] }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: paragraph, children: "A new appointment has been booked. Please review the details and contact the client." }), (0, jsx_runtime_1.jsx)(components_1.Section, { style: btnContainer, children: (0, jsx_runtime_1.jsx)(components_1.Button, { style: button, href: "https://your-website.com/appointments", children: "View Appointment" }) }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: paragraph, children: ["Best,", (0, jsx_runtime_1.jsx)("br", {}), "The Service Team"] }), (0, jsx_runtime_1.jsx)(components_1.Hr, { style: hr }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: footer, children: "470 Noor Ave STE B #1148, South San Francisco, CA 94080" })] })] })] }));
};
exports.KoalaWelcomeEmail = KoalaWelcomeEmail;
exports.default = exports.KoalaWelcomeEmail;
const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};
const container = { margin: "0 auto", padding: "20px 0 48px" };
const logo = { margin: "0 auto" };
const paragraph = { fontSize: "16px", lineHeight: "26px" };
const btnContainer = { textAlign: "center" };
const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
};
const hr = { borderColor: "#cccccc", margin: "20px 0" };
const footer = { color: "#8898aa", fontSize: "12px" };
