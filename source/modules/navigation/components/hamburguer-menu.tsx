import { useState, type HTMLAttributes } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
} from "@components/ui/react";

import { toggleScroll } from "@app/lib/client/scroll";

type Props = HTMLAttributes<HTMLButtonElement> & {
  menuContent?: React.ReactNode;
};

export function HamburguerMenu({ menuContent, ...props }: Props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <Drawer
      open={isOpen}
      disablePreventScroll
      shouldScaleBackground
      noBodyStyles
      onOpenChange={(open) => {
        setOpen(open);
        toggleScroll(!open);
      }}
    >
      <DrawerTrigger
        asChild
        {...props}
      >
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background p-2 text-center text-accent-foreground transition hover:bg-accent">
          <span className="sr-only">Menu</span>
          <svg
            className="pointer-events-none h-6 w-6 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="2"
              x="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
            <rect
              y="12"
              width="9"
              height="2"
              rx="1"
            ></rect>
          </svg>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
        </DrawerHeader>
        {menuContent}
      </DrawerContent>
    </Drawer>
  );
}
