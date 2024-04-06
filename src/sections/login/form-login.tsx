'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import Link from 'next/link';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});
export default function FormLoin() {
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
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <RHFTextField
        label="Adresse Email"
        name="email"
        placeholder="email@gmailcom"
      />
      <RHFTextField
        type="password"
        label="Mot de passe"
        name="password"
        placeholder="Mot de passe"
      />
      <Button size="lg" className="w-full" type="submit">
        Continuer
      </Button>

      <Link href="/">
        <p className="text-sm my-4 text-center">Mot de passe oublié ?</p>
      </Link>
    </FormProvider>
  );
}
