/* import { useForm, valiForm, type SubmitHandler } from "@modular-forms/react";

import type { UseContactFormHook } from "../types";
import { type ContactForm, ContactFormSchema } from "../schema";
import { useCallback } from "react";

const submitForm: SubmitHandler<ContactForm> = async (data) => {};

export const useContactForm: UseContactFormHook = () => {
  const [form, { Form, Field }] = useForm<ContactForm>({
    validateOn: "touched",
    validate: valiForm(ContactFormSchema),
  });

  return {
    store: form,
    submitHandler: submitForm,

    ContactForm: Form,
    ContactFormField: Field,
  };
};
 */
