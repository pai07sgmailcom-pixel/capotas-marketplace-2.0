// lib/data.ts
// Dados de exemplo (mock) para desenvolvimento da interface.
// TODO(preencher depois): substituir por consultas reais ao Supabase.

export type UserRole = "admin" | "fabricante" | "loja" | "particular" | "comprador";

export interface Seller {
  id: string;
  name: string;
  role: UserRole;
  avatarUrl: string; // TODO(preencher depois): usar avatar real do Supabase Storage
  rating: number; // 0-5
  city: string;
  verified: boolean;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: Category;
  price: number; // em centavos
  sellerId: string;
  images: string[]; // TODO(preencher depois): URLs reais do Supabase Storage
  description: string;
  condition: "novo" | "usado";
  vehicleCompat: string; // ex: "Fiat Toro 2017-2023"
  createdAt: string;
}

export type Category =
  | "capotas"
  | "estribos"
  | "rack-de-teto"
  | "acessorios-internos"
  | "iluminacao"
  | "rodas-e-pneus"
  | "som-e-multimidia"
  | "outros-acessorios";

export const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: "capotas", label: "Capotas", icon: "PackageOpen" },
  { id: "estribos", label: "Estribos", icon: "ArrowUpDown" },
  { id: "rack-de-teto", label: "Rack de Teto", icon: "Layers" },
  { id: "acessorios-internos", label: "Acessórios Internos", icon: "Armchair" },
  { id: "iluminacao", label: "Iluminação", icon: "Lightbulb" },
  { id: "rodas-e-pneus", label: "Rodas e Pneus", icon: "CircleDot" },
  { id: "som-e-multimidia", label: "Som e Multimídia", icon: "Speaker" },
  { id: "outros-acessorios", label: "Outros Acessórios", icon: "Wrench" },
];

// TODO(preencher depois): substituir por fetch em app/vendedores ou Supabase
export const MOCK_SELLERS: Seller[] = [
  {
    id: "seller-1",
    name: "Capotas Sul Ltda",
    role: "fabricante",
    avatarUrl: "/placeholder-avatar.png",
    rating: 4.8,
    city: "Caxias do Sul, RS",
    verified: true,
  },
  {
    id: "seller-2",
    name: "João Acessórios 4x4",
    role: "particular",
    avatarUrl: "/placeholder-avatar.png",
    rating: 4.5,
    city: "Curitiba, PR",
    verified: false,
  },
  {
    id: "seller-3",
    name: "Loja Off-Road Center",
    role: "loja",
    avatarUrl: "/placeholder-avatar.png",
    rating: 4.9,
    city: "São Paulo, SP",
    verified: true,
  },
];

// TODO(preencher depois): substituir por fetch em app/produtos ou Supabase
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    title: "Capota Marítima Fiat Toro",
    slug: "capota-maritima-fiat-toro",
    category: "capotas",
    price: 289900,
    sellerId: "seller-1",
    images: ["/placeholder-product.png"],
    description: "Capota marítima em fibra, instalação inclusa. TODO: preencher descrição real.",
    condition: "novo",
    vehicleCompat: "Fiat Toro 2017-2023",
    createdAt: "2026-07-01T12:00:00.000Z",
  },
  {
    id: "prod-2",
    title: "Estribo Lateral Amarok",
    slug: "estribo-lateral-amarok",
    category: "estribos",
    price: 129900,
    sellerId: "seller-3",
    images: ["/placeholder-product.png"],
    description: "Estribo em alumínio, resistente a até 150kg. TODO: preencher descrição real.",
    condition: "novo",
    vehicleCompat: "VW Amarok 2016-2024",
    createdAt: "2026-07-10T12:00:00.000Z",
  },
  {
    id: "prod-3",
    title: "Rack de Teto Universal",
    slug: "rack-de-teto-universal",
    category: "rack-de-teto",
    price: 59900,
    sellerId: "seller-2",
    images: ["/placeholder-product.png"],
    description: "Rack usado, bom estado, poucos meses de uso. TODO: preencher descrição real.",
    condition: "usado",
    vehicleCompat: "Universal (barras longitudinais)",
    createdAt: "2026-06-20T12:00:00.000Z",
  },
];

export function formatPriceBRL(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function getSellerById(id: string): Seller | undefined {
  return MOCK_SELLERS.find((s) => s.id === id);
}

export function getProductsByCategory(category: Category): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.category === category);
}
