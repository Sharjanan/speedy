import { Typography } from "@material-tailwind/react";
import logo from "../assets/pneuspeedy-removebg-preview.png";

const contactDetails = {
  phone: "(438) 299 7771",
  email: "support@speedy.ca",
  address: "4840 Rue Vittorio-Fiorucci, Saint-Laurent, QC H4R 0L5",
};

const links = [
  ["Company", "Services", "Privacy Policy"],
  ["Our Pricing", "Blog", "About Us"],
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
  <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
  <img src="../assets/pneuspeedy-removebg-preview.png" alt="Custom Image" className=" object-contain" />
 
    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
        <a
          href="#"
          className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Contact Us
        </a>
      </li>
    </ul>
  </div>
  <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
    Copyright © 2024&nbsp; 
    <a href="https://material-tailwind.com/" target="_blank" rel="noreferrer">Pneu Speedy Mobile</a>.
  </p>
  </footer>
  );
}