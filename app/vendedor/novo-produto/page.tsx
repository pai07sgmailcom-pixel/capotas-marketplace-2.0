"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { CATEGORIES } from "@/lib/data";
import { createProduct } from "@/lib/products";

export default function NovoProdutoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await createProduct({
      title: String(formData.get("title") ?? ""),
      category: String(formData.get("category") ?? ""),
      condition: formData.get("condition") === "usado" ? "usado" : "novo",
      vehicleCompat: String(formData.get("vehicle") ?? ""),
      price: Math.round(Number(formData.get("price") ?? 0) * 100),
      description: String(formData.get("description") ?? ""),
    });

    setLoading(false);

    if (result.error) {
      setErrorMsg(result.error);
      return;
    }

    router.push("/vendedor");
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <h1 className="mb-6 text-xl font-semibold text-navy-900">Anunciar produto</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Field label="Título" htmlFor="title">
          <Input id="title" name="title" placeholder="Ex: Capota marítima Fiat Toro" required />
        </Field>

        <Field label="Categoria" htmlFor="category">
          <Select
            id="category"
            name="category"
            options={CATEGORIES.map((c) => ({ value: c.id, label: c.label }))}
          />
        </Field>

        <Field label="Condição" htmlFor="condition">
          <Select
            id="condition"
            name="condition"
            options={[
              { value: "novo", label: "Novo" },
              { value: "usado", label: "Usado" },
            ]}
          />
        </Field>

        <Field label="Compatibilidade (veículo)" htmlFor="vehicle">
          <Input id="vehicle" name="vehicle" placeholder="Ex: Fiat Toro 2017-2023" />
        </Field>

        <Field label="Preço (R$)" htmlFor="price">
          <Input id="price" name="price" type="number" step="0.01" placeholder="0,00" required />
        </Field>

        <Field label="Descrição" htmlFor="description">
          <Textarea id="description" name="description" placeholder="Detalhes do produto..." />
        </Field>

        <Field label="Fotos" htmlFor="images">
          {/* TODO(preencher depois): upload real para Supabase Storage */}
          <Input id="images" type="file" multiple accept="image/*" disabled />
        </Field>

        {errorMsg ? <p className="text-sm text-red-600">{errorMsg}</p> : null}

        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Publicando..." : "Publicar anúncio"}
        </Button>
      </form>
    </div>
  );
}
