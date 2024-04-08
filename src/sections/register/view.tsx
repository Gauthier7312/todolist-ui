import { Separator } from '@/components/ui/separator';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Chrome, Github } from 'lucide-react';
import RegisterForm from './form';

export default function RegisterPageView() {
  return (
    <section className="flex items-center justify-between gap-1">
      <div className="w-full p-24 min-h-screen">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Todolist.io</h2>
          <Link href="/">
            <p className="text-base">Se connecter</p>
          </Link>
        </div>

        <h3 className="text-2xl font-bold md:mt-24 sm:mt-16">
          Créer un compte
        </h3>
        <p className="text-sm my-1">
          Créer votre compte pour accéder au fonctionnalité de Todolist.io.
        </p>

        <div className="flex justify-between items-center gap-4 mt-6 text-sm font-semibold">
          <Button className="w-full" size="lg" variant="secondary">
            <Chrome size={18} className="mr-2" />
            Connexion avec Google
          </Button>
          <Button className="w-full" size="lg" variant="secondary">
            <Github size={18} className="mr-2" />
            Connexion avec GitHub
          </Button>
        </div>
        <Separator className="my-6" />
        <RegisterForm />
      </div>

      <div className="w-full min-h-screen p-24 md:block hidden bg-gray-50"></div>
    </section>
  );
}
