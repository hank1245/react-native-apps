import React, { useRef } from "react";
import { Alert, View } from "react-native";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
} from "three";

export default function ThreeScene() {
  const renderer = useRef(null);
  const glViewRef = useRef(null);

  const onContextCreate = async (gl) => {
    // Create Three.js renderer
    renderer.current = new Renderer({ gl });
    renderer.current.setClearColor(0xffffff);

    // Create camera
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create scene
    const scene = new Scene();

    // Create box
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshNormalMaterial();
    const box = new Mesh(geometry, material);
    scene.add(box);

    // Animate the box
    const animate = () => {
      requestAnimationFrame(animate);
      box.rotation.x += 0.01;
      box.rotation.y += 0.01;
      if (box.position.y > 2) {
        box.position.y -= 0.01;
      } else {
        box.position.y += 0.01;
      }
      renderer.current.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };

  return (
    <View style={{ flex: 1 }}>
      <GLView
        style={{ flex: 1 }}
        ref={glViewRef}
        onContextCreate={onContextCreate}
      />
    </View>
  );
}
