import { forwardRef, useMemo, useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import {
  Color,
  type ColorRepresentation,
  DoubleSide,
  type Group,
  type ShaderMaterial,
} from "three";

import vertexShader from "@app/lib/shaders/portal/vertex.glsl";
import fragmentShader from "@app/lib/shaders/portal/fragment.glsl";

const DEFAULT_INNER_COLOR = "#ffffff";
const DEFAULT_OUTER_COLOR = "#000000";

extend({
  PortalMaterial: shaderMaterial(
    {
      uTime: 0,
      uInnerColor: new Color(DEFAULT_INNER_COLOR),
      uOuterColor: new Color(DEFAULT_OUTER_COLOR),
    },

    vertexShader,
    fragmentShader,
  ),
});

/** The props accepted by the portal component. */
interface PortalProps {
  radius: number;
  innerColor?: ColorRepresentation;
  outerColor?: ColorRepresentation;
}

/**
 * Custom hook for setting up the portal logic.
 *
 * @param options The options for the portal.
 * @param  options.innerColor The inner color of the portal. Defaults to DEFAULT_INNER_COLOR.
 * @param options.outerColor The outer color of the portal. Defaults to DEFAULT_OUTER_COLOR.
 * @returns An object containing the portal material, outer color instance, and inner color instance.
 */
const usePortal = ({
  innerColor = DEFAULT_INNER_COLOR,
  outerColor = DEFAULT_OUTER_COLOR,
}: Omit<PortalProps, "radius">) => {
  // Keep a ref to the shader material to update the time uniform.
  const portalMaterial = useRef<ShaderMaterial>(null!);
  const outerColorInstance = useMemo(() => new Color(outerColor), [outerColor]);
  const innerColorInstance = useMemo(() => new Color(innerColor), [innerColor]);

  useFrame((_state, delta) => {
    portalMaterial.current.uniforms.uTime.value += delta;
  });

  return { portalMaterial, outerColorInstance, innerColorInstance };
};

/** Accept all the possible props for a "group" together with the custom props for the portal. */
type Props = JSX.IntrinsicElements["group"] & PortalProps;

/** Defines the portal component used to teleport between sections. */
export const Portal = forwardRef<Group, Props>(
  ({ radius, innerColor, outerColor, ...props }, ref) => {
    const { portalMaterial, outerColorInstance, innerColorInstance } =
      usePortal({
        innerColor,
        outerColor,
      });

    return (
      <group
        ref={ref}
        {...props}
      >
        <mesh>
          <torusGeometry args={[radius, radius / 20]} />
          <meshNormalMaterial />
        </mesh>

        <mesh>
          <circleGeometry args={[radius]} />
          <portalMaterial
            ref={portalMaterial}
            side={DoubleSide}
            uniforms={{
              uTime: { value: 0 },
              uInnerColor: { value: innerColorInstance },
              uOuterColor: { value: outerColorInstance },
            }}
          />
        </mesh>
      </group>
    );
  },
);
