import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// TODO(preencher depois): redirecionar para o fluxo OAuth real do Mercado Pago
// (auth.mercadopago.com/authorization?client_id=...&redirect_uri=...) e tratar o
// callback salvando o access_token/refresh_token vinculado ao vendedor.
export default function ConectarMercadoPagoPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center">
      <h1 className="mb-2 text-xl font-semibold text-navy-900">
        Conectar Mercado Pago
      </h1>
      <p className="mb-6 text-sm text-navy-500">
        Suas vendas são pagas diretamente na sua conta do Mercado Pago,
        com uma pequena comissão retida automaticamente pela plataforma.
      </p>

      <Card>
        <CardContent className="pt-4">
          <Button size="lg" className="w-full">
            Conectar com Mercado Pago
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
