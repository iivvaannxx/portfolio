import { useRef } from "react";
import type { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import type { ScrollSceneChildProps } from "@14islands/r3f-scroll-rig";
import { Island } from "../island";

function SpinningTorus({ scale }: ScrollSceneChildProps) {
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
        <torusGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}

export function ExperienceIsland() {
  return <Island>{({ ...props }) => <SpinningTorus {...props} />}</Island>;
}
