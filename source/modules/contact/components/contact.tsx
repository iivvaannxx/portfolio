import { useEffect, useRef, useState } from "react";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";

import { Button } from "@components/ui/react/button";
import { Input } from "@components/ui/react/input";
import { Textarea } from "@app/components/ui/react/textarea";
import { TriangleAlert } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@components/ui/react/alert";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/react/form";

import { ContactFormSchema, type ContactForm } from "../lib/schema";
import { getCurrentLocale } from "@app/modules/i18n";
import { cn } from "@app/utils";

const fields = {
  name: {
    label: "Name",
    className: "col-start-1 col-span-4 sm:col-span-2",
    type: "text",
    required: true,
    placeholder: "Your name",
    Component: Input,
  },

  email: {
    label: "Email",
    className: "col-start-1 col-span-4 sm:col-start-3 sm:col-span-2",
    type: "email",
    required: true,
    placeholder: "youremail@example.com",
    Component: Input,
  },

  subject: {
    label: "Subject",
    className: "col-start-1 col-span-4",
    type: "text",
    required: true,
    placeholder: "Subject",
    Component: Input,
  },

  message: {
    label: "Message",
    className: "col-start-1 col-span-4",
    type: "text",
    required: true,
    placeholder: "Your message",
    rows: 3,
    Component: Textarea,
  },
};

export function ContactFormC(props) {
  const form = useForm<ContactForm>({
    resolver: valibotResolver(ContactFormSchema),
    mode: "onTouched",

    defaultValues: {
      email: "dev.ivanporto@gmail.com",
      name: "Ivan Porto",
      subject: "Hey there!",
      message: "How is everything? Does this work?",
    },
  });

  const language = useRef(getCurrentLocale());
  const turnstile = useRef<TurnstileInstance>();

  const matcher = window.matchMedia("(min-width: 300px)");
  const [isSmallScreen, setIsSmallScreen] = useState(!matcher.matches);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileStatus, setTurnstileStatus] = useState<
    "unknown" | "solved" | "error"
  >("unknown");

  useEffect(() => {
    matcher.addEventListener("change", (event) => {
      setIsSmallScreen(!event.matches);
    });
  }, []);

  async function onSubmit(values: ContactForm) {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("subject", values.subject);
    formData.append("message", values.message);
    formData.append("cf-turnstile-response", turnstileToken);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    // Todo: Check response!
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-4 grid grid-cols-4 gap-x-4 gap-y-5">
          {Object.entries(fields).map(
            ([key, { label, Component, className, ...props }]) => (
              <FormField
                control={form.control}
                key={key}
                name={key as keyof typeof fields}
                render={({ field }) => (
                  <FormItem className={className}>
                    <FormLabel className="text-foreground">{label}</FormLabel>
                    <FormControl>
                      <Component
                        className="sm:min-h-12"
                        {...props}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="pl-1 text-xs" />
                  </FormItem>
                )}
              />
            ),
          )}
        </div>

        <div className="mx-auto mt-6 w-[95%]">
          <Turnstile
            ref={turnstile}
            className={cn(
              !isSmallScreen && "!w-full [&_iframe]:!w-full",
              "mx-auto",
            )}
            siteKey="0x4AAAAAAAMvB2JUUxIcQ2Y8"
            onError={(...args) => {
              setTurnstileStatus("error");
            }}
            onSuccess={(token) => {
              setTurnstileToken(token);
              setTurnstileStatus("solved");
            }}
            options={{
              theme: "dark",
              size: isSmallScreen ? "compact" : "normal",

              // As of this moment catalan is not available.
              language: language.current === "ca" ? "es" : language.current,
            }}
          />
        </div>

        {turnstileStatus === "error" && (
          <Alert
            variant="destructive"
            className="mt-6"
          >
            <AlertTitle>Human Verification Failed</AlertTitle>
            <AlertDescription className="mt-4 text-pretty text-xs">
              <p>
                Are you having trouble with the captcha? Try reloading or
                clearing the cache.
              </p>
              <p className="mt-4 [@media(width>=575px)]:mt-0">
                If it persists, contact me directly at {props.fallbackEmailLink}
              </p>
            </AlertDescription>
          </Alert>
        )}

        <div className="ml-auto mt-8 flex w-full flex-col justify-end gap-4 fold:flex-row">
          <Button
            type="reset"
            variant="outline"
            className="xs:w-20 sm:h-12 sm:w-32"
            onClick={() => {
              form.reset();
              turnstile.current?.reset();

              setTurnstileStatus("unknown");
            }}
          >
            Reset
          </Button>
          <Button
            className="xs:w-32 sm:h-12 sm:w-48"
            type="submit"
            disabled={
              form.formState.isSubmitting ||
              !form.formState.isValid ||
              !(turnstileStatus === "solved")
            }
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
