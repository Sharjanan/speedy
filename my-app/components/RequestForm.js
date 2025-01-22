import React from "react";

// @material-tailwind/react
import {
  Input,
  Typography,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

// day picker
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

// @heroicons/react
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export function RequestForm() {
  const [date, setDate] = React.useState();
  // Generate years from 1950 to 2024
  const years = [];
  for (let year = 2024; year >= 1950; year--) {
    years.push(year);
  }
  return (
    <section className="px-8 py-20 container mx-auto">
      <Typography variant="h5" color="blue-gray">
      REQUEST A CALL BACK
      </Typography>
      <Typography
        variant="small"
        className="text-gray-600 font-normal mt-1"
      >
        Update your profile information below.
      </Typography>
      <div className="flex flex-col mt-8">
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              First Name
            </Typography>
            <Input
              size="lg"
              placeholder="Emma"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Last Name
            </Typography>
            <Input
              size="lg"
              placeholder="Roberts"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="emma@mail.com"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="+1-514 123 456"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          
        </div>
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Service Needed
            </Typography>
            <Select
              size="lg"
              labelProps={{
                className: "hidden",
              }}
              className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
            >
              <Option>Tire Change with Rims</Option>
              <Option>Tire Change without Rims</Option>
              <Option>Tire Change</Option>
              <Option>Oil Change</Option>
              <Option>General Mechanic</Option>
            </Select>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Car Type
            </Typography>
            <Select
              size="lg"
              labelProps={{
                className: "hidden",
              }}
              className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
            >
              <Option>sedan</Option>
              <Option>suv</Option>
              <Option>coupe</Option>
              <Option>hatchback</Option>
              <Option>Pickup</Option>
              <Option>Truck</Option>
            </Select>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Car Year
            </Typography>
            <Select
              size="lg"
              labelProps={{
                className: "hidden",
              }}
              className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
            >
             {years.map((year) => (
          <Option key={year}>{year}</Option>
        ))}
            </Select>
          </div>
        </div>
        
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              City
            </Typography>
            <Input
              size="lg"
              placeholder="Montreal, QC"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
         
        </div>
        
      </div>
    </section>
  );
}

