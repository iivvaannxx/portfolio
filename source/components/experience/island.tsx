import { type ReactNode, useRef } from "react";
import {
  ScrollScene,
  type ScrollSceneChildProps,
  UseCanvas,
} from "@14islands/r3f-scroll-rig";

/**
 * Props for the Island component.
 */
interface Props {
  children?: (props: ScrollSceneChildProps) => ReactNode;
}

/**
 * Base layout needed to render a 3D island on the page.
 * Every island should be wrapped in this component.
 *
 * @param props - The component props.
 * @param props.children - The R3F component to be rendered.
 */
export function Island({ children }: Props) {
  // The proxy is used by R3F Scroll Rig to position the 3D content on the page.
  const proxy = useRef<HTMLDivElement>(null!);
  return (
    <>
      <div
        ref={proxy}
        style={{ width: "100%", height: "100%" }}
      ></div>
      <UseCanvas>
        <ScrollScene track={proxy}>
          {(islandProps) => children?.({ ...islandProps })}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}
