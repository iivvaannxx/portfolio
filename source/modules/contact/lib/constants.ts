import { type Locale } from "@app/modules/i18n";
import { useTranslation } from "@app/modules/i18n/lib/utils/translations";
import { Input, Textarea } from "@components/ui/react";

/** The fields of the contact form. */
export const CONTACT_FORM_FIELDS = {
  name: {
    className: "col-start-1 col-span-4 sm:col-span-2",
    type: "text",
    required: true,
    Component: Input,

    label: (locale: Locale) =>
      useTranslation("sections.contact.labels.name", locale),
    placeholder: (locale: Locale) =>
      useTranslation("sections.contact.formPlaceholders.name", locale),
  },

  email: {
    className: "col-start-1 col-span-4 sm:col-start-3 sm:col-span-2",
    type: "email",
    required: true,
    Component: Input,

    label: (locale: Locale) =>
      useTranslation("sections.contact.labels.email", locale),
    placeholder: (locale: Locale) =>
      useTranslation("sections.contact.formPlaceholders.email", locale),
  },

  subject: {
    className: "col-start-1 col-span-4",
    type: "text",
    required: true,
    Component: Input,

    label: (locale: Locale) =>
      useTranslation("sections.contact.labels.subject", locale),
    placeholder: (locale: Locale) =>
      useTranslation("sections.contact.formPlaceholders.subject", locale),
  },

  message: {
    className: "col-start-1 col-span-4",
    required: true,
    rows: 3,
    Component: Textarea,

    label: (locale: Locale) =>
      useTranslation("sections.contact.labels.message", locale),
    placeholder: (locale: Locale) =>
      useTranslation("sections.contact.formPlaceholders.message", locale),
  },
};
