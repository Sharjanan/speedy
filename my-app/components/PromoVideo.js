
import promoVideo from "../assets/promovideo.mp4";
import React, { useRef, useState } from "react";

const PromoVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="mx-auto max-w-screen-lg my-8 text-center">
      <video
        ref={videoRef}
        className="w-full h-auto rounded-lg shadow-lg"
        autoPlay
        muted
        controls
      >
        <source src="../assets/promovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      
    </div>
  );
};

export default PromoVideo;
