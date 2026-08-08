import { Button } from "@/components/ui/button";
import { Field, Input, Select } from "@/components/ui/field";

// TODO(preencher depois): ligar ao Supabase Auth (signUp) + criar linha em `profiles` com role.
export default function CadastroPage() {
  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="mb-6 text-xl font-semibold text-navy-900">Criar conta</h1>

      <form className="flex flex-col gap-4">
        <Field label="Nome" htmlFor="name">
          <Input id="name" placeholder="Seu nome ou nome da loja" />
        </Field>
        <Field label="E-mail" htmlFor="email">
          <Input id="email" type="email" placeholder="voce@email.com" />
        </Field>
        <Field label="Senha" htmlFor="password">
          <Input id="password" type="password" placeholder="••••••••" />
        </Field>
        <Field label="Tipo de conta" htmlFor="role">
          <Select
            id="role"
            defaultValue="comprador"
            options={[
              { value: "comprador", label: "Comprador" },
              { value: "particular", label: "Vendedor particular" },
              { value: "loja", label: "Loja" },
              { value: "fabricante", label: "Fabricante" },
            ]}
          />
        </Field>
        <Button type="submit" size="lg">Criar conta</Button>
      </form>
    </div>
  );
}
