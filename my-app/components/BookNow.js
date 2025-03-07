import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const bookNowBg = "../assets/Tire-Replacement.jpg"; // Ensure the correct image path

export function BookNow({ onRequestCallback }) {
  return (
    <div
      className="relative flex items-center justify-center text-left py-24 px-8 md:px-16"
      style={{
        backgroundImage: `url(${bookNowBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content - Centered Horizontally & Left-Aligned */}
      <div className="relative  text-white max-w px-6 md:px-12 mx-auto">
        <Typography variant="h1" className="text-5xl md:text-5xl font-bold uppercase">
          BOOK AN APPOINTMENT NOW!
        </Typography>
        <Typography variant="h2" className="mt-4 text-lg md:text-xl uppercase">
          GET YOUR TIRES CHANGED AT THE CONVENIENCE OF YOUR HOME OR WORKPLACE.
        </Typography>

        {/* Book Now Button */}
        <Button
          className="mt-6 bg-red-600 text-white px-8 py-3 text-lg font-bold rounded-lg hover:bg-red-700 transition duration-300 uppercase"
          onClick={onRequestCallback}
        >
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};


