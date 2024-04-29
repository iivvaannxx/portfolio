/** @jsxImportSource react */

import { Bounds, Float, Sparkles, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function MyModel() {
  const model = useGLTF("/models/logos.glb");

  const obj = model.scene.getObjectByName("Docker")!;
  return <primitive object={obj} castShadow receiveShadow />;
}

export function Example() {
  return (
    <Canvas
      className="rounded-2xl"
    >

      <ambientLight />
      <hemisphereLight intensity={0.35} />
      <directionalLight position={[0, 0, 10]} intensity={1} />

      <Sparkles position-z={0.4} color="white" opacity={0.6} scale={0.4} count={20} speed={0.3} noise={0.5} />

      <Bounds fit clip observe>
        <Suspense>
          <Float speed={5} rotationIntensity={2}>
            <MyModel />
          </Float>
        </Suspense>
      </Bounds>

    </Canvas>
  );
}
