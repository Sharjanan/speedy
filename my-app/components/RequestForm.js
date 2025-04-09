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
//import {Confirmation} from "./Confirmation";
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
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.replace(/[\s-]/g, "").match(/^\+?\d{10,}$/)) {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name) => (value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Save the appointment request to Firestore
      const docRef = await addDoc(collection(db, "AppointmentRequest"), formData);
      console.log("✅ Document saved with ID:", docRef.id);
      console.log("📤 Sending data to backend:", JSON.stringify(formData, null, 2));
      const response = await fetch("https://us-central1-speedy-c4155.cloudfunctions.net/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);

        
    if (response.ok) {
      alert("✅ Request submitted successfully!");
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
      });
    } else {
      alert("❌ Failed to submit request.");
    }
    } catch (error) {
        console.error("Error:", error);
        alert(`Failed to submit request: ${error.message}`);
    } finally {
        setIsSubmitting(false);
    }
};
  return (
    <section className="px-8 py-20 container mx-auto">
       <div className="relative text-center ">
      <Typography variant="h2" className="text-4xl font-bold" color="blue-gray">
        REQUEST A CALL BACK
      </Typography>
      <Typography variant="small" className="text-gray-600 font-normal mt-1">
        Fill in your information below for a callback.
      </Typography>
      </div>
      
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
              name="postalCode"
              value={formData.postalCode}
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
              name="city"
              value={formData.city}
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
              onChange={handleSelectChange("serviceNeeded")}
            >
              <Option value="Tire Change with Rims">Tire Change with Rims</Option>
              <Option value="Tire Change without Rims">Tire Change without Rims</Option>
              <Option value="Tire Change">Tire Change</Option>
              <Option value="Oil Change">Oil Change</Option>
              <Option value="General Mechanic">General Mechanic</Option>
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
              onChange={handleSelectChange("carType")}          
              className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
            >
              <Option value="Sedan">Sedan</Option>
              <Option value="Suv">SUV</Option>
              <Option value="Coupe">Coupe</Option>
              <Option value="Hatchback">Hatchback</Option>
              <Option value="Pickup">Pickup</Option>
              <Option value="Truck">Truck</Option>
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
              onChange={handleSelectChange("carYear")}
              className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
            >
              {years.map((year) => (
                 <Option key={year} value={year}>{year}</Option>
              ))}
            </Select>
          </div>
        </div>

        <div className="mb-6 flex justify-center">
          <Button
            type="submit"
            className="border rounded-lg text-white font-extrabold"
            style={{ borderColor: "white", backgroundColor: "#A60E0E" }}
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
 }
