import { ProductCard } from "@/components/product-card";
import { Select } from "@/components/ui/field";
import { CATEGORIES, MOCK_PRODUCTS } from "@/lib/data";

// TODO(preencher depois): ler searchParams (categoria, busca, ordenação) e
// filtrar via query real ao Supabase em vez de MOCK_PRODUCTS.
export default function ProdutosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-navy-900">Produtos</h1>
        <div className="flex gap-2">
          <Select
            defaultValue=""
            options={[
              { value: "", label: "Todas as categorias" },
              ...CATEGORIES.map((c) => ({ value: c.id, label: c.label })),
            ]}
          />
          <Select
            defaultValue="recentes"
            options={[
              { value: "recentes", label: "Mais recentes" },
              { value: "menor-preco", label: "Menor preço" },
              { value: "maior-preco", label: "Maior preço" },
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {MOCK_PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
