import React, { useState, useEffect } from "react";
import DisclaimerPopup from './DisclaimerPopup';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HomePage = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem('disclaimerAccepted');
    if (!disclaimerAccepted) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="relative bg-black min-h-screen text-white">
      {showDisclaimer && <DisclaimerPopup onAccept={handleAcceptDisclaimer} />}
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source src="/vd-namx.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-4"
          >
            NAMX HUV
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl mb-8"
          >
            The Future of Hydrogen-Powered SUVs
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a 
              href="/pre-order" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Pre-Order Now
            </a>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Revolutionary Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Hydrogen Power', 'Eco-Friendly', 'Advanced Technology'].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-400">Experience the cutting-edge {feature.toLowerCase()} of NAMX HUV.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Explore in 3D</h2>
          <p className="text-xl mb-12">Get a 360° view of the NAMX HUV</p>
          <a 
            href="/3d-model" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            View 3D Model
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What Experts Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "The future of driving starts here. Innovative, powerful, and eco-friendly.", author: "Elon Musk" },
              { quote: "A true revolution in the automotive industry. Pre-order yours today.", author: "James Dyson" },
              { quote: "The best hydrogen-powered car I've ever seen. Sleek, stylish, and efficient.", author: "Bill Gates" }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-blue-400">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center">
        <p className="text-gray-400">&copy; 2024 NAMX HUV. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;