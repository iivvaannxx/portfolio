import * as v from "valibot";
import { getCurrentLocale, useClientTranslation } from "@modules/i18n";

const MIN_SUBJECT_LENGTH = 5;
const MIN_MESSAGE_LENGTH = 10;

/** Defines the schema for the contact form. */
export const ContactFormSchema = v.object({
  /** The email address of the submitter. */
  email: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty(() =>
      useClientTranslation(
        "contact.form.validation.email-required",
        getCurrentLocale(),
      ),
    ),
    v.email(() =>
      useClientTranslation(
        "contact.form.validation.email-invalid",
        getCurrentLocale(),
      ),
    ),
  ),

  /** The name of the submitter. */
  name: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty(() =>
      useClientTranslation(
        "contact.form.validation.name-required",
        getCurrentLocale(),
      ),
    ),
  ),

  /** The subject of the message. */
  subject: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(MIN_SUBJECT_LENGTH, () =>
      useClientTranslation(
        "contact.form.validation.clearer-subject",
        getCurrentLocale(),
      )(MIN_SUBJECT_LENGTH),
    ),
  ),

  /** The message content. */
  message: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(MIN_MESSAGE_LENGTH, () =>
      useClientTranslation(
        "contact.form.validation.clearer-message",
        getCurrentLocale(),
      )(MIN_MESSAGE_LENGTH),
    ),
  ),
});

/** Defines the fields of a contact form. */
export type ContactFormData = v.InferInput<typeof ContactFormSchema>;

/** Defines the keys for each field of the contact form. */
export type ContactFormFieldName = keyof ContactFormData;
