import { type HTMLAttributes, useEffect, useState } from "react";
import {
  Bounds,
  Float,
  PerspectiveCamera,
  View,
  useBounds,
  useGLTF,
} from "@react-three/drei";

import type { GLTF } from "three-stdlib";
import type { Mesh, MeshStandardMaterial } from "three";
import type { Skill } from "@app/lib/data/skills";

const MODEL_PATH = "/models/logos.glb";
useGLTF.preload(MODEL_PATH);

type GLTFResult = GLTF & {
  nodes: {
    TypeScript: Mesh;
    ThreeJS: Mesh;
    Astro: Mesh;
    Svelte: Mesh;
    Windows: Mesh;
    React: Mesh;
    CSS: Mesh;
    Docker: Mesh;
    Git: Mesh;
    Nix: Mesh;
    TailwindCSS: Mesh;
    ["C++"]: Mesh;
    Python: Mesh;
    Godot: Mesh;
  };
  materials: {
    Colormap: MeshStandardMaterial;
  };
};

type Props = JSX.IntrinsicElements["mesh"] & {
  skill: Skill;
};

function SkillModel({ skill, ...props }: Props) {
  const { nodes, materials } = useGLTF(MODEL_PATH) as GLTFResult;
  const bounds = useBounds();

  useEffect(() => {
    bounds.refresh().clip().fit();
  }, [skill]);

  return (
    <mesh
      geometry={nodes[skill as keyof typeof nodes].geometry}
      material={materials.Colormap}
      {...props}
    />
  );
}

export function SkillView(props: HTMLAttributes<HTMLDivElement>) {
  const [skill, setSkill] = useState<Skill>("Astro");
  useEffect(() => {
    // TODO: Refactor using events.
    const buttons = document.querySelectorAll("button[data-skill-button]");

    for (const button of buttons) {
      const skill = button.getAttribute("data-skill-button") as Skill;
      button.addEventListener("click", () => {
        for (const button of buttons) {
          button.dataset.active = "false";
        }

        setSkill(skill);
        button.dataset.active = "true";
      });
    }
  }, []);

  return (
    <View
      index={1}
      {...props}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        fov={40}
      />
      <ambientLight intensity={1} />
      <hemisphereLight intensity={0.8} />
      <directionalLight
        intensity={2}
        position={[5, 5, 5]}
      />

      <directionalLight
        intensity={1.5}
        position={[-5, -5, -5]}
      />

      <directionalLight
        intensity={1.5}
        position={[0, 5, 0]}
      />

      <Bounds
        fit
        observe
        margin={1.25}
      >
        <Float
          speed={5}
          rotationIntensity={2}
        >
          <SkillModel skill={skill} />
        </Float>
      </Bounds>
    </View>
  );
}
