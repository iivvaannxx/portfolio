import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";

/**
 * Basic setup for the Three.js experience.
 */
export function Canvas() {
  return (
    <>
      <GlobalCanvas
        shadows
        style={{ height: "var(--screen-safe-height)", zIndex: -5 }}
      >
        <ambientLight intensity={1.5} />
        <hemisphereLight intensity={1.5} />
        <directionalLight
          intensity={0.5}
          position={[0, 0, 10]}
        />
      </GlobalCanvas>

      <SmoothScrollbar />
    </>
  );
}
