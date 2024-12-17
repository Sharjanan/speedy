import { Typography } from "@material-tailwind/react";
import logo from "../assets/pneuspeedy-removebg-preview.png";

const contactDetails = {
  phone: "(438) 299 7771",
  email: "support@speedy.ca",
  address: "4840 Rue Vittorio-Fiorucci, Saint-Laurent, QC H4R 0L5",
};

const links = [
  ["Company","Services" ,"Privacy Policy"],
  ["Our Pricing", "Blog","About Us"],
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gray-900 px-8 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo and Contact Info */}
        <div className="flex flex-col gap-4 items-start">
          <img src="../assets/pneuspeedy-removebg-preview.png" alt="Speedy Logo" className="h-20 w-auto" />
          <div className="text-gray-500">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <Typography as="p" className="!text-gray-500">
                {contactDetails.phone}
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <Typography as="p" className="!text-gray-500">
                {contactDetails.email}
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <Typography as="p" className="!text-gray-500">
                {contactDetails.address}
              </Typography>
            </div>
          </div>
        </div>

        {/* Center Section - Links */}
        <div className="grid grid-cols-2 gap-8 text-center">
          {links.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-2">
              {column.map((link, index) => (
                <Typography
                  key={index}
                  as="a"
                  href="#"
                  className="font-medium !text-gray-500 transition-colors hover:!text-gray-300"
                >
                  {link}
                </Typography>
              ))}
            </div>
          ))}
        </div>

        {/* Right Section - FAQ Placeholder */}
     
        <div className="text-white text-center">   
        {/*
          <Typography variant="h6" className="mb-4 font-bold">
            F.A.Q
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography as="p" className="!text-gray-400">
              + How can I book a car detailing appointment?
            </Typography>
            <Typography as="p" className="!text-gray-400">
              + Can you detail my car at my home, office, or apartment?
            </Typography>
            <Typography as="p" className="!text-gray-400">
              + How long does car detailing usually take?
            </Typography>
          </div>
          */}
        </div> 
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <Typography
          color="blue-gray"
          className="!text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Speedy
        </Typography>
      </div>
    </footer>
  );
}
