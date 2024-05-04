import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

import {
  type AnimationAction,
  type Group,
  LoopOnce,
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
    House: Mesh;
    Grass_1: Mesh;
    Grass_2: Mesh;
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
      <group name="Island">
        <mesh
          name="Large"
          castShadow
          receiveShadow
          geometry={nodes.Large.geometry}
          material={materials.Colormap}
          position={[-0.5, -5.7, 0.289]}
        >
          <mesh
            name="House"
            castShadow
            receiveShadow
            geometry={nodes.House.geometry}
            material={materials.Colormap}
            position={[0, -0.1, 0]}
          />
        </mesh>
        <mesh
          name="Middle"
          castShadow
          receiveShadow
          geometry={nodes.Middle.geometry}
          material={materials.Colormap}
          position={[0, -4.8, -0.577]}
        >
          <mesh
            name="Grass_1"
            castShadow
            receiveShadow
            geometry={nodes.Grass_1.geometry}
            material={materials.Colormap}
            position={[0, 1.4, 0]}
          />
        </mesh>
        <mesh
          name="Short"
          castShadow
          receiveShadow
          geometry={nodes.Short.geometry}
          material={materials.Colormap}
          position={[0.5, -3.9, 0.289]}
        >
          <mesh
            name="Grass_2"
            castShadow
            receiveShadow
            geometry={nodes.Grass_2.geometry}
            material={materials.Colormap}
            position={[0, 1.2, 0]}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
