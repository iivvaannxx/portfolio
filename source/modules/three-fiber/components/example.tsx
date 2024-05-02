/** @jsxImportSource react */

import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function MyModel() {
  const model = useGLTF("/models/logos.glb");

  const obj = model.scene.getObjectByName("Docker")!;
  return <primitive object={obj} castShadow receiveShadow />;
}

/* function MyText({ text = "Hello" }) {
  const [texture] = useMatcapTexture("1D3FCC_051B5F_81A0F2_5579E9", 256);
  return (
    <Text3D font="/fonts/satoshi/typeface.json">
      {text}
      <meshMatcapMaterial matcap={texture} />
    </Text3D>
  );
} */

export function Example() {
  return (
    <Canvas
      className="rounded-2xl"
      camera={{

        fov: 40,
        near: 0.1,
        far: 10,
        position: [0, 0, 2],
      }}
    >

      <OrbitControls makeDefault />
      <ambientLight />
      <hemisphereLight intensity={0.35} />
      <directionalLight position={[0, 0, 10]} intensity={1} />

      {/*       <Sparkles position-z={0.4} color="white" opacity={0.6} scale={0.4} count={20} speed={0.3} noise={0.5} />
 */}
      <Suspense>
        <Float speed={5} rotationIntensity={2}>
          <MyModel />
        </Float>
      </Suspense>

      {/*       <MyText />
 */}
    </Canvas>
  );
}
