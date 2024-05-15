import type { ReactNode } from "react";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";

interface Props {
  /** Acts as a slot given by Astro. */
  content?: ReactNode;
}

/**
 * Layout component to wrap the entire app with.
 * Acts as the basic setup for rendering 3D content on the page.
 *
 * @param props The component props.
 * @param props.content The slotted content given by Astro as prop.
 */
export function Experience({ content }: Props) {
  const Content = () => content;
  return (
    <>
      <GlobalCanvas style={{ height: "var(--screen-safe-height)", zIndex: -5 }}>
        <ambientLight />
      </GlobalCanvas>

      <SmoothScrollbar>{(bind) => <Content {...bind} />}</SmoothScrollbar>
    </>
  );
}
