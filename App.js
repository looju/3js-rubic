import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

function CarShow() {
  <>
    <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
    <PerspectiveCamera makeDefault position={[3, 2, 5]} frames={50} />
    <mesh>
      <boxGeometry args={[1,1,1]}/>
      <meshBasicMaterial color={"red"}/>
      </mesh>
  </>;
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
