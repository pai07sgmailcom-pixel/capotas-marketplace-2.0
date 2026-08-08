import Link from "next/link";
import { ShieldCheck, Truck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, MOCK_PRODUCTS } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4">
          {/* TODO(preencher depois): copy institucional definitiva */}
          <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
            Capotas e acessórios para picapes, direto de quem entende.
          </h1>
          <p className="max-w-lg text-navy-200">
            Compre e venda com segurança: fabricantes, lojas e particulares em
            um só lugar.
          </p>
          <div className="flex gap-3">
            <Link href="/produtos">
              <Button variant="secondary" size="lg">Ver produtos</Button>
            </Link>
            <Link href="/vendedor">
              <Button
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-900"
              >
                Quero vender
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-lg font-semibold text-navy-900">Categorias</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/produtos?categoria=${cat.id}`}
              className="rounded-xl border border-navy-100 p-4 text-center text-sm font-medium text-navy-800 hover:border-brand-500 hover:text-brand-600"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Produtos em destaque */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-navy-900">Destaques</h2>
          <Link href="/produtos" className="text-sm text-brand-600">
            Ver todos
          </Link>
        </div>
        {/* TODO(preencher depois): substituir MOCK_PRODUCTS por dados reais */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {MOCK_PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Confiança */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-6 rounded-xl bg-navy-50 p-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-6 w-6 text-brand-500" />
            <div>
              <h3 className="font-medium text-navy-900">Pagamento protegido</h3>
              <p className="text-sm text-navy-500">
                Dinheiro liberado ao vendedor só após confirmação.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="h-6 w-6 text-brand-500" />
            <div>
              <h3 className="font-medium text-navy-900">Retirada ou envio</h3>
              <p className="text-sm text-navy-500">
                Combine com o vendedor ou receba em casa.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BadgeCheck className="h-6 w-6 text-brand-500" />
            <div>
              <h3 className="font-medium text-navy-900">Vendedores verificados</h3>
              <p className="text-sm text-navy-500">
                Fabricantes e lojas com selo de confiança.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
