import React, { useState, useEffect } from "react";
import { Button, Typography, Navbar } from "@material-tailwind/react";
import logo from "../assets/pneuspeedy-removebg-preview.png";
import { db } from "../firebaseConfig"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore";



export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [mechanicPhone, setMechanicPhone] = useState("");

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
    let cleaned = phoneNumber.replace(/[^\d]/g, '');
  
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

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-extrabold">
        <a href="#" className="flex items-center">PRICING</a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-extrabold">
        <a href="#" className="flex items-center">CONTACT</a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-extrabold">
        <a href="#" className="flex items-center">ABOUT US</a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-24 max-w-full rounded-none px-8 py-0 shadow-md">
      <div className="flex items-center justify-between text-blue-gray-900">
        
        {/* LOGO */}
        <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
          <img alt="Logo" className="lg:ml-4 cursor-pointer mt-[-70px]" src="../assets/pneuspeedy-removebg-preview.png" />
        </div>

        {/* Desktop Nav & Contact */}
        <div className="hidden lg:flex items-center gap-8 mt-[-70px]">
          {navList}
          <Button variant="text" size="sm">FR</Button>
          <Button variant="gradient" size="sm" className="bg-red-600 text-white"   onClick={() => window.location.href =  `tel:${mechanicPhone}`}>
             {mechanicPhone ? formatPhoneNumber(mechanicPhone) : "Loading..."}
          </Button>
        </div>

        {/* DaisyUI Dropdown for Mobile */}
        <div className="lg:hidden flex items-center mt-[-70px]">
          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={() => setOpenNav(!openNav)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Dropdown Content */}
            {openNav && (
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 absolute right-0 z-50">
                {navList}
                <div className="flex flex-col items-center gap-2">
                  <Button variant="text" size="sm">FR</Button>
                  <Button variant="gradient" size="sm" className="bg-[#A60E0E]  hover:bg-white hover:text-black text-white " onClick={() => window.location.href =  `tel:${mechanicPhone}`}>
                  {mechanicPhone ? formatPhoneNumber(mechanicPhone) : "Loading..."}
                  </Button>
                </div>
              </ul>
            )}
          </div>
        </div>
      </div>
    </Navbar>
  );
}
