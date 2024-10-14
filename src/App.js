import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Show3DPage from "./pages/Show3DPage";
import PreOrderPage from "./pages/PreOrderPage";
import Chatbot from "./components/Chatbot";
import RessourcesPage from "./pages/RessourcesPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Chatbot />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/3d-model" element={<Show3DPage />} />
          <Route path="/pre-order" element={<PreOrderPage />} />
          <Route path="/resources" element={<RessourcesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
