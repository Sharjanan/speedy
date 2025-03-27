import React, { useState, useEffect } from "react";
import { Button, Typography, Navbar } from "@material-tailwind/react";
import logo from "../assets/pneuspeedy-removebg-preview.png";
import { db } from "../firebaseConfig"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore";
import LanguageDropdown from "./LanguageDropdown";
import { motion } from "framer-motion";
import { Drawer, IconButton } from "@material-tailwind/react";
export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const openDrawer = () => setOpenNav(true);
  const closeDrawer = () => setOpenNav(false);
  const [mechanicPhone, setMechanicPhone] = useState("");
  const [language, setLanguage] = useState("English");
  const fetchPhoneNumber = async () => {
    try {
      const docRef = doc(db, "Config", "Twilio"); // Reference to Twilio document
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setMechanicPhone(docSnap.data().MECHANIC_PHONE_NUMBER);
      } else {
        console.error("❌ No phone number found in Firestore!");
      }
    } catch (error) {
      console.error("⚠️ Error fetching phone number:", error);
    }
  };
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return ""; // Handle empty cases

    // Remove non-numeric characters but keep leading "+"
    let cleaned = phoneNumber.replace(/[^\d]/g, "");

    // If the number starts with "1" (USA/Canada country code), remove it
    if (cleaned.startsWith("1") && cleaned.length === 11) {
      cleaned = cleaned.substring(1);
    }

    // Match the standard (XXX) XXX-XXXX format
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return phoneNumber; // Return original if format is unexpected
  };
  // Fetch phone number when the component mounts
  useEffect(() => {
    fetchPhoneNumber();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNav]);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-extrabold"
      >
        <a href="#" className="flex items-center">
          PRICING
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-extrabold"
      >
        <a href="#" className="flex items-center">
          CONTACT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-extrabold"
      >
        <a href="#" className="flex items-center">
          ABOUT US
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-24 max-w-full rounded-none px-8 py-0 shadow-md">
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* LOGO */}
        <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
          <img
            alt="Logo"
            className="lg:ml-4 cursor-pointer mt-[-70px]"
            src="../assets/pneuspeedy-removebg-preview.png"
          />
        </div>

        {/* Desktop Nav & Contact */}
        <div className="hidden lg:flex items-center gap-8 mt-[-70px]">
          {navList}
          <LanguageDropdown language={language} setLanguage={setLanguage} />
          <Button
            variant="gradient"
            size="sm"
            className="bg-red-600 text-white"
            onClick={() => (window.location.href = `tel:${mechanicPhone}`)}
          >
            {mechanicPhone ? formatPhoneNumber(mechanicPhone) : "Loading..."}
          </Button>
        </div>

        {/* DaisyUI Dropdown for Mobile */}

        <div className="lg:hidden flex items-center mt-[-70px]">
          <React.Fragment>
            <Drawer
              open={openNav}
              onClose={closeDrawer}
              placement="right"
              className="p-4 bg-transparent z-[9999]"
            >
              {/* Dropdown Content */}
              {openNav && (
                <div
                  className={`fixed -top-1 -right-5  mr-4 h-[105vh] bg-white shadow-lg z-[9999] p-4 overflow-hidden`}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <img
                        alt="Logo"
                        className="lg:ml-4 cursor-pointer mt-[-70px]"
                        src="../assets/pneuspeedy-removebg-preview.png"
                      />
                    </div>

                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={closeDrawer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </IconButton>
                  </div>

                  <ul tabIndex={0} className="items-center flex flex-col ">
                    {navList}
                    <div className="flex flex-col items-center gap-2"></div>
                  </ul>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outlined">
                      <LanguageDropdown
                        language={language}
                        setLanguage={setLanguage}
                      />
                    </Button>
                    <Button size="sm">Get Started</Button>
                  </div>
                </div>
              )}
            </Drawer>
          </React.Fragment>

          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={() => setOpenNav(!openNav)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
