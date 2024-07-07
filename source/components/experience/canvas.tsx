import { Canvas as FiberCanvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

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
        <View.Port />
      </FiberCanvas>
    </>
  );
}
