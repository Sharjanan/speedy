import React, { useRef } from "react";
import { Typography } from "@material-tailwind/react";
import { RequestForm } from "../components/RequestForm";
import { Welcome } from "../components/Welcome";
import { NewsLetter3 } from "../components/NewsLetter3";
import PromoVideo from "../components/PromoVideo";
import HowItWorks from "../components/HowItWorks";
import { BookNow } from "../components/BookNow";
import { GoogleReview } from "../components/GoogleReview";
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
        <HowItWorks />
      </div>

      <div className="mx-auto max-w-screen-md">

        {/* Wrap RequestForm in a div and attach ref */}
        <div ref={requestFormRef}>
          <RequestForm />
        </div>
      </div>
      <NewsLetter3 />
      <BookNow onRequestCallback={scrollToRequestForm}/>
      {/* <PromoVideo /> */}
      <GoogleReview />

    </div>
  );
};

export default HomeScreen;
