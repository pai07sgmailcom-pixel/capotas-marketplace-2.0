import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { formatPriceBRL, getSellerById, MOCK_PRODUCTS } from "@/lib/data";

// TODO(preencher depois): trocar por fetch real (Supabase) usando o slug/id da rota.
export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = MOCK_PRODUCTS.find((p) => p.slug === params.id);
  if (!product) notFound();

  const seller = getSellerById(product.sellerId);

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-navy-50">
        {/* TODO(preencher depois): galeria real com múltiplas imagens */}
        <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-navy-900">{product.title}</h1>
        <p className="mt-1 text-sm text-navy-500">{product.vehicleCompat}</p>
        <p className="mt-4 text-3xl font-bold text-navy-900">
          {formatPriceBRL(product.price)}
        </p>

        <div className="mt-6 flex gap-3">
          <Button size="lg" className="flex-1">Comprar agora</Button>
          <Button variant="outline" size="lg">Perguntar</Button>
        </div>

        <div className="mt-8 border-t border-navy-100 pt-6">
          <h2 className="mb-2 font-medium text-navy-900">Descrição</h2>
          <p className="text-sm text-navy-600">{product.description}</p>
        </div>

        <div className="mt-8 border-t border-navy-100 pt-6">
          <h2 className="mb-2 font-medium text-navy-900">Vendedor</h2>
          <p className="text-sm text-navy-600">
            {seller?.name} · {seller?.city}
            {seller?.verified ? " · Verificado" : ""}
          </p>
        </div>

        {/* TODO(preencher depois): seção real de avaliações do produto */}
        <div className="mt-8 border-t border-navy-100 pt-6">
          <h2 className="mb-2 font-medium text-navy-900">Avaliações</h2>
          <p className="text-sm text-navy-400">Ainda sem avaliações.</p>
        </div>
      </div>
    </div>
  );
}
