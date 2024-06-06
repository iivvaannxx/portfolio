import { type HTMLAttributes, useEffect, useRef } from "react";
import { Bounds, PerspectiveCamera, View } from "@react-three/drei";

import { LoopOnce } from "three";
import { Character, type CharacterHandle } from "../character/character";

export function CharacterView(props: HTMLAttributes<HTMLDivElement>) {
  const character = useRef<CharacterHandle>(null);
  useEffect(() => {
    if (!character.current) {
      return;
    }

    character.current.actions.cheer.setLoop(LoopOnce, 1);
    character.current.actions.cheer.clampWhenFinished = true;
    character.current.actions.cheer
      .getMixer()
      .addEventListener("finished", () => {
        character.current?.setAnimation("idle");
      });

    document.addEventListener("mystery-button-clicked", () => {
      const animation = "cheer";
      character.current?.setAnimation(animation);
    });
  }, []);

  return (
    <View
      index={1}
      {...props}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 2, 5]}
        fov={25}
      />
      <ambientLight intensity={1.25} />
      <hemisphereLight intensity={1.5} />

      <directionalLight
        intensity={2}
        position={[5, 5, 0]}
      />

      <directionalLight
        intensity={0.5}
        position={[0, 5, 0]}
      />

      <directionalLight
        intensity={0.8}
        position={[5, -5, 0]}
      />

      <Bounds
        fit
        clip
        observe
        margin={1.35}
      >
        <Character
          ref={character}
          initialAnimation="idle"
        />
      </Bounds>
    </View>
  );
}
