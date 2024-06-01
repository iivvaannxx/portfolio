import type { ScrollSceneChildProps } from "@14islands/r3f-scroll-rig";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { DoubleSide, type Mesh, type MeshStandardMaterial } from "three";
import type { GLTF } from "three-stdlib";
import { Island, type IslandProps } from "../island";
import type { CharacterHandle } from "../character/character";

type GLTFResult = GLTF & {
  nodes: {
    floor: Mesh;
    furniture: Mesh;
  };
  materials: {
    floor: MeshStandardMaterial;
    furniture: MeshStandardMaterial;
  };
};

export function Props(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/props.glb") as GLTFResult;

  materials.floor.side = DoubleSide;
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
      >
        <meshBasicMaterial {...materials.floor} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.furniture.geometry}
        position={[2.693, 0.014, 0.047]}
        rotation={[0, -1.571, 0]}
      >
        <meshBasicMaterial {...materials.furniture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models//props.glb");

export function Model({ scale, ..._props }: ScrollSceneChildProps) {
  const _ref = useRef<CharacterHandle>(null);

  return (
    <group scale={scale.xy.min() * 0.15}>
      <group position-y={-2.4}>
        {/* <Character
          ref={ref}
          initialAnimation="walking"
          position={[2, 0.1, 1]}
          rotation-y={degToRad(-90)}
        /> */}
        <Props />
      </group>
    </group>
  );
}

export function AboutIsland(islandProps: Omit<IslandProps, "render">) {
  return (
    <Island
      {...islandProps}
      render={(props) => <Model {...props} />}
    ></Island>
  );
}
