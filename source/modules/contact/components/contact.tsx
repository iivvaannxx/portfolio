import type { Control } from "react-hook-form";
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
import type { PropsWithChildren } from "react";

// The props received by <ContactFormFields> component.
type ContactFormFieldsProps = {
  formControl: Control<ContactFormData>;
};

// The props received by <ContactFormActions> component.
type ContactFormActionsProps = {
  disableSubmit: boolean;
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
}: ContactFormActionsProps) {
  return (
    <div className="ml-auto mt-8 flex w-full flex-col justify-end gap-4 fold:flex-row">
      <Button
        type="reset"
        variant="outline"
        className="xs:w-20 sm:h-12 sm:w-32"
        onClick={resetForm}
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
  return (
    <Alert
      variant="destructive"
      className="mt-6"
    >
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="mt-4 text-pretty text-xs">
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
              the cache.
            </p>
            <p className="mt-4 [@media(width>=575px)]:mt-0">
              If it persists, contact me directly at{" "}
              {/* props.fallbackEmailLink */}
            </p>
          </ContactFormAlert>
        )}

        {requestStatus !== null && (
          <ContactFormAlert
            title={requestStatus.success ? "Success!" : "Error!"}
            variant={requestStatus.success ? "success" : "destructive"}
          >
            <p>{requestStatus.message}</p>
          </ContactFormAlert>
        )}

        <ContactFormActions
          resetForm={resetForm}
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
