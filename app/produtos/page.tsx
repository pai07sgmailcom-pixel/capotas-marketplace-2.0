import { ProductCard } from "@/components/product-card";
import { Select } from "@/components/ui/field";
import { CATEGORIES } from "@/lib/data";
import { fetchProducts } from "@/lib/products";

// TODO(preencher depois): ler searchParams (categoria, busca, ordenação) e
// aplicar filtro real na query do Supabase em vez de filtrar em memória.
export default async function ProdutosPage() {
  const products = await fetchProducts();

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

      {products.length === 0 ? (
        <p className="text-sm text-navy-400">
          Nenhum produto publicado ainda.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
