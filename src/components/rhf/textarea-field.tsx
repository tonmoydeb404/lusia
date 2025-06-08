import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { FieldWrapper, FieldWrapperProps } from "./common";

type Props = {
  name: string;
  fieldProps?: React.ComponentProps<"textarea">;
} & React.ComponentProps<"div"> &
  FieldWrapperProps;

const RHFTextareaField = (props: Props) => {
  const { name, description, label, fieldProps, ...others } = props;
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem {...others}>
          <FieldWrapper description={description} label={label}>
            <FormControl>
              <Textarea {...field} {...fieldProps} />
            </FormControl>
          </FieldWrapper>
        </FormItem>
      )}
    />
  );
};

export default RHFTextareaField;
