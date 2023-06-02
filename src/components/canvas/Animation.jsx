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
      scale={1}
      position-y={-1}
      position-x={-0.2}
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
        fov: 35,
      }}
      className="z-20"
    >
      <OrbitControls
        // autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
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
