import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

import {
  LoopOnce,
  type AnimationAction,
  type Group,
  type Mesh,
  type MeshStandardMaterial,
} from "three";
import type { GLTF } from "three-stdlib";

// The structure of our GLTF model.
type GLTFResult = GLTF & {
  nodes: {
    Short: Mesh;
    Middle: Mesh;
    Large: Mesh;
  };
  materials: {
    Colormap: MeshStandardMaterial;
  };
};

// The names of the animations made in Blender.
type ActionName = "growShort" | "growMiddle" | "growLarge";
type GLTFActions = Record<ActionName, AnimationAction>;

/** The public url to the model. */
const MODEL_PATH = "/models/scene.glb";

export function Home(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<Group>(null!);
  const { nodes, materials, animations } = useGLTF(MODEL_PATH) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const knownAnimations = actions as GLTFActions;

    for (const action of Object.values(knownAnimations)) {
      action.clampWhenFinished = true;
      action.setLoop(LoopOnce, 1);
      action.play();
    }
  }, []);

  return (
    <group
      ref={group}
      {...props}
    >
      <group name="Scene">
        <mesh
          name="Short"
          castShadow
          receiveShadow
          geometry={nodes.Short.geometry}
          material={materials.Colormap}
          position={[0, -1.3, 0]}
        />
        <mesh
          name="Middle"
          castShadow
          receiveShadow
          geometry={nodes.Middle.geometry}
          material={materials.Colormap}
          position={[-0.5, -1.6, -0.866]}
        />
        <mesh
          name="Large"
          castShadow
          receiveShadow
          geometry={nodes.Large.geometry}
          material={materials.Colormap}
          position={[-1, -1.9, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
