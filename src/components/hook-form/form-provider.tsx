import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type FormProviderProps = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: FormProviderProps) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
      </form>
    </Form>
  );
}
