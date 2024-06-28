import { Input, Textarea } from "@components/ui/react";

/** The fields of the contact form. */
export const CONTACT_FORM_FIELDS = {
  name: {
    label: "Name",
    className: "col-start-1 col-span-4 sm:col-span-2",
    type: "text",
    required: true,
    placeholder: "Your name",
    Component: Input,
  },

  email: {
    label: "Email",
    className: "col-start-1 col-span-4 sm:col-start-3 sm:col-span-2",
    type: "email",
    required: true,
    placeholder: "youremail@example.com",
    Component: Input,
  },

  subject: {
    label: "Subject",
    className: "col-start-1 col-span-4",
    type: "text",
    required: true,
    placeholder: "Subject",
    Component: Input,
  },

  message: {
    label: "Message",
    className: "col-start-1 col-span-4",
    required: true,
    placeholder: "Your message",
    rows: 3,
    Component: Textarea,
  },
};
