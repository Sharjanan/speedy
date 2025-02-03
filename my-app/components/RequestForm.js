import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import {
  Input,
  Typography,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Spinner,
} from "@material-tailwind/react";

export function RequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", // Changed to match Firestore
    serviceNeeded: "",
    carType: "",
    carYear: "",
    city: "",
  });

  const years = Array.from({ length: 75 }, (_, i) => 2024 - i);

  const validateForm = () => {
    if (!formData.email.includes('@')) {
      alert("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.replace(/[\s-]/g, '').match(/^\+?\d{10,}$/)) {
      alert("Please enter a valid phone number (minimum 10 digits)");
      return false;
    }
    if (!formData.firstName || !formData.lastName) {
      alert("Please enter both first and last name");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Using the correct collection name from Firestore
      await addDoc(collection(db, "AppointmentRequest"), formData);
      alert("Request submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceNeeded: "",
        carType: "",
        carYear: "",
        city: "",
        postalCode: "",
        message: "",
        address: ""
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(`Failed to submit request: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-8 py-20 container mx-auto">
      <Typography variant="h5" color="blue-gray">
        REQUEST A CALL BACK
      </Typography>
      <Typography variant="small" className="text-gray-600 font-normal mt-1">
        Fill in your information below for a callback.
      </Typography>
      <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
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
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
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
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
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
              Postal Code
            </Typography>
            <Input
              size="lg"
              placeholder="H1H 1H1"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
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
              value={formData.serviceNeeded}
              onChange={(e) => handleSelectChange("serviceNeeded", e)}
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
              value={formData.carType}
              onChange={(e) => handleSelectChange("carType", e)}
              className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
            >
              <Option>Sedan</Option>
              <Option>Suv</Option>
              <Option>Coupe</Option>
              <Option>Hatchback</Option>
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
              value={formData.carYear}
              onChange={(e) => handleSelectChange("carYear", e)}
              className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
            >
              {years.map((year) => (
                <Option key={year}>{year}</Option>
              ))}
            </Select>
          </div>
        </div>
        
    
   
      <div className="flex-grow">
        {/* Form content goes here */}
      </div>
      <div className="mb-6 flex justify-center">
        <Button
          type="submit"
          className="border rounded-lg text-white font-extrabold"
          style={{ borderColor: 'white', backgroundColor: '#A60E0E' }}
        >
          Submit
        </Button>
      </div>
 
        
      </div>
    </section>
  );
}
