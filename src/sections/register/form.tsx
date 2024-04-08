'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import Link from 'next/link';

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: 'Le champs doit avoir au minimum plus de 2 caractères.',
  }),
  email: z.string().email(),
  password: z.string(),
});
export default function RegisterForm() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
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
        label="Nom & prénom"
        name="fullname"
        placeholder="John doe"
      />
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
    </FormProvider>
  );
}
