import React from "react";
import { Button, Typography, Card } from "@material-tailwind/react";
import tireImage from "../assets/tire-change.jpg";
import promoVideo from "../assets/promovideo.mp4";

export function Welcome({ onRequestCallback }) {
  return (
    <Card className="overflow-hidden relative rounded-none">
      <div className="relative">
      <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[32rem] w-full object-cover object-center"
        >
          <source src="../assets/promovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <Typography variant="h2" className="text-4xl font-bold">
          STOP WAITING AT GARAGES!
        </Typography>
        <Typography variant="h1" className="text-5xl font-extrabold mt-2">
          MOBILE TIRE SERVICE
        </Typography>
        <Typography variant="paragraph" className="text-lg mt-4 text-center font-bold">
          Our experts install your tires at your home or workplace.
        </Typography>
        <div className="flex gap-4 mt-4">
          <Button
            fullWidth
            variant="text"
            size="sm"
            className="border border-white text-white rounded-lg font-extrabold  hover:bg-white hover:text-black mt-4"
            onClick={onRequestCallback}
          >
            <span>BOOK APPOINTMENT</span>
          </Button>
          <Button
            fullWidth
            variant="text"
            size="sm"
            className="border  border-white rounded-lg text-white font-extrabold  bg-[#A60E0E]  hover:bg-white hover:text-black mt-4"
            onClick={onRequestCallback} // Scrolls to the form when clicked
          >
            REQUEST A CALL BACK
          </Button>
        </div>
      </div>
    </Card>
  );
}
