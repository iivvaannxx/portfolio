import { Canvas as FiberCanvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

/* import { Perf } from "r3f-perf";
 */
/**
 * Basic setup for the Three.js experience.
 */
export function Canvas() {
  return (
    <>
      <FiberCanvas
        shadows
        style={{
          position: "fixed",
          pointerEvents: "none",

          inset: 0,
          zIndex: 10,
        }}
      >
        {/*         <Perf position="top-left" />
         */}
        <View.Port />
      </FiberCanvas>
    </>
  );
}
