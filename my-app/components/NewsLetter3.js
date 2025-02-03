import { Button, Input, Typography } from "@material-tailwind/react";

export function NewsLetter3() {
  return (
    <section className="py-20 mx-auto container max-w-4xl px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 !items-center">
        <Typography className="text-gray-500 !font-semibold">
          Stay in the Know: Subscribe for Exclusive Updates
        </Typography>
        <div className="flex items-start flex-col gap-4 md:flex-row">
          <Input label="Enter your email" />
          <Button className="flex-shrink-0 md:w-fit w-full">subscribe</Button>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter3;