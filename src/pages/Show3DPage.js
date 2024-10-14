import React, { useState } from "react";
import { motion } from "framer-motion";
import Show3DModel from "../components/Show3DModel";
import { ChevronDown, ChevronUp, RotateCcw, ZoomIn, ZoomOut, Info, Home } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function Show3DPage() {
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const colors = [
    { name: "Midnight Black", hex: "#000000" },
    { name: "Arctic White", hex: "#FFFFFF" },
    { name: "Electric Blue", hex: "#0000FF" },
    { name: "Sunset Orange", hex: "#FFA500" },
  ];

  const toggleControls = () => setIsControlsOpen(!isControlsOpen);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen relative overflow-y-hidden">
      <div className="absolute top-4 left-[8rem] z-10">
        <motion.button
          className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center"
          onClick={() => setShowInfo(!showInfo)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Info size={20} className="mr-2" />
          {showInfo ? "Hide" : "Show"} Info
        </motion.button>
      </div>
      
      <div className="absolute top-4 left-4 z-10">
        <motion.button
          className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home size={20} className="mr-2" />
          Home
        </motion.button>
      </div>
      
      {showInfo && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-4 z-10 bg-white p-4 rounded-lg shadow-lg max-w-md"
        >
          <h2 className="text-xl font-bold mb-2">NAMX HUV Features</h2>
          <ul className="list-disc pl-5">
            <li>Hydrogen fuel cell technology</li>
            <li>Range of up to 800 km</li>
            <li>0-100 km/h in 4.5 seconds</li>
            <li>Advanced AI-assisted driving</li>
            <li>Panoramic glass roof</li>
          </ul>
        </motion.div>
      )}

      <div className="flex justify-center">
        <Show3DModel color={colors[activeColorIndex].hex} />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg overflow-hidden"
        initial={{ y: "100%" }}
        animate={{ y: isControlsOpen ? 0 : "calc(100% - 60px)" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          className="w-full py-4 flex justify-center items-center text-gray-700 focus:outline-none"
          onClick={toggleControls}
        >
          {isControlsOpen ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
          <span className="ml-2">Controls</span>
        </button>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Color Selection</h3>
            <div className="flex space-x-4">
              {colors.map((color, index) => (
                <button
                  key={color.name}
                  className={`w-10 h-10 rounded-full border-2 ${
                    index === activeColorIndex ? "border-blue-500" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setActiveColorIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-around">
            <motion.button
              className="bg-gray-200 p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <RotateCcw size={24} />
            </motion.button>
            <motion.button
              className="bg-gray-200 p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ZoomIn size={24} />
            </motion.button>
            <motion.button
              className="bg-gray-200 p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ZoomOut size={24} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Show3DPage;