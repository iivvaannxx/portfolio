import type { HTMLAttributes } from "react";
import {
  Bounds,
  Environment,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import { Character } from "../character/character";

export function CharacterView(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <View
      index={1}
      {...props}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 2.5, 5]}
        fov={40}
      />
      <ambientLight intensity={1} />
      <hemisphereLight intensity={1} />

      <Environment
        preset="dawn"
        environmentIntensity={0.25}
      />

      <Bounds
        fit
        clip
        observe
      >
        <Character initialAnimation="idle" />
      </Bounds>
    </View>
  );
}
