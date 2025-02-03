import React, { useRef } from "react";
import { Typography } from "@material-tailwind/react";
import { RequestForm } from "../components/RequestForm";
import { Welcome } from "../components/Welcome";
import { NewsLetter3 } from "../components/NewsLetter3";

const HomeScreen = () => {
  // Create a reference for the RequestForm section
  const requestFormRef = useRef(null);

  // Function to scroll to the form section
  const scrollToRequestForm = () => {
    if (requestFormRef.current) {
      requestFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="mx-auto">
        {/* Pass scrollToRequestForm function as a prop to Welcome */}
        <Welcome onRequestCallback={scrollToRequestForm} />

        {/* "HOW IT WORKS" Section */}
        <div className="bg-black py-12">
          <div className="mx-auto max-w-screen-lg text-center">
            <Typography variant="h1" className="text-white text-4xl font-bold">
              HOW IT WORKS
            </Typography>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-md">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind?
        </Typography>
        <Typography color="gray" className="font-normal">
          Our service allows you to book tire changes at your convenience...
        </Typography>

        {/* Wrap RequestForm in a div and attach ref */}
        <div ref={requestFormRef}>
          <RequestForm />
        </div>

        <NewsLetter3 />
      </div>
    </div>
  );
};

export default HomeScreen;
