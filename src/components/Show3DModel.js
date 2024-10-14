import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import CarModel from "./CarModel";
import CameraSetup from "./CameraSetup";

function Show3DModel({ color }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const [isDoorOpen, setIsDoorOpen] = useState(false);


  // const handlePlayAnimation = (startFrame, endFrame) => {
  //   setFrameParams({ startFrame, endFrame });
  //   setPlayAnimation(true);
  // };

  const toggleDoor = () => {
    // const newStartFrame = isDoorOpen ? 1300 : 1124;
    // const newEndFrame = isDoorOpen ? 1440 : 1283;
    setIsDoorOpen(!isDoorOpen);
    // handlePlayAnimation(newStartFrame, newEndFrame);
  };
  console.log(color);

  return (
    <div className="relative w-full h-screen bg-gray-300">
      <Canvas shadows camera={{ position: [0.6, 0.2, 0], fov: 50 }}>
        {/* <CameraSetup /> */}
        <Environment preset="warehouse" background={false} />
        <CarModel
          color={color}
          playAnimation={isDoorOpen}
          startFrame={isDoorOpen ? 1124 : 1300}
          endFrame={isDoorOpen ? 1283 : 1440}
          onClick={toggleDoor}
        />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          minDistance={0.1}
          maxDistance={1}
        />
      </Canvas>

      {tooltipVisible && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -100%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "4px",
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}

export default Show3DModel;
