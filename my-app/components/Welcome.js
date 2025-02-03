import React from "react";
import { Button, Typography, Card } from "@material-tailwind/react";
import tireImage from "../assets/tire-change.jpg";

export function Welcome({ onRequestCallback }) {
  return (
    <Card className="overflow-hidden relative">
      <div className="relative">
        <img
          alt="tire change service"
          className="h-[32rem] w-full object-cover object-center"
          src="../assets/tire-change.jpg"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
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
            className="border border-white text-white rounded-lg font-extrabold mt-4"
          >
            <span>BOOK APPOINTMENT</span>
          </Button>
          <Button
            fullWidth
            variant="text"
            size="sm"
            className="border rounded-lg text-white font-extrabold mt-4"
            style={{ borderColor: "white", backgroundColor: "#A60E0E" }}
            onClick={onRequestCallback} // Scrolls to the form when clicked
          >
            REQUEST A CALL BACK
          </Button>
        </div>
      </div>
    </Card>
  );
}
