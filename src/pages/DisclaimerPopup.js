import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ExternalLink } from 'lucide-react';

const DisclaimerPopup = ({ onAccept }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full"
      >
        <div className="flex items-center mb-4 text-yellow-500">
          <AlertCircle size={24} className="mr-2" />
          <h2 className="text-2xl font-bold">Disclaimer</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This website is a personal project showcasing Three.js, React.js, and web development skills. It is not affiliated with NAMX HUV or its official website.
        </p>
        <div className="mb-6">
          <a 
            href="https://www.namx-hydrogen.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            Visit the official NAMX HUV website
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <a 
            href="/resources" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300 text-center"
          >
            Resources Page
          </a>
          <button
            onClick={onAccept}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Continue to Website
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DisclaimerPopup;