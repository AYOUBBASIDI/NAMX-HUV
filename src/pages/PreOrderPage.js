import React from "react";
import PreOrderForm from "../components/PreOrderForm";
import { motion } from 'framer-motion';

function PreOrderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <h1 className="text-5xl font-bold mb-8 text-center text-white">
          Pre-Order the NAMX HUV
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <PreOrderForm />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PreOrderPage;