import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);

  const [audio] = useState(() => {
    const audioInstance = new Audio('/notification.mp3');
    audioInstance.volume = 0.1;
    return audioInstance;
  });

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('keydown', handleUserInteraction);
      }
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    if (hasInteracted) {
      const popupTimer = setTimeout(() => {
        setIsOpen(true);
        audio.play();
        addMessage("bot", "Hello👋 How can I help you with the NAMX HUV today?");
      }, 5000);

      return () => clearTimeout(popupTimer);
    }
  }, [hasInteracted, audio]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
  };

  const handleSend = () => {
    if (input.trim()) {
      addMessage("user", input);
      setInput("");
      setTimeout(() => handleBotResponse(input), 500);
    }
  };

  const handleBotResponse = (userInput) => {
    const lowercaseInput = userInput.toLowerCase();
    let botResponse = "I'm sorry, I didn't understand that. Can you please rephrase your question?";

    if (lowercaseInput.includes("pre-order") || lowercaseInput.includes("buy")) {
      botResponse = "Great! You can pre-order the NAMX HUV on our website. Would you like me to direct you to the pre-order page?";
    } else if (lowercaseInput.includes("price") || lowercaseInput.includes("cost")) {
      botResponse = "The NAMX HUV price starts at €65,000 for the base model. Would you like more information about our pricing tiers?";
    } else if (lowercaseInput.includes("features") || lowercaseInput.includes("specifications")) {
      botResponse = "The NAMX HUV features a hydrogen fuel cell, 300 kW electric motor, and a range of up to 800 km. Would you like to know more about any specific feature?";
    } else if (lowercaseInput.includes("delivery") || lowercaseInput.includes("when")) {
      botResponse = "We're aiming to start deliveries in early 2025. Would you like to be notified when we have more specific dates?";
    }

    addMessage("bot", botResponse);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed z-50 bottom-24 right-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">NAMX HUV Assistant</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-3/4 p-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="fixed z-50 bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={24} />
      </motion.button>
    </>
  );
}

export default Chatbot;