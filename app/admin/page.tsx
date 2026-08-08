import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, Input } from "@/components/ui/field";
import { MOCK_PRODUCTS, MOCK_SELLERS, formatPriceBRL } from "@/lib/data";

// TODO(preencher depois): proteger via middleware (checar profiles.role === "admin" no Supabase).
export default function AdminPainelPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-xl font-semibold text-navy-900">Painel administrativo</h1>

      <section className="mb-8">
        <h2 className="mb-3 font-medium text-navy-900">Moderação de produtos</h2>
        {/* TODO(preencher depois): listar produtos com status "pendente" vindos do Supabase */}
        <div className="grid grid-cols-1 gap-3">
          {MOCK_PRODUCTS.map((p) => (
            <Card key={p.id}>
              <CardContent className="flex items-center justify-between pt-4">
                <div>
                  <p className="font-medium text-navy-900">{p.title}</p>
                  <p className="text-sm text-navy-500">{formatPriceBRL(p.price)}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Rejeitar</Button>
                  <Button variant="secondary" size="sm">Aprovar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-medium text-navy-900">Usuários</h2>
        {/* TODO(preencher depois): listar todos os usuários (tabela profiles) com paginação */}
        <div className="grid grid-cols-1 gap-3">
          {MOCK_SELLERS.map((s) => (
            <Card key={s.id}>
              <CardContent className="flex items-center justify-between pt-4">
                <div>
                  <p className="font-medium text-navy-900">{s.name}</p>
                  <p className="text-sm text-navy-500 capitalize">{s.role} · {s.city}</p>
                </div>
                {s.verified ? (
                  <span className="text-xs text-brand-600">Verificado</span>
                ) : (
                  <Button variant="outline" size="sm">Verificar</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-medium text-navy-900">Comissão da plataforma</h2>
        {/* TODO(preencher depois): ler/gravar valor real em tabela de configurações */}
        <Card>
          <CardContent className="flex items-end gap-3 pt-4">
            <Field label="Comissão (%)" htmlFor="commission">
              <Input id="commission" type="number" defaultValue={8} className="w-24" />
            </Field>
            <Button size="md">Salvar</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
