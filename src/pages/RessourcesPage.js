import React from "react";
import { ChevronDown, ChevronUp, ExternalLink, ArrowLeft, Bot } from "lucide-react"; // Import ArrowLeft icon
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { useNavigate } from "react-router-dom"; // Import useHistory hook

const TechCard = ({ icon: Icon, name }) => (
  <motion.div
    className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 m-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-8 h-8 text-blue-500 mr-3" />
    <span className="text-gray-700 font-medium">{name}</span>
  </motion.div>
);

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default function ResourcesPage() {
  const navigate = useNavigate(); // Initialize the history object

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/')} // Go back functionality
          className="flex items-center text-blue-500 hover:underline"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Go Back
        </button>
      </div>

      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Resources
      </motion.h1>

      <motion.div
        className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-xl shadow-lg mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
        <p className="text-gray-700">
          This website is created solely for showcasing skills and is not meant to infringe on any rights or create any problems. It is not affiliated with NAMX HUV or its official website.
        </p>
      </motion.div>

      <div className="space-y-6">
        <AccordionItem title="Ownership Notice">
          <p className="text-gray-700">
            The NAMX HUV, including its specifications, descriptions, and any associated materials, are the intellectual property of NAMX. All rights are reserved by the respective owner.
          </p>
        </AccordionItem>

        <AccordionItem title="Technologies Used">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <TechCard icon={FaReact} name="React" />
            <TechCard icon={SiTailwindcss} name="Tailwind CSS" />
            <TechCard icon={TbBrandThreejs} name="Three.js" />
            <TechCard icon={Bot} name="Chatbot AI Tool" />
          </div>
        </AccordionItem>

        <AccordionItem title="Learn More">
          <p className="text-gray-700 mb-4">
            For more detailed information about the NAMX HUV, visit the official website:
          </p>
          <a
            href="https://www.namx-hydrogen.com"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            NAMX Hydrogen
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </AccordionItem>
      </div>
    </div>
  );
}
