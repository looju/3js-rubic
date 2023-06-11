import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Expo from "expo";
import { Scene, Mesh, MeshBasicMaterial, PerspectiveCamera } from "three";
import ExpoTHREE, { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";

const App = () => {
  const onContextCreate = async () => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
  };

  gl.canvas = { width: gl.drawingBufferWidth, height: gl.drawingBufferHeight };

  const renderer = new Renderer({ gl });
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

  return (
    <View>
      <GLView onContextCreate={() => onContextCreate()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
