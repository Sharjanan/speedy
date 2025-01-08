import React from "react";
import { Button, Typography, Card } from "@material-tailwind/react";

export function Welcome() {
  return (
    
        <Card className="overflow-hidden relative">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <Typography variant="h2" className="text-4xl font-bold">
              STOP WAITING AT GARAGES!
            </Typography>
            <Typography variant="h1" className="text-5xl font-extrabold mt-2">
              MOBILE TIRE SERVICE
            </Typography>
            <Typography
              variant="paragraph"
              className="text-lg mt-4 text-center font-bold"
            >
              Our experts install your tires at your home or workplace.
            </Typography>
            <div className="flex gap-4 mt-4">
              <Button fullWidth variant="text" size="sm" className="">
                <span>BOOK APPOINTMENT</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>REQUEST A CALL BACK</span>
              </Button>
            </div>
          </div>
        </Card>
  );
};
