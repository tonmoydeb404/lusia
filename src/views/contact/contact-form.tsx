"use client";

import RHFSelectField from "@/components/rhf/select-field";
import RHFTextField from "@/components/rhf/text-field";
import RHFTextareaField from "@/components/rhf/textarea-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ContactFormData, ContactFormSchema } from "@/schemas/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";

type Props = {};

const defaultValues: ContactFormData = {
  email: "",
  message: "",
  name: "",
  type: "General Inquiry",
};

const ContactForm = (props: Props) => {
  const form = useForm({
    defaultValues,
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
        <RHFTextField name="name" label="Full Name" />
        <RHFTextField name="email" label="Email Address" />
        <RHFTextareaField name="message" label="Message" />
        <RHFSelectField
          name="type"
          label="Type"
          options={[
            "General Inquiry",
            "Regarding Feedback",
            "Support",
            "Other Reason",
          ].map((item) => ({
            label: item,
            value: item,
          }))}
          fieldTriggerProps={{ className: "w-full" }}
        />

        <Button className="mt-10">
          Send Message <LuSend />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

// ----------------------------------------------------------------------
