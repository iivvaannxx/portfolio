import { useEffect, useState, type HTMLAttributes } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
  Button,
  DrawerDescription,
} from "@components/ui/react";

import { toggleScroll } from "@lib/client/scroll";
import { useMediaQuery } from "@lib/utils/hooks/use-media-query";
import { useClientTranslation } from "@modules/i18n";

type Props = HTMLAttributes<HTMLButtonElement> & {
  menuContent?: React.ReactNode;
};

export function HamburgerMenu({ menuContent, ...props }: Props) {
  const [isOpen, setOpen] = useState(false);

  // Ensure the drawer hides on non-mobile screens.
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (isLargeScreen) {
      setOpen(false);
      toggleScroll(true);
    }
  }, [isLargeScreen]);

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
        <Button
          variant="ghost"
          className="aspect-square p-0.5"
        >
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
        </Button>
      </DrawerTrigger>
      <DrawerContent data-lenis-prevent>
        <DrawerHeader>
          <DrawerTitle className="sr-only">
            {useClientTranslation("navigation.drawerTitle")}
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            {useClientTranslation("navigation.drawerDescription")}
          </DrawerDescription>
        </DrawerHeader>
        {menuContent}
      </DrawerContent>
    </Drawer>
  );
}
