import type { PropsWithChildren, ReactNode } from "react";
import type { Control } from "react-hook-form";
import { TriangleAlert, CircleCheckBig } from "lucide-react";

import {
  Button,
  Alert,
  AlertDescription,
  AlertTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/react";

import { TurnstileWidget } from "./turnstile-widget";

import { CONTACT_FORM_FIELDS } from "../lib/constants";
import type { ContactFormData, ContactFormFieldName } from "../lib/schema";
import { useContactForm } from "../lib/hooks/use-contact-form";

import { email } from "@app/lib/data/socials";

// The props received by <ContactFormFields> component.
type ContactFormFieldsProps = {
  formControl: Control<ContactFormData>;
};

// The props received by <ContactFormActions> component.
type ContactFormActionsProps = {
  disableSubmit: boolean;
  disableReset: boolean;
  resetForm: () => void;
};

// The props received by <ContactFormAlert> component.
type ContactFormAlertProps = PropsWithChildren<{
  title: string;
  variant: "destructive" | "success";
}>;

// Renders the form fields for the contact form.
function ContactFormFields({ formControl }: ContactFormFieldsProps) {
  return (
    <div className="mt-4 grid grid-cols-4 gap-x-4 gap-y-5">
      {Object.entries(CONTACT_FORM_FIELDS).map(
        ([key, { label, Component, className, ...props }]) => (
          <FormField
            control={formControl}
            key={key}
            name={key as ContactFormFieldName}
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
  );
}

// Renders the actions for the contact form.
function ContactFormActions({
  resetForm,
  disableSubmit,
  disableReset,
}: ContactFormActionsProps) {
  return (
    <div className="ml-auto mt-8 flex w-full flex-col justify-end gap-4 fold:flex-row">
      <Button
        type="reset"
        variant="outline"
        className="xs:w-20 sm:h-12 sm:w-32"
        onClick={resetForm}
        disabled={disableReset}
      >
        Reset
      </Button>
      <Button
        className="xs:w-32 sm:h-12 sm:w-48"
        type="submit"
        disabled={disableSubmit}
      >
        Submit
      </Button>
    </div>
  );
}

// Renders an alert to display some feedback to the user.
function ContactFormAlert({ title, variant, children }: ContactFormAlertProps) {
  const Icon = variant === "destructive" ? TriangleAlert : CircleCheckBig;
  return (
    <Alert
      variant={variant}
      className="mx-auto mt-6 w-[95%]"
    >
      <div className="flex items-center gap-2 text-sm">
        <Icon className="mb-1 size-[1.2em]" />
        <AlertTitle className="mb-0">{title}</AlertTitle>
      </div>
      <AlertDescription className="mt-4 text-pretty text-xs sm:text-sm">
        {children}
      </AlertDescription>
    </Alert>
  );
}
/** Defines the form used to contact me. */
export function ContactForm() {
  const {
    form,
    requestStatus,
    turnstileRef,
    turnstileStatus,
    onTurnstileError,
    onTurnstileSuccess,
    submitForm,
    resetForm,
  } = useContactForm();

  return (
    <Form {...form}>
      <form onSubmit={submitForm}>
        <ContactFormFields formControl={form.control} />
        <TurnstileWidget
          onError={onTurnstileError}
          onSuccess={onTurnstileSuccess}
          ref={turnstileRef}
        />

        {turnstileStatus === "error" && (
          <ContactFormAlert
            title="Human Verification Failed"
            variant="destructive"
          >
            <p>
              Are you having trouble with the captcha? Try reloading or clearing
              the cache. If it persists, you can contact me directly at my
              email:{" "}
              <a
                className="font-medium underline underline-offset-2"
                href={email.href}
              >
                {email.href.slice(7)}
              </a>
              {"."}
            </p>
          </ContactFormAlert>
        )}

        {requestStatus !== null && (
          <ContactFormAlert
            variant={requestStatus.success ? "success" : "destructive"}
            title={
              requestStatus.success ? "Email Sent" : "Something went wrong"
            }
          >
            <p>{requestStatus.message}</p>
          </ContactFormAlert>
        )}

        <ContactFormActions
          resetForm={resetForm}
          disableReset={form.formState.isSubmitting}
          disableSubmit={
            form.formState.isSubmitting ||
            !form.formState.isValid ||
            !(turnstileStatus === "solved")
          }
        />
      </form>
    </Form>
  );
}
