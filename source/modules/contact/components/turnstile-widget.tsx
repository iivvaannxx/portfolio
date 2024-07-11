import { forwardRef, useState } from "react";
import {
  Turnstile,
  type TurnstileInstance,
  type TurnstileProps,
} from "@marsidev/react-turnstile";

import useResizeObserver from "use-resize-observer";
import { type Locale } from "@modules/i18n";

// The public site key for the Turnstile widget.
const PUBLIC_SITE_KEY = "0x4AAAAAAAMvB2JUUxIcQ2Y8";

type Props = Partial<TurnstileProps> & {
  locale: Locale;
};

// Simple wrapper with some customizations for the Turnstile widget.
export const TurnstileWidget = forwardRef<TurnstileInstance | undefined, Props>(
  ({ onError, onSuccess, locale }, ref) => {
    const [widgetFits, setWidgetFits] = useState(true);
    const { ref: containerRef } = useResizeObserver<HTMLDivElement>({
      box: "border-box",

      // Assume it doesn't fit (default = 0) to
      // prevent overflow. The non-compact size is 300px.
      onResize: ({ width = 0 }) => {
        setWidgetFits(width > 300);
      },
    });

    return (
      <div
        ref={containerRef}
        className="@container mx-auto mt-6 w-full"
      >
        <Turnstile
          ref={ref}
          className={"@[301px]:min-h-[65px] mx-auto min-h-[120px]"}
          siteKey={PUBLIC_SITE_KEY}
          onError={onError}
          onSuccess={onSuccess}
          options={{
            theme: "dark",
            size: widgetFits ? "normal" : "compact",

            // As of this moment catalan is not available.
            language: locale === "ca" ? "es" : locale,
          }}
        />
      </div>
    );
  },
);
