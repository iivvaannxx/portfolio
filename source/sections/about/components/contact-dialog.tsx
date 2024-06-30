import { ContactForm } from "@app/modules/contact/components/contact";
import { currentLang } from "@app/modules/contact/lib/store";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/react/dialog";
import { useStore } from "@nanostores/react";
import { useRef, useState } from "react";
import { cn } from "@app/utils";
import { destroyLenis, initLenis } from "@app/lib/scroll";
import { useMediaQuery } from "@app/lib/hooks/use-media-query";
import { fireworks } from "@app/lib/confetti";

type Props = {};

export function ContactDialog({ ...props }: Props) {
  const [isOpen, setOpen] = useState(false);
  const confettiShown = useRef(false);

  const locale = useStore(currentLang);
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setOpen(open);

        if (open) {
          // Ideally I would just lock scroll using "lenis.stop()"
          // But because we need `syncTouch` for the 3D models to not lag
          // on scroll we need to destroy and reinitialize Lenis.
          // With `syncTouch` enabled, the model form doesn't scroll
          // properly on mobile, even after calling `lenis.stop()`.
          destroyLenis();

          if (!confettiShown.current) {
            fireworks(isMobile ? 1.75 : 3);
            confettiShown.current = true;
          }
        } else {
          // Reinitialize Lenis after closing the dialog.
          initLenis();
        }
      }}
    >
      <DialogTrigger
        className={cn([
          "relative inline-flex h-10 w-full items-center justify-center gap-4 whitespace-nowrap rounded-md bg-primary px-6 text-base font-bold text-primary-foreground transition will-change-transform",
          "xs:h-12",
          "hover:scale-105",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-ring",
        ])}
      >
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-primary/70 to-primary opacity-75 blur"></div>

        <Mail className="size-[1.2em]" />
        <span> Get In Touch </span>
      </DialogTrigger>
      <DialogContent
        data-contact-dialog
        data-scroll-thin
        onOpenAutoFocus={(event) => {
          if (isMobile) {
            // The keyboard popping immediately
            // feels annoying and intrusive.
            event.preventDefault();
          }
        }}
        className="max-h-[90vh] w-[90%] max-w-xl overflow-y-scroll dvh:!max-h-[90dvh] xl:w-full"
      >
        <DialogHeader>
          <DialogTitle className="inline-flex items-center justify-center gap-x-4 text-xl sm:justify-start">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/E-Mail.png"
              alt="E-Mail"
              width={128}
              height={128}
              loading="lazy"
              decoding="async"
              className="inline-block size-[1.5em]"
            />
            <span>Contact</span>
          </DialogTitle>
          <DialogDescription className="text-balance pt-2">
            Fill out the form below and I will get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>

        <ContactForm
          onAfterSubmit={(success) => {
            if (success) {
              // setTimeout(() => setOpen(false), 3000);
            }
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
