// import type { FormStore, SubmitHandler, useForm } from "@modular-forms/react";
// import type { ContactForm } from "./schema";

// /** The data handled by the contact form. */
// export type ContactFormData = ContactForm & {
//   /** The Cloudflare captcha verification token. */
//   cfToken: string;
// };

// /** The type of the headless ContactForm 'Form' component. */
// export type ContactFormComponent = ReturnType<
//   typeof useForm<ContactForm>
// >[1]["Form"];

// /** The type of the headless ContactForm 'Field' component. */
// export type ContactFormFieldComponent = ReturnType<
//   typeof useForm<ContactForm>
// >[1]["Field"];

// /** Defines a hook which handles the data and components for the Contact Form. */
// export type UseContactFormHook = () => {
//   /** The data of the contact form.  */
//   store: FormStore<ContactForm, undefined>;

//   /** The submit handler for the contact form. */
//   submitHandler: SubmitHandler<ContactForm>;

//   /** The form component of the contact form. */
//   ContactForm: ContactFormComponent;

//   /** The Field component of the contact form. */
//   ContactFormField: ReturnType<typeof useForm<ContactForm>>[1]["Field"];
// };
