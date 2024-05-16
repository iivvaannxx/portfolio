import type { ScrollSceneChildProps } from "@14islands/r3f-scroll-rig";
import { Float, useGLTF } from "@react-three/drei";
import type { Skill } from "@root/source/lib/data/skills";

import type { GLTF } from "three-stdlib";
import type { Mesh, MeshStandardMaterial } from "three";
import { useEffect, useState } from "react";
import { Island } from "../island";

type GLTFResult = GLTF & {
  nodes: Record<Skill, Mesh>;
  materials: {
    Colormap: MeshStandardMaterial;
  };
};

const SKILL_LOGOS = "/models/logos.glb";
useGLTF.preload(SKILL_LOGOS);

interface SkillLogoProps {
  skill: Skill;
}

function SkillLogo({ skill }: SkillLogoProps) {
  const { nodes, materials } = useGLTF(SKILL_LOGOS) as GLTFResult;
  const geometry = nodes[skill].geometry;
  const material = materials.Colormap;

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={geometry}
      material={material}
    />
  );
}

function SpinningIcosahedron({ scale }: ScrollSceneChildProps) {
  const [skill, setSkill] = useState<Skill>("Docker");
  useEffect(() => {
    document.addEventListener("skill:show", (event) => {
      setSkill(event.detail.skillName);
    });
  }, []);

  return (
    <group scale={scale.xy.min() * 0.8}>
      <Float
        speed={5}
        rotationIntensity={2}
      >
        <SkillLogo skill={skill} />
      </Float>
    </group>
  );
}

export function SkillsIsland() {
  return (
    <Island>{({ ...props }) => <SpinningIcosahedron {...props} />}</Island>
  );
}
