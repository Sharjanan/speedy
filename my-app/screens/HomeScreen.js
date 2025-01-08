import React from "react";
import { Button, Typography, Card } from "@material-tailwind/react";
import { RequestForm }from"../components/RequestForm"
import { Welcome }from"../components/Welcome"
const HomeScreen = () => {
  return (
    <div>
      <div className="mx-auto">
        <Welcome />
        {/* New Section */}
        <div className="bg-black py-12">
          <div className="mx-auto max-w-screen-lg text-center">
            <Typography variant="h1" className="text-white text-4xl font-bold">
              HOW IT WORKS
            </Typography>
          </div>
        </div>
      </div>

      <div className=" mx-auto max-w-screen-md">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
        <RequestForm />
      </div>
    </div>
  );
};

export default HomeScreen;
