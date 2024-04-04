import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, InputProps } from '../ui/input';
import { FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

type RHFTextFieldProps = {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
};

export default function RHFTextField({
  name,
  type,
  placeholder,
  label,
}: //   ...other
RHFTextFieldProps & InputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Input placeholder={placeholder} type={type ?? 'text'} {...field} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
