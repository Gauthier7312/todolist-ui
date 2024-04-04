'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import FormProvider, { RHFTextField } from '@/components/hook-form';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function Home() {
  // 1. Define your form.
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFTextField label="Full name" name="username" placeholder="shadcn" />
        <Button type="submit">Submit</Button>
      </FormProvider>
    </main>
  );
}
