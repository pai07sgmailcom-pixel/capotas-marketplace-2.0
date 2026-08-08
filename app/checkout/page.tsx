"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPriceBRL, MOCK_PRODUCTS } from "@/lib/data";

type DeliveryMethod = "retirada" | "envio";
type PaymentMethod = "pix" | "cartao" | "boleto";

// TODO(preencher depois): substituir carrinho mockado por estado real
// (contexto/carrinho persistido) e ligar aos endpoints de pedido/pagamento.
export default function CheckoutPage() {
  const cartItems = [MOCK_PRODUCTS[0]];
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  const [delivery, setDelivery] = useState<DeliveryMethod>("envio");
  const [payment, setPayment] = useState<PaymentMethod>("pix");

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-xl font-semibold text-navy-900">Finalizar compra</h1>

      <Card className="mb-6">
        <CardContent className="pt-4">
          <h2 className="mb-3 font-medium text-navy-900">Resumo</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between py-1 text-sm">
              <span>{item.title}</span>
              <span>{formatPriceBRL(item.price)}</span>
            </div>
          ))}
          <div className="mt-3 flex justify-between border-t border-navy-100 pt-3 font-semibold">
            <span>Total</span>
            <span>{formatPriceBRL(total)}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="pt-4">
          <h2 className="mb-3 font-medium text-navy-900">Entrega</h2>
          <div className="flex gap-3">
            <button
              onClick={() => setDelivery("retirada")}
              className={`flex-1 rounded-lg border p-3 text-sm ${
                delivery === "retirada"
                  ? "border-brand-500 bg-brand-500/5"
                  : "border-navy-200"
              }`}
            >
              Retirar com o vendedor
              {/* TODO(preencher depois): agendamento + PIN/QR code de retirada */}
            </button>
            <button
              onClick={() => setDelivery("envio")}
              className={`flex-1 rounded-lg border p-3 text-sm ${
                delivery === "envio"
                  ? "border-brand-500 bg-brand-500/5"
                  : "border-navy-200"
              }`}
            >
              Receber em casa
              {/* TODO(preencher depois): cálculo real de frete (Correios/transportadora) */}
            </button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="pt-4">
          <h2 className="mb-3 font-medium text-navy-900">Pagamento</h2>
          <div className="flex gap-3">
            {(["pix", "cartao", "boleto"] as PaymentMethod[]).map((method) => (
              <button
                key={method}
                onClick={() => setPayment(method)}
                className={`flex-1 rounded-lg border p-3 text-sm capitalize ${
                  payment === method
                    ? "border-brand-500 bg-brand-500/5"
                    : "border-navy-200"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
          {/* TODO(preencher depois): integração real com Mercado Pago (split por vendedor) */}
        </CardContent>
      </Card>

      <Button size="lg" className="w-full">
        Pagar {formatPriceBRL(total)}
      </Button>
    </div>
  );
}
