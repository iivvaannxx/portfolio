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

const MODEL_PATH = "/models/technologies.glb";
useGLTF.preload(MODEL_PATH);

type GLTFResult = GLTF & {
  nodes: {
    "Astro": Mesh;
    "Bash": Mesh;
    "Blender": Mesh;
    "C#": Mesh;
    "C++": Mesh;
    "CSS": Mesh;
    "Deno": Mesh;
    "Docker": Mesh;
    "Figma": Mesh;
    "Framer": Mesh;
    "Git": Mesh;
    "Github": Mesh;
    "Godot": Mesh;
    "HTML5": Mesh;
    "Illustrator": Mesh;
    "JavaScript": Mesh;
    "Kubernetes": Mesh;
    "MongoDB": Mesh;
    "MySQL": Mesh;
    "NGINX": Mesh;
    "Nix": Mesh;
    "NodeJS": Mesh;
    "Photoshop": Mesh;
    "PHP": Mesh;
    "PixiJS": Mesh;
    "Python": Mesh;
    "React": Mesh;
    "Rust": Mesh;
    "Supabase": Mesh;
    "Svelte": Mesh;
    "TailwindCSS": Mesh;
    "Terraform": Mesh;
    "ThreeJS": Mesh;
    "TypeScript": Mesh;
    "Unity": Mesh;
    "Unreal-Engine": Mesh;
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

  // Upon export GLB spaces in names are replaced with underscores
  // Ensure we don't have spaces in the name.
  const safeName = skill.replaceAll(" ", "_");
  useEffect(() => {
    bounds.refresh().fit();
  }, [skill]);

  return (
    <mesh
      geometry={nodes[safeName as keyof typeof nodes].geometry}
      material={materials.Colormap}
      {...props}
    />
  );
}

export function SkillView(props: HTMLAttributes<HTMLDivElement>) {
  const [skill, setSkill] = useState<Skill>("Astro");

  useEffect(() => {
    document.addEventListener("skill:show", (event) => {
      setSkill(event.detail.skillName);
    });
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
          rotationIntensity={1.25}
        >
          <SkillModel skill={skill} />
        </Float>
      </Bounds>
    </View>
  );
}
