import { forwardRef } from "react";
import {
  Turnstile,
  type TurnstileInstance,
  type TurnstileProps,
} from "@marsidev/react-turnstile";

import { useMediaQuery } from "@lib/utils/hooks/use-media-query";
import { type Locale } from "@modules/i18n";
import { cn } from "@app/lib/utils/shadcn";

// The public site key for the Turnstile widget.
const PUBLIC_SITE_KEY = "0x4AAAAAAAMvB2JUUxIcQ2Y8";

type Props = Partial<TurnstileProps> & {
  locale: Locale;
};

// Simple wrapper with some customizations for the Turnstile widget.
export const TurnstileWidget = forwardRef<TurnstileInstance | undefined, Props>(
  ({ onError, onSuccess, locale }, ref) => {
    const isLargeScreen = useMediaQuery("(min-width: 350px)");
    return (
      <div className="mx-auto mt-6 w-[95%]">
        <Turnstile
          ref={ref}
          className={cn(
            "mx-auto",
            isLargeScreen ? "min-h-[65px]" : "min-h-[120px]",
          )}
          siteKey={PUBLIC_SITE_KEY}
          onError={onError}
          onSuccess={onSuccess}
          options={{
            theme: "dark",
            size: isLargeScreen ? "normal" : "compact",

            // As of this moment catalan is not available.
            language: locale === "ca" ? "es" : locale,
          }}
        />
      </div>
    );
  },
);
