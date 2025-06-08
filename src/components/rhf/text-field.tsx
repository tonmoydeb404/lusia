import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { FieldWrapper, FieldWrapperProps } from "./common";

type Props = {
  name: string;
  fieldProps?: React.ComponentProps<"input">;
} & React.ComponentProps<"div"> &
  FieldWrapperProps;

const RHFTextField = (props: Props) => {
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
              <Input {...field} {...fieldProps} />
            </FormControl>
          </FieldWrapper>
        </FormItem>
      )}
    />
  );
};

export default RHFTextField;
