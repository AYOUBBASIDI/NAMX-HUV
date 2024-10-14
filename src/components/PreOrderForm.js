import React, { useState } from "react";
import { motion } from 'framer-motion';
import { User, Mail, Phone, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PreOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="relative">
          <Phone className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="relative">
          <CreditCard className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number ( Do not use real information !! )"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
      </div>
      <motion.button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Pre-Order Now
      </motion.button>
      <motion.button
        type="button" // Use "button" type to prevent form submission
        onClick={handleCancel} // Define a function to handle the cancel action
        className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 mt-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Cancel
      </motion.button>
    </motion.form>
  );
}

export default PreOrderForm;