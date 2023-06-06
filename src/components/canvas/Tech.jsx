import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Model = () => {
  const { scene } = useGLTF("/tech.glb");

  return (
    <primitive
      object={scene}
      scale={0.055}
        // scale={0.02}
    />
  );
};

const TechCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 35,
      }}
      className="z-20"
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
      />
      <ambientLight intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <Model />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default TechCanvas;
