import { useRef } from "react";
import type { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import type { ScrollSceneChildProps } from "@14islands/r3f-scroll-rig";
import { Island } from "../island";

function SpinningBoxWebGL({ scale }: ScrollSceneChildProps) {
  const mesh = useRef<Mesh>(null!);
  useFrame((_state, delta) => {
    mesh.current.rotation.y += Math.PI * delta;
  });
  return (
    <group scale={scale.xy.min() * 0.5}>
      <mesh ref={mesh}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}

export function AboutIsland() {
  return <Island>{({ ...props }) => <SpinningBoxWebGL {...props} />}</Island>;
}
