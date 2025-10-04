import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const MemberShipJoin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "Basic"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleJoin = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/membership/join`,
        formData
      );

      if (data.success) {
        toast.success(data.message);
        setFormData({ name: "", email: "", plan: "Basic" }); // reset form
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Join Our Gym</h1>
      
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mb-2 rounded w-64"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 mb-2 rounded w-64"
      />

      <select
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        className="border p-2 mb-4 rounded w-64"
      >
        <option value="Basic">Basic</option>
        <option value="Premium">Premium</option>
        <option value="Gold">Gold</option>
      </select>

      <button
        onClick={handleJoin}
        className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:opacity-90"
      >
        Join Now
      </button>
    </div>
  );
};

export default MemberShipJoin;
