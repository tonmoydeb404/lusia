import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectTriggerProps,
  SelectValue,
  SelectValueProps,
} from "../ui/select";
import { FieldWrapper, FieldWrapperProps } from "./common";

type Props = {
  name: string;
  fieldTriggerProps?: SelectTriggerProps;
  fieldValueProps?: SelectValueProps;
  options: { label: string; value: string }[];
} & React.ComponentProps<"div"> &
  FieldWrapperProps;

const RHFSelectField = (props: Props) => {
  const {
    name,
    description,
    label,
    fieldTriggerProps,
    fieldValueProps,
    options,
    ...others
  } = props;
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem {...others}>
          <FieldWrapper description={description} label={label}>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger {...fieldTriggerProps}>
                  <SelectValue
                    placeholder="Select Value"
                    {...fieldValueProps}
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FieldWrapper>
        </FormItem>
      )}
    />
  );
};

export default RHFSelectField;
