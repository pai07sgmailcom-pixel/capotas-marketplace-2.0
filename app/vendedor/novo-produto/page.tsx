import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { CATEGORIES } from "@/lib/data";

// TODO(preencher depois): submeter para Supabase (tabela products) + upload de imagens no Storage.
export default function NovoProdutoPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <h1 className="mb-6 text-xl font-semibold text-navy-900">Anunciar produto</h1>

      <form className="flex flex-col gap-4">
        <Field label="Título" htmlFor="title">
          <Input id="title" placeholder="Ex: Capota marítima Fiat Toro" />
        </Field>

        <Field label="Categoria" htmlFor="category">
          <Select
            id="category"
            options={CATEGORIES.map((c) => ({ value: c.id, label: c.label }))}
          />
        </Field>

        <Field label="Condição" htmlFor="condition">
          <Select
            id="condition"
            options={[
              { value: "novo", label: "Novo" },
              { value: "usado", label: "Usado" },
            ]}
          />
        </Field>

        <Field label="Compatibilidade (veículo)" htmlFor="vehicle">
          <Input id="vehicle" placeholder="Ex: Fiat Toro 2017-2023" />
        </Field>

        <Field label="Preço (R$)" htmlFor="price">
          <Input id="price" type="number" step="0.01" placeholder="0,00" />
        </Field>

        <Field label="Descrição" htmlFor="description">
          <Textarea id="description" placeholder="Detalhes do produto..." />
        </Field>

        <Field label="Fotos" htmlFor="images">
          {/* TODO(preencher depois): componente real de upload múltiplo para Supabase Storage */}
          <Input id="images" type="file" multiple accept="image/*" />
        </Field>

        <Button type="submit" size="lg">Publicar anúncio</Button>
      </form>
    </div>
  );
}
