import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-navy-900">
          Mercado<span className="text-brand-500">Capotas</span>
        </Link>

        <div className="relative hidden flex-1 md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          {/* TODO(preencher depois): ligar busca real (query param + fetch) */}
          <Input
            placeholder="Buscar capotas, estribos, acessórios..."
            className="w-full pl-9"
          />
        </div>

        <nav className="ml-auto flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              Entrar
            </Button>
          </Link>
          <Link href="/checkout">
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
              Carrinho
            </Button>
          </Link>
          <Link href="/vendedor">
            <Button variant="secondary" size="sm">
              Vender
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-navy-100 bg-navy-950 py-10 text-navy-200">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-sm md:grid-cols-4">
        <div>
          <h4 className="mb-3 font-semibold text-white">MercadoCapotas</h4>
          <p className="text-navy-400">
            {/* TODO(preencher depois): texto institucional real */}
            Marketplace de capotas e acessórios automotivos.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Comprar</h4>
          <ul className="space-y-2 text-navy-400">
            <li><Link href="/produtos">Todos os produtos</Link></li>
            <li><Link href="/checkout">Carrinho</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Vender</h4>
          <ul className="space-y-2 text-navy-400">
            <li><Link href="/vendedor">Painel do vendedor</Link></li>
            <li><Link href="/cadastro">Criar conta</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Segurança</h4>
          {/* TODO(preencher depois): política real de proteção ao comprador */}
          <p className="text-navy-400">Pagamento protegido via Mercado Pago.</p>
        </div>
      </div>
    </footer>
  );
}
