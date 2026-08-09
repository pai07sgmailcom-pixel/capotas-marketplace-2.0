"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/field";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push("/");
    router.refresh();
  }

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/` },
    });
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="mb-6 text-xl font-semibold text-navy-900">Entrar</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Field label="E-mail" htmlFor="email">
          <Input id="email" name="email" type="email" placeholder="voce@email.com" required />
        </Field>
        <Field label="Senha" htmlFor="password">
          <Input id="password" name="password" type="password" placeholder="••••••••" required />
        </Field>
        {errorMsg ? <p className="text-sm text-red-600">{errorMsg}</p> : null}
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <div className="my-4 text-center text-xs text-navy-400">ou</div>

      <Button variant="outline" size="lg" className="w-full" onClick={handleGoogleLogin}>
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
