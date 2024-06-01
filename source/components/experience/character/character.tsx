import { forwardRef } from "react";
import {
  type CharacterHandle,
  type CharacterProps,
  useCharacter,
} from "./use-character";

/** The props given to the character component. */
type Props = JSX.IntrinsicElements["group"] &
  CharacterProps & {
    castShadow?: boolean;
  };

/** A credible speed for the character when walking (must be multiplied by delta). */
export const WALK_SPEED = 0.4;

/** A credible speed for the character when running (must be multiplied by delta). */
export const RUN_SPEED = 2.5;

/** Defines the character component. */
export const Character = forwardRef<CharacterHandle, Props>(
  ({ scale, initialAnimation, castShadow = false, ...rest }, ref) => {
    const {
      gltf: { nodes, materials },
      group,
    } = useCharacter(ref, { initialAnimation });

    materials.colormap.toneMapped = false;
    return (
      <group
        name="rig"
        ref={group}
        {...rest}
      >
        <skinnedMesh
          name="armLeft"
          geometry={nodes.armLeft.geometry}
          material={materials.colormap}
          skeleton={nodes.armLeft.skeleton}
          castShadow={castShadow}
        />
        <skinnedMesh
          name="armRight"
          geometry={nodes.armRight.geometry}
          material={materials.colormap}
          skeleton={nodes.armRight.skeleton}
          castShadow={castShadow}
        />
        <skinnedMesh
          name="body"
          geometry={nodes.body.geometry}
          material={materials.colormap}
          skeleton={nodes.body.skeleton}
          castShadow={castShadow}
        />
        <skinnedMesh
          name="head_1"
          geometry={nodes.head_1.geometry}
          material={materials.colormap}
          skeleton={nodes.head_1.skeleton}
          castShadow={castShadow}
        />
        <skinnedMesh
          name="legLeft"
          geometry={nodes.legLeft.geometry}
          material={materials.colormap}
          skeleton={nodes.legLeft.skeleton}
          castShadow={castShadow}
        />
        <skinnedMesh
          name="legRight"
          geometry={nodes.legRight.geometry}
          material={materials.colormap}
          skeleton={nodes.legRight.skeleton}
          castShadow={castShadow}
        />
        <primitive object={nodes.root} />
      </group>
    );
  },
);

// Reexport types.
export type { Props as CharacterProps, CharacterHandle };
