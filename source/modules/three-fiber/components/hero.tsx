/** @jsxImportSource react */

import { Canvas, useFrame } from "@react-three/fiber";

import { Suspense } from "react";
import { Home } from "../models/home";

function Helper() {
  useFrame((_state) => {
    // Log for debug whatever.
  });

  return null;
}

export function Hero() {
  return (
    <Canvas
      className="aspect-square rounded-2xl"
      camera={{

        fov: 40,
        near: 0.1,
        far: 1000,
        position: [4.55, 2.85, -2.26],
        rotation: [-2.35, 1.15, 2.4],
      }}
    >

      {/*       <CameraControls makeDefault />
 */}
      {" "}
      <ambientLight />
      <hemisphereLight intensity={0.35} />
      <directionalLight position={[5, 0, -10]} intensity={1} />

      <Suspense>
        <Home />
      </Suspense>

      <Helper />

    </Canvas>
  );
}
