import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  type: z.enum(
    ["General Inquiry", "Regarding Feedback", "Support", "Other Reason"],
    {
      errorMap: () => ({ message: "Invalid type" }),
    }
  ),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
