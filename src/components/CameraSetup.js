import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0.6, 0.2, 0);
    camera.lookAt(0, -0.2, 0.5);
  }, [camera]);

  return null;
}

export default CameraSetup;
