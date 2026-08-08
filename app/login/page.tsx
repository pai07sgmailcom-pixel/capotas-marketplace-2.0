import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/field";

// TODO(preencher depois): ligar ao Supabase Auth (signInWithPassword + signInWithOAuth "google")
export default function LoginPage() {
  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="mb-6 text-xl font-semibold text-navy-900">Entrar</h1>

      <form className="flex flex-col gap-4">
        <Field label="E-mail" htmlFor="email">
          <Input id="email" type="email" placeholder="voce@email.com" />
        </Field>
        <Field label="Senha" htmlFor="password">
          <Input id="password" type="password" placeholder="••••••••" />
        </Field>
        <Button type="submit" size="lg">Entrar</Button>
      </form>

      <div className="my-4 text-center text-xs text-navy-400">ou</div>

      <Button variant="outline" size="lg" className="w-full">
        Entrar com Google
      </Button>

      <p className="mt-6 text-center text-sm text-navy-500">
        Não tem conta?{" "}
        <Link href="/cadastro" className="text-brand-600">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
