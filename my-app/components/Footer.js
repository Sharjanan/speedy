import { Typography } from "@material-tailwind/react";

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
    <footer className="bg-gray-900 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          {/* Contact Info */}
          <div className="text-gray-500 md:w-1/2">
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                <span className="w-5">📞</span>
                <Typography as="a" href={`tel:${contactDetails.phone}`} className="!text-gray-500 hover:!text-gray-300">
                  {contactDetails.phone}
                </Typography>
              </div>
              <div className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                <span className="w-5">✉️</span>
                <Typography as="a" href={`mailto:${contactDetails.email}`} className="!text-gray-500 hover:!text-gray-300">
                  {contactDetails.email}
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5">📍</span>
                <Typography as="a" 
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactDetails.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-gray-500 hover:!text-gray-300">
                  {contactDetails.address}
                </Typography>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:w-1/2">
            {links.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {columnIndex === 0 ? "Navigation" : "Resources"}
                </h3>
                {column.map((link, index) => (
                  <Typography
                    key={index}
                    as="a"
                    href="#"
                    className="font-medium !text-gray-500 transition-colors hover:!text-gray-300 hover:translate-x-1 transform duration-200"
                  >
                    {link}
                  </Typography>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <Typography
            color="blue-gray"
            className="!text-sm !font-normal text-gray-500 text-center"
          >
            Copyright &copy; {currentYear} Speedy. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}