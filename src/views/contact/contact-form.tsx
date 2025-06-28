"use client";

import RHFSelectField from "@/components/rhf/select-field";
import RHFTextField from "@/components/rhf/text-field";
import RHFTextareaField from "@/components/rhf/textarea-field";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useContactSubmit from "@/hooks/use-contact-submit";
import { ContactFormData, ContactFormSchema } from "@/schemas/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuCircleX, LuMailCheck, LuSend } from "react-icons/lu";

type Props = {
  email: string | null;
};

const defaultValues: ContactFormData = {
  email: "",
  message: "",
  name: "",
  type: "General Inquiry",
};

const ContactForm = (props: Props) => {
  const { email } = props;
  const { submit, isLoading, isSuccess, isError } = useContactSubmit();
  const form = useForm({
    defaultValues,
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (values) => {
    await submit(values);
  };

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

        <Button
          className="mt-10"
          isLoading={isLoading || form.formState.isSubmitting}
          loadingText="Sending"
        >
          Send Message <LuSend />
        </Button>

        <div>
          {isSuccess && (
            <Alert variant="default" className="mt-10">
              <LuMailCheck />
              <AlertTitle>Mail sent successfully</AlertTitle>
              <AlertDescription>
                <p>I will get back to you soon.</p>
              </AlertDescription>
            </Alert>
          )}

          {isError && (
            <Alert variant="destructive" className="mt-10">
              <LuCircleX />
              <AlertTitle>Failed to send mail</AlertTitle>
              <AlertDescription>
                <p>
                  Something went to wrong!{" "}
                  {email ? (
                    <>
                      send direct{" "}
                      <Link href={email} className="underline">
                        mail
                      </Link>{" "}
                      instead.
                    </>
                  ) : (
                    <>I will fix stuff soon.</>
                  )}
                </p>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;

// ----------------------------------------------------------------------
