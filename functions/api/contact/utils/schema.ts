import * as v from "valibot";

const MIN_SUBJECT_LENGTH = 5;
const MIN_MESSAGE_LENGTH = 10;

/** Defines the schema for the contact form. */
export const ContactFormSchema = v.object({
  /** The email address of the submitter. */
  email: v.pipe(v.string(), v.trim(), v.nonEmpty(), v.email()),

  /** The name of the submitter. */
  name: v.pipe(v.string(), v.trim(), v.nonEmpty()),

  /** The subject of the message. */
  subject: v.pipe(v.string(), v.trim(), v.minLength(MIN_SUBJECT_LENGTH)),

  /** The message content. */
  message: v.pipe(v.string(), v.trim(), v.minLength(MIN_MESSAGE_LENGTH)),
});

/** Defines the fields of a contact form. */
export type ContactFormData = v.InferInput<typeof ContactFormSchema>;

// This schema is already defined in the source/modules/contact/lib/schema.ts file.

// But importing it from there and reusing it causes Cloudflare to pull in
// client-side code and dependencies that are not needed for the server-side.
// Because is only one schema, I'll just redefine it here.
// If there were more schemas, I would consider moving them to a shared location.
