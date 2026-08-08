import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPriceBRL, MOCK_PRODUCTS } from "@/lib/data";

// TODO(preencher depois): proteger rota (exigir login) e filtrar produtos pelo sellerId do usuário logado.
export default function VendedorPainelPage() {
  const myProducts = MOCK_PRODUCTS; // TODO: filtrar pelo vendedor logado

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-navy-900">Painel do vendedor</h1>
        <Link href="/vendedor/novo-produto">
          <Button>Anunciar produto</Button>
        </Link>
      </div>

      {/* TODO(preencher depois): status real da conexão Mercado Pago (OAuth) */}
      <Card className="mb-6 border-brand-500/40 bg-brand-500/5">
        <CardContent className="flex items-center justify-between pt-4">
          <p className="text-sm text-navy-700">
            Conecte sua conta do Mercado Pago para receber pagamentos.
          </p>
          <Link href="/vendedor/mercadopago/conectar">
            <Button variant="secondary" size="sm">Conectar</Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="mb-3 font-medium text-navy-900">Meus produtos</h2>
      <div className="mb-8 grid grid-cols-1 gap-3">
        {myProducts.map((p) => (
          <Card key={p.id}>
            <CardContent className="flex items-center justify-between pt-4">
              <div>
                <p className="font-medium text-navy-900">{p.title}</p>
                <p className="text-sm text-navy-500">{formatPriceBRL(p.price)}</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="mb-3 font-medium text-navy-900">Pedidos recebidos</h2>
      {/* TODO(preencher depois): listar pedidos reais vindos do Supabase */}
      <Card>
        <CardContent className="pt-4 text-sm text-navy-400">
          Nenhum pedido ainda.
        </CardContent>
      </Card>
    </div>
  );
}
