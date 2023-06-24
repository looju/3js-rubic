import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Expo from "expo";
import {
  Scene,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  BoxGeometry,
} from "three";
import { Dimensions } from "react-native";
import ExpoTHREE, { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { Asset } from "expo-asset";

const { width, height } = Dimensions.get("screen");

const App = () => {
  const onContextCreate = async (gl) => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );

    gl.canvas = {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
    };
    camera.position.z = 5;

    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({
      color: "blue",
    });

    const cube = new Mesh(geometry, material);

    scene.add(cube);

    const asset = Asset.fromModule(require("./assets/scene.gltf"));
    await asset.downloadAsync();
    const gltfLoader = new GLTFLoader();
    const rgbeLoader = new RGBELoader();

    let car;
    gltfLoader.load(asset.localUri, (gltf) => {
      const model = gltf.scene;
      scene.add(model);
      car = model;
    });

    const render = () => {
      requestAnimationFrame(render);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      if (car) {
        car.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    render();
  };

  return (
    <View>
      <GLView onContextCreate={onContextCreate} style={styles.gl} />
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
  gl: {
    width: width,
    height: height,
  },
});

export default App;
