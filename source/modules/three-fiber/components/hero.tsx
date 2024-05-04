import { Canvas, useFrame } from "@react-three/fiber";

import { Suspense } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
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
      className="aspect-square"
      camera={{ fov: 45, near: 0.1, far: 1000, position: [0.1, 2, 5.5] }}
    >
      <ambientLight />
      <hemisphereLight intensity={0.35} />
      <directionalLight
        position={[10, 0, 10]}
        intensity={0.8}
      />
      <Suspense>
        <Home
          position={[0, -0.5, 3]}
          rotation-y={degToRad(270)}
        />
      </Suspense>

      <Helper />
    </Canvas>
  );
}
