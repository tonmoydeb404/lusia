import { ReactNode } from "react";
import { FormDescription, FormLabel, FormMessage } from "../ui/form";

export type FieldWrapperProps = {
  description?: string;
  label?: string;
};

export const FieldWrapper = (
  props: FieldWrapperProps & { children: ReactNode }
) => {
  const { label, description, children } = props;
  return (
    <>
      {label && <FormLabel className="text-sm font-medium">{label}</FormLabel>}
      {children}
      {description && (
        <FormDescription className="text-xs text-muted-foreground">
          {description}
        </FormDescription>
      )}
      <FormMessage className="text-xs" />
    </>
  );
};
