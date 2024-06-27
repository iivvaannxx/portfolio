/* import { useForm } from "@modular-forms/react";
import { useContactForm } from "../lib/hooks/use-contact-form";

export function ContactForm() {
  const {
    store,

    ContactForm,
    ContactFormField,
    submitHandler,
  } = useContactForm();

  return (
    <ContactForm
      onSubmit={submitHandler}
      className="grid grid-cols-2 gap-x-4 gap-y-3"
    >
      <ContactFormField name="name">
        {(field, props) => (
          <div className="col-start-1">
            <label className="grid grid-cols-1 gap-y-1">
              <span className="ml-2 inline-flex gap-[2px] text-sm font-medium capitalize text-foreground">
                <span>Name</span>
                <span className="text-base font-bold">*</span>
              </span>

              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
                type="text"
                {...props}
              />
            </label>
            {field.error && (
              <p className="mt-3 pl-2 text-red-400">{field.error}</p>
            )}{" "}
          </div>
        )}
      </ContactFormField>

      <ContactFormField name="email">
        {(field, props) => (
          <div className="col-start-2">
            <label className="grid grid-cols-1 gap-y-1">
              <span className="ml-2 inline-flex gap-[2px] text-sm font-medium capitalize text-foreground">
                <span>Email</span>
                <span className="text-base font-bold">*</span>
              </span>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
                type="email"
                {...props}
              />
            </label>
            {field.error && (
              <p className="mt-3 pl-2 text-red-400">{field.error}</p>
            )}{" "}
          </div>
        )}
      </ContactFormField>

      <ContactFormField name="subject">
        {(field, props) => (
          <div className="col-span-2">
            <label className="grid grid-cols-1 gap-y-1">
              <span className="ml-2 inline-flex gap-[2px] text-sm font-medium capitalize text-foreground">
                <span>Subject</span>
                <span className="text-base font-bold">*</span>
              </span>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
                type="text"
                {...props}
              />
            </label>
            {field.error && (
              <p className="mt-3 pl-2 text-red-400">{field.error}</p>
            )}{" "}
          </div>
        )}
      </ContactFormField>

      <ContactFormField name="message">
        {(field, props) => (
          <div className="col-span-2">
            <label className="grid grid-cols-1 gap-y-1">
              <span className="ml-2 inline-flex gap-[2px] text-sm font-medium capitalize text-foreground">
                <span>Message</span>
                <span className="text-base font-bold">*</span>
              </span>
              <textarea
                rows={3}
                required
                className="flex w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                {...props}
              />
            </label>
            {field.error && (
              <p className="mt-3 pl-2 text-red-400">{field.error}</p>
            )}
          </div>
        )}
      </ContactFormField>

      <button type="submit">Submit</button>
    </ContactForm>
  );
}
 */
