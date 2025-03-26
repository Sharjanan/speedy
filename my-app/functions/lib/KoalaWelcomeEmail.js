"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoalaWelcomeEmail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const KoalaWelcomeEmail = ({ userFirstname, userLastname, userEmail, userPhone, userService, userCarType, userCarYear, userCity, userPostalCode, }) => {
    return ((0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(components_1.Head, {}), (0, jsx_runtime_1.jsxs)(components_1.Body, { style: main, children: [(0, jsx_runtime_1.jsxs)(components_1.Preview, { children: ["New Appointment from  ", userFirstname, " ", userLastname] }), (0, jsx_runtime_1.jsxs)(components_1.Container, { style: container, children: [(0, jsx_runtime_1.jsx)(components_1.Img, { src: "https://raw.githubusercontent.com/Sharjanan/speedy/forms/my-app/assets/pneuspeedy.png", alt: "logo", style: logo }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: paragraph, children: "Hi Speedy," }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: paragraph, children: ["You have received a new appointment request from", " ", (0, jsx_runtime_1.jsxs)("strong", { children: [userFirstname, " ", userLastname] }), " ", "for ", (0, jsx_runtime_1.jsx)("strong", { children: userService }), ".", (0, jsx_runtime_1.jsx)("br", {}), "Please review the details and get in touch with the client at your earliest convenience."] }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: paragraph, children: [(0, jsx_runtime_1.jsx)("strong", { children: "\uD83D\uDCE7 Email:" }), " ", userEmail, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("strong", { children: "\uD83D\uDCDE Phone:" }), (0, jsx_runtime_1.jsx)("a", { href: `tel:${userPhone}`, style: { color: "#5F51E8", textDecoration: "none" }, children: userPhone }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("strong", { children: "\uD83D\uDE97 Car:" }), " ", userCarYear, " ", userCarType, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("strong", { children: "\uD83D\uDCCD Location:" }), (0, jsx_runtime_1.jsxs)("a", { href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(userCity + " " + userPostalCode)}`, target: "_blank", rel: "noopener noreferrer", style: { color: "#5F51E8", textDecoration: "none" }, children: [userCity, ", ", userPostalCode] })] }), (0, jsx_runtime_1.jsx)(components_1.Section, { style: btnContainer, children: (0, jsx_runtime_1.jsx)(components_1.Button, { style: button, href: "https://your-website.com/appointments", children: "View Appointment" }) }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: paragraph, children: ["Best,", (0, jsx_runtime_1.jsx)("br", {}), "The Service Team"] }), (0, jsx_runtime_1.jsx)(components_1.Hr, { style: hr })] })] })] }));
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
