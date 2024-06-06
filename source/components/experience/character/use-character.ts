import { useAnimations, useGLTF } from "@react-three/drei";
import {
  type ForwardedRef,
  type RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import type { GLTF } from "three-stdlib";
import type {
  AnimationAction,
  Bone,
  Group,
  MeshStandardMaterial,
  SkinnedMesh,
} from "three";

// Preload the character model.
const MODEL_PATH = "/models/character.glb";
useGLTF.preload(MODEL_PATH);

/** The loaded result shape of the GLTF character model. */
type GLTFResult = GLTF & {
  nodes: {
    armLeft: SkinnedMesh;
    armRight: SkinnedMesh;
    body: SkinnedMesh;
    head_1: SkinnedMesh;
    root: Bone;
  };
  materials: {
    colormap: MeshStandardMaterial;
  };
};

/** The animations baked into the character. */
type ActionName = "cheer" | "idle";

/** A record which maps all the animations to usable animation actions. */
type GLTFActions = Record<ActionName, AnimationAction>;

/** Defines the API of the character in the application. */
export interface CharacterHandle {
  /** The available actions for the character. */
  actions: GLTFActions;

  /** The reference to the character's model. */
  model: RefObject<Group>;

  /** The current action playing on the character. */
  currentAction: AnimationAction;

  /**
   * Switches the character's animation to the given one.
   *
   * @param newAnimation - The name of the new animation.
   * @param settings - Optional settings for the animation.
   * @param settings.crossfade - Whether to crossfade to the new animation.
   * @param settings.fadeInTime - The duration of the fade-in transition.
   * @param settings.fadeOutTime - The duration of the fade-out transition.
   * @param settings.resetNew - Whether to reset the new animation.
   */
  setAnimation: (
    newAnimation: ActionName,
    settings?: {
      crossfade?: boolean;
      fadeInTime?: number;
      fadeOutTime?: number;
      resetNew?: boolean;
    },
  ) => void;
}

/** The props given to the character component. */
export interface CharacterProps {
  /** The initial animation to play on load. */
  initialAnimation?: ActionName;
}

export function useCharacter(
  forwardedRef: ForwardedRef<CharacterHandle>,
  { initialAnimation = "cheer" }: CharacterProps = {},
) {
  // Load the model and animations.
  const group = useRef<Group>(null);
  const gltf = useGLTF(MODEL_PATH) as GLTFResult;
  const { actions } = useAnimations(gltf.animations, group);

  const typedActions = actions as GLTFActions;
  const [currentActionName, setCurrentActionName] =
    useState<ActionName>(initialAnimation);

  useEffect(() => {
    // Play the initial animation.
    const action = typedActions[currentActionName];
    action.play();

    return () => {
      action.stop();
    };
  }, []);

  // Expose custom logic for the character.
  useImperativeHandle(
    forwardedRef,
    () =>
      ({
        model: group,
        actions: typedActions,
        currentAction: typedActions[currentActionName],

        setAnimation(
          newAnimation,
          {
            crossfade = true,
            fadeInTime = 0.5,
            fadeOutTime = 0.5,
            resetNew = true,
          } = {},
        ) {
          const currentAction = this.currentAction;
          const targetAction = this.actions[newAnimation];
          setCurrentActionName(newAnimation);

          if (!crossfade) {
            currentAction.stop();
            targetAction.reset().play();

            return;
          }

          if (resetNew) {
            targetAction.reset();
          }

          currentAction.fadeOut(fadeOutTime);
          targetAction.fadeIn(fadeInTime).play();
        },
      }) satisfies CharacterHandle,
    [currentActionName],
  );

  return { group, gltf, actions: typedActions };
}
