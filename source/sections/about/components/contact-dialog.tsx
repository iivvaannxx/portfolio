import { ContactForm } from "@app/modules/contact/components/contact";
import { currentLang } from "@app/modules/contact/lib/store";
import { Mail, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
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
        customClose
        onOpenAutoFocus={(event) => {
          if (isMobile) {
            // The keyboard popping immediately
            // feels annoying and intrusive.
            event.preventDefault();
          }
        }}
        className="svh:!max-h-[90svh] max-h-[90vh] w-[90%] max-w-xl gap-0 overflow-y-scroll pt-0 xl:w-full"
      >
        <DialogHeader className="sticky top-0 bg-background py-8">
          <DialogTitle className="inline-flex items-center justify-center gap-x-4 text-xl sm:justify-start">
            <picture>
              <source
                srcSet="/images/emojis/email/email.avif"
                type="image/avif"
              />
              <source
                srcSet="/images/emojis/email/email.webp"
                type="image/webp"
              />
              <img
                src="/images/emojis/email/email.png"
                alt="E-Mail"
                width={64}
                height={64}
                decoding="async"
                loading="lazy"
                className="inline-block size-[1.5em]"
              />
            </picture>
            <span>Contact</span>
          </DialogTitle>
          <DialogDescription className="text-balance pt-2">
            Fill out the form below and I will get back to you as soon as
            possible.
          </DialogDescription>

          <DialogClose className="absolute -right-2 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
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
