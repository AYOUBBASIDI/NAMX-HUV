import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationMixer, Clock, LoopOnce, MeshStandardMaterial  } from "three";

function CarModel({ color, playAnimation, startFrame, endFrame, onClick, onHover }) {
  const gltf = useLoader(GLTFLoader, "/car.glb");
  const mixer = useRef();
  const clock = useRef(new Clock());
  const [action, setAction] = useState(null);
  const clickableRef = useRef();
  const group = useRef();

  useEffect(() => {
    if (gltf.animations.length) {
      mixer.current = new AnimationMixer(gltf.scene);
      const clip = gltf.animations.find(
        (clip) => clip.name === "Armature|ArmatureAction"
      );
      if (clip) {
        const action = mixer.current.clipAction(clip);
        action.loop = LoopOnce;
        action.clampWhenFinished = true;
        action.time = startFrame / 30;
        setAction(action);
      }
    }
  }, [gltf, startFrame]);

  useEffect(() => {
    const newMaterial = new MeshStandardMaterial({ color: color });
    group.current.traverse((child) => {
      if (child.isMesh && child.material.name === "Body") {
        child.material = newMaterial;
      }
    });
    console.log(color);
  }, [color]);

  useFrame(() => {
    if (playAnimation && action) {
      const delta = clock.current.getDelta();
      mixer.current.update(delta);

      const fps = 30;
      const startTime = startFrame / fps;
      const endTime = endFrame / fps;

      if (action.time >= endTime) {
        action.paused = true;
      } else {
        if (action.time < startTime) {
          action.time = startTime;
        }
        action.play();
      }
    }
  });

  const handleClick = (event) => {
    event.stopPropagation();
    if (onClick) {
      onClick(startFrame, endFrame);
    }
  };

  const handleHover = (text) => {
    if (onHover) {
      onHover(text);
    }
  };

  const handlePointerOut = () => {
    handleHover("");
  };

  return (
      <group ref={group} dispose={null}>
        <primitive
          object={gltf.scene}
          scale={[0.2, 0.2, 0.2]}
          position={[0, -0.2, 0.5]}
        />
        <mesh
          ref={clickableRef}
          position={[0, 0.055, 0.38]}
          rotation={[Math.PI / -2.4, 0, 0]}
          onClick={handleClick}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = "pointer";
            handleHover("Toggle Door");
          }}
          onPointerOut={handlePointerOut}
        >
          <circleGeometry args={[0.008, 230]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </group>
  );
}

export default CarModel;
