import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber/native";
import { View } from "react-native";
import { PerspectiveCamera, CameraControls,Environment,OrbitControls } from "@react-three/drei";

function CarShow() {
  return (
    <>
      <Environment/>
      <ambientLight intensity={0.5} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh rotation={[1, 3, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
}

function App() {
  return (
    <View style={{ flex: 1 }}>
        <Canvas shadows>
        <Suspense fallback={null}>
          <CarShow />
          </Suspense>
        </Canvas>
    </View>
  );
}

export default App;
