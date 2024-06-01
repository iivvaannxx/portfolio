import {
  AccumulativeShadows,
  Backdrop,
  Environment,
  Hud,
  RandomizedLight,
  ScrollControls,
  SoftShadows,
  useGLTF,
  useScroll,
} from "@react-three/drei";

import { Perf } from "r3f-perf";
import { Canvas as ThreeCanvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import type { GLTF } from "three-stdlib";
import type { Group, Mesh, MeshStandardMaterial } from "three";
import { useControls } from "leva";
import { lerp } from "three/src/math/MathUtils.js";
import type { CharacterHandle } from "./character/character";
import { Character } from "./character/character";

/* export function Experience() {
  const viewport = useThree((state) => {
    return state.viewport;
  });

  const props = useTexture({ map: "/images/my-room-project.webp" });

  function useAspectSize(
    targetWidth: number,
    targetHeight: number,
    desiredAspect: number,
  ) {
    const [size, setSize] = useState({
      width: targetWidth,
      height: targetHeight,
    });

    useEffect(() => {
      if (targetWidth >= targetHeight) {
        setSize({ width: targetWidth, height: targetWidth / desiredAspect });
      } else {
        setSize({ width: targetWidth, height: targetWidth / desiredAspect });
      }
    }, [targetWidth, targetHeight, desiredAspect]);

    return size;
  }

  const { width, height } = useAspectSize(
    viewport.width / 1.25,
    viewport.height / 1.25,
    16 / 9,
  );

  return (
    <ScrollControls
      pages={3}
      damping={0.1}
    >
      <Scroll>
        <mesh>
          <planeGeometry args={[width, height, 16, 16]} />
          <MeshDistortMaterial
            speed={5}
            distort={0.1}
            toneMapped={false}
            {...props}
          ></MeshDistortMaterial>
        </mesh>
      </Scroll>
      <Scroll html></Scroll>
    </ScrollControls>
  );
}
*/

type GLTFResult = GLTF & {
  nodes: {
    chair: Mesh;
  };
  materials: {
    ["BrownDark.052"]: MeshStandardMaterial;
  };
};

export default function Chair(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf",
  ) as GLTFResult;
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.chair.geometry}
        material={materials["BrownDark.052"]}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf",
);

function Experience() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <hemisphereLight intensity={0.5} />
      <directionalLight
        intensity={2}
        position={[-10, 10, 5]}
      />

      <Backdrop
        floor={1}
        position={[0, -0.1, -10]}
        scale={[100, 15, 15]}
        segments={30}
        receiveShadow={false}
      >
        <meshStandardMaterial color="goldenrod" />
      </Backdrop>

      <group position-z={2}>
        <Chair
          rotation-y={-Math.PI / 4}
          position-y={-0.08}
          position-x={2}
        />

        <AccumulativeShadows
          position={[0, -0.08, 0]}
          frames={300}
          color="green"
          temporal
          toneMapped={true}
          alphaTest={0.75}
          opacity={0.8}
          blend={8}
        >
          <RandomizedLight
            position={[-10, 10, 5]}
            amount={10}
            radius={1}
            ambient={0.5}
            intensity={3}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>

      <Environment
        preset="dawn"
        environmentIntensity={0.75}
      />
    </>
  );
}

function Presentation() {
  const character = useRef<CharacterHandle>(null);
  const viewport = useThree((state) => state.viewport);

  const data = useScroll();
  useFrame((_, _delta) => {
    if (character.current && character.current.model.current) {
      const { current: model } = character.current.model;
      const { currentAction } = character.current;

      const actionProgress = data.offset * currentAction.getClip().duration;
      currentAction.time = actionProgress * 8;

      model.position.x = lerp(viewport.width, -viewport.width, data.offset);
    }
  });

  return (
    <>
      <Character
        ref={character}
        initialAnimation="running"
        rotation-y={-Math.PI / 2}
        position-y={-0.08}
        castShadow
      />
    </>
  );
}

function Experience2() {
  const { size, samples, focus } = useControls({
    size: 25,
    samples: 10,
    focus: 0,
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <hemisphereLight intensity={0.5} />
      <directionalLight
        intensity={2}
        position={[-10, 10, 5]}
        castShadow
      />

      <Presentation />

      <SoftShadows
        size={size}
        samples={samples}
        focus={focus}
      />

      <Backdrop
        floor={1}
        position={[0, -0.1, -10]}
        scale={[100, 15, 15]}
        segments={30}
        receiveShadow
      >
        <shadowMaterial opacity={0.5} />
      </Backdrop>

      <Environment
        preset="dawn"
        environmentIntensity={0.75}
      />
    </>
  );
}

/**
 * Basic setup for the Three.js experience.
 */
export function Canvas() {
  return (
    <>
      <ThreeCanvas
        shadows
        style={{ height: "var(--screen-safe-height" }}
        camera={{ position: [0, 1, 5] }}
      >
        <Perf
          position="top-left"
          style={{ transformOrigin: "top left", scale: "1.5" }}
        />

        <ScrollControls
          infinite
          damping={0.1}
        >
          <Hud>
            <Experience />
          </Hud>
          <Hud renderPriority={2}>
            <Experience2 />
          </Hud>
        </ScrollControls>
      </ThreeCanvas>
    </>
  );
}
