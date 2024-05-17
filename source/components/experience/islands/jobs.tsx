import type { ScrollSceneChildProps } from "@14islands/r3f-scroll-rig";
import { Preload } from "@react-three/drei";
import { Island } from "../island";
import { Portal } from "../props/portal";

function SpinningTorus({ scale }: ScrollSceneChildProps) {
  return (
    <Portal
      scale={scale.xy.min() * 0.3}
      radius={3}
    />
  );
}

export function ExperienceIsland() {
  return (
    <Island>
      {({ ...props }) => (
        <SpinningTorus {...props}>
          <Preload all />
        </SpinningTorus>
      )}
    </Island>
  );
}
