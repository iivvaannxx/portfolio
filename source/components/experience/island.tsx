import { type HTMLAttributes, type PropsWithChildren, useRef } from "react";
import {
  ScrollScene,
  type ScrollSceneChildProps,
  UseCanvas,
} from "@14islands/r3f-scroll-rig";

// @ts-expect-error There is no typings for this package
import { StickyScrollScene } from "@14islands/r3f-scroll-rig/powerups";

/** Props for the Island component. */
export type IslandProps = HTMLAttributes<HTMLDivElement> & {
  render: (props: ScrollSceneChildProps) => JSX.Element;
  sticky?: boolean;

  proxyClass?: string;
  containerClass?: string;
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

/**
 * Base layout needed to render a 3D island on the page.
 * Every island should be wrapped in this component.
 *
 * @param props - The component props.
 * @param props.render - The function that renders the 3D content.
 * @param props.sticky - If true, the island will have a sticky behaviour.
 * @param props.proxyClass - The class assigned to the tracked element.
 * @param props.containerClass - The class assigned to the sticky container, if sticky is true.
 * @param props.containerProps - Additional props for the sticky container, if sticky is true.
 */
export function Island({
  render,
  sticky,
  proxyClass,
  containerClass,
  containerProps,
  ...props
}: IslandProps) {
  // The proxy is used by R3F Scroll Rig to position the 3D content on the page.
  const proxy = useRef<HTMLDivElement>(null!);
  const Scene = sticky
    ? (StickyScrollScene as typeof ScrollScene)
    : ScrollScene;

  // For a sticky island we need to wrap the children in a container with a relative position.
  // If it's not sticky we just use an empty fragment <></>.
  const Wrapper = ({ children }: PropsWithChildren) =>
    sticky ? (
      <div
        style={{ position: "relative" }}
        className={containerClass}
        {...containerProps}
      >
        {children}
      </div>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <div
        ref={proxy}
        style={sticky ? { position: "sticky" } : {}}
        className={proxyClass}
        {...props}
      ></div>
      <UseCanvas>
        <Scene track={proxy}>{(islandProps) => render(islandProps)}</Scene>
      </UseCanvas>
    </Wrapper>
  );
}
