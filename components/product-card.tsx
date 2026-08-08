import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { formatPriceBRL, getSellerById, type Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  const seller = getSellerById(product.sellerId);

  return (
    <Link href={`/produtos/${product.slug}`}>
      <Card className="overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative aspect-square bg-navy-50">
          {/* TODO(preencher depois): trocar por imagens reais do Supabase Storage */}
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
          />
          {product.condition === "usado" ? (
            <span className="absolute left-2 top-2 rounded-full bg-navy-900/80 px-2 py-0.5 text-xs font-medium text-white">
              Usado
            </span>
          ) : null}
        </div>
        <CardContent className="flex flex-col gap-1 pt-3">
          <h3 className="line-clamp-2 text-sm font-medium text-navy-900">
            {product.title}
          </h3>
          <p className="text-base font-semibold text-navy-900">
            {formatPriceBRL(product.price)}
          </p>
          <p className="text-xs text-navy-500">
            {seller?.name ?? "Vendedor"} · {seller?.city ?? ""}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
