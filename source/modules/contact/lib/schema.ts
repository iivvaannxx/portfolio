import * as v from "valibot";

/** Defines the schema for the contact form. */
export const ContactFormSchema = v.object({
  /** The email address of the submitter. */
  email: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty("Please provide an email address."),
    v.email("This email address is invalid."),
  ),

  /** The name of the submitter. */
  name: v.pipe(v.string(), v.trim(), v.nonEmpty("Please provide a name.")),

  /** The subject of the message. */
  subject: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(
      5,
      "Please provide a clearer subject (more than 5 characters).",
    ),
  ),

  /** The message content. */
  message: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(
      10,
      "Please provide a longer message (more than 10 characters).",
    ),
  ),
});

/** Defines the fields of a contact form. */
export type ContactForm = v.InferInput<typeof ContactFormSchema>;

/** Defines the keys for each field of the contact form. */
export type ContactFormFieldName = keyof ContactForm;
