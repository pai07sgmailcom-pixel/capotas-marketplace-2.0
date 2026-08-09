"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Field, Input, Select } from "@/components/ui/field";
import { supabase } from "@/lib/supabase";

export default function CadastroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const role = String(formData.get("role") ?? "comprador");

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setLoading(false);
      setErrorMsg(error.message);
      return;
    }

    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        name,
        role,
      });
      if (profileError) {
        console.error("Erro ao criar profile:", profileError.message);
      }
    }

    setLoading(false);
    router.push("/");
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="mb-6 text-xl font-semibold text-navy-900">Criar conta</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Field label="Nome" htmlFor="name">
          <Input id="name" name="name" placeholder="Seu nome ou nome da loja" required />
        </Field>
        <Field label="E-mail" htmlFor="email">
          <Input id="email" name="email" type="email" placeholder="voce@email.com" required />
        </Field>
        <Field label="Senha" htmlFor="password">
          <Input id="password" name="password" type="password" placeholder="••••••••" required minLength={6} />
        </Field>
        <Field label="Tipo de conta" htmlFor="role">
          <Select
            id="role"
            name="role"
            defaultValue="comprador"
            options={[
              { value: "comprador", label: "Comprador" },
              { value: "particular", label: "Vendedor particular" },
              { value: "loja", label: "Loja" },
              { value: "fabricante", label: "Fabricante" },
            ]}
          />
        </Field>
        {errorMsg ? <p className="text-sm text-red-600">{errorMsg}</p> : null}
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Criando..." : "Criar conta"}
        </Button>
      </form>
    </div>
  );
}
