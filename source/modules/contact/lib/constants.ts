import { type Locale, useClientTranslation } from "@modules/i18n";
import { Input, Textarea } from "@components/ui/react";

/** The fields of the contact form. */
export const CONTACT_FORM_FIELDS = {
  name: {
    className: "col-start-1 col-span-4 sm:col-span-2",
    type: "text",
    required: true,
    Component: Input,

    label: (locale: Locale) =>
      useClientTranslation("contact.form.labels.name", locale),
    placeholder: (locale: Locale) =>
      useClientTranslation("contact.form.placeholders.name", locale),
  },

  email: {
    className: "col-start-1 col-span-4 sm:col-start-3 sm:col-span-2",
    type: "email",
    required: true,
    Component: Input,

    label: (locale: Locale) =>
      useClientTranslation("contact.form.labels.email", locale),
    placeholder: (locale: Locale) =>
      useClientTranslation("contact.form.placeholders.email", locale),
  },

  subject: {
    className: "col-start-1 col-span-4",
    type: "text",
    required: true,
    Component: Input,

    label: (locale: Locale) =>
      useClientTranslation("contact.form.labels.subject", locale),
    placeholder: (locale: Locale) =>
      useClientTranslation("contact.form.placeholders.subject", locale),
  },

  message: {
    className: "col-start-1 col-span-4",
    required: true,
    rows: 3,
    Component: Textarea,

    label: (locale: Locale) =>
      useClientTranslation("contact.form.labels.message", locale),
    placeholder: (locale: Locale) =>
      useClientTranslation("contact.form.placeholders.message", locale),
  },
};
