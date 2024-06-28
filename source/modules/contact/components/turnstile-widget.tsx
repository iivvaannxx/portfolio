import { forwardRef, useRef } from "react";
import {
  Turnstile,
  type TurnstileInstance,
  type TurnstileProps,
} from "@marsidev/react-turnstile";

import { cn } from "@app/utils";
import { useMediaQuery } from "@app/lib/hooks/use-media-query";
import { getCurrentLocale } from "@app/modules/i18n";

// The public site key for the Turnstile widget.
const PUBLIC_SITE_KEY = "0x4AAAAAAAMvB2JUUxIcQ2Y8";

// Simple wrapper with some customizations for the Turnstile widget.
export const TurnstileWidget = forwardRef<
  TurnstileInstance | undefined,
  Partial<TurnstileProps>
>(({ onError, onSuccess }, ref) => {
  const language = useRef(getCurrentLocale());
  const isLargeScreen = useMediaQuery("(min-width: 300px)");

  return (
    <div className="mx-auto mt-6 w-[95%]">
      <Turnstile
        ref={ref}
        className={cn(isLargeScreen && "!w-full [&_iframe]:!w-full", "mx-auto")}
        siteKey={PUBLIC_SITE_KEY}
        onError={onError}
        onSuccess={onSuccess}
        options={{
          theme: "dark",
          size: isLargeScreen ? "normal" : "compact",

          // As of this moment catalan is not available.
          language: language.current === "ca" ? "es" : language.current,
        }}
      />
    </div>
  );
});
