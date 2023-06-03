import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Model = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/dance.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.dance.play();
  }, []);

  return (
    <primitive
      object={scene}
      scale={1.2}
      position-y={-1.3}
      position-x={-0.3}
      ref={group}
      dispose={null}
    />
  );
};

const AnimatedCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
      }}
      className="z-20"
    >
      <OrbitControls
        enableZoom={false}
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

export default AnimatedCanvas;
