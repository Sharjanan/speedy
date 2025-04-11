import React from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import { FaHandPointer } from "react-icons/fa"; // Click Icon

const welcome = "../assets/tire-change.jpg";
const range = "../assets/rangerover2.jpg";
const incomingCall = "../assets/incoming2.gif";

const HowItWorks = ({ onRequestCallback }) => {
  const steps = [
    {
      title: "Submit Request",
      description: "Fill out the appointment request form with your details.",
      number: "1",
      bgImage: welcome,
      button: (
        <Button
          variant="text"
          size="sm"
          className="border rounded-lg text-white font-extrabold flex items-center justify-center gap-2 px-4 py-2"
          style={{ borderColor: "white", backgroundColor: "#A60E0E", width: "auto" }}
          onClick={onRequestCallback}
        >
          <FaHandPointer className="text-lg" /> REQUEST A CALL BACK
        </Button>
      ),
    },
    {
      title: "Receive a Call",
      description: "Our team will call you to schedule your appointment at your convenience.",
      number: "2",
      bgImage: incomingCall, 
    },
    {
      title: "We Come to You",
      description: "Our experts arrive at your location to service your vehicle.",
      number: "3",
      bgImage: range,
    },
  ];

  return (
    
    <div className="relative flex flex-col items-center bg-cover bg-center py-12 px-4 sm:px-8 w-full">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Content Wrapper */}
      <div className="relative text-center text-white">
        <Typography variant="h2" className="text-5xl  font-bold mb-6">
          WHY PNEU SPEEDY MOBILE
        </Typography>

        {/* Step Cards - Styled like iPhones */}
        <div className="flex flex-wrap  md:flex-row gap-16 justify-center w-full">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Number (Above the Card) */}
              <div className="text-5xl font-extrabold text-400 mb-2 "  style={{ color: "#A60E0E" }}>
                {step.number}
              </div>

              {/* iPhone-style Card */}
              <Card
                className="relative w-72 h-[36rem] flex flex-col items-center justify-center border-4 border-white shadow-xl 
                          backdrop-blur-md rounded-[2.5rem] overflow-hidden text-white p-6"
                style={{
                  background: step.bgImage
                    ? `url(${step.bgImage}) center/cover no-repeat`
                    : "rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* iPhone Notch */}
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>

                {/* Add Button Only for Step 1 Inside the iPhone */}
                {index === 0 && step.button && <div className="absolute bottom-12">{step.button}</div>}
              </Card>

              {/* Step Title and Description Under Card */}
              <Typography variant="h5" className="text-xl font-bold mt-4">
                {step.title}
              </Typography>
              <Typography className="text-sm px-4 mt-2 text-center max-w-[16rem]">
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
