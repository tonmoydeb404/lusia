import useContactSubmit from "@/hooks/use-contact-submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

// Define Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  type: z.string().optional(),
});

type FormValues = z.infer<typeof contactSchema>;

const useContactForm = () => {
  const { isLoading, isError, isSuccess, submit } = useContactSubmit();

  const options = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "",
      message: "",
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = options;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await submit(data);
    reset();
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    onSubmit,
    isLoading,
    isError,
    isSuccess,
    options,
  };
};

export default useContactForm;
