import type { ScrollSceneChildProps } from "@14islands/r3f-scroll-rig";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import { Island } from "../island";

function SpinningIcosahedron({ scale }: ScrollSceneChildProps) {
  const mesh = useRef<Mesh>(null!);
  useFrame((_state, delta) => {
    mesh.current.rotation.y += Math.PI * delta;
  });
  return (
    <group
      scale={scale.xy.min() * 0.3}
      position-y={70}
    >
      <mesh ref={mesh}>
        <icosahedronGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}

export function SkillsIsland() {
  return (
    <Island>{({ ...props }) => <SpinningIcosahedron {...props} />}</Island>
  );
}
