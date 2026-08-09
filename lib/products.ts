import { supabase } from "@/lib/supabase";
import type { Product } from "@/lib/data";

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", "aprovado")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar produtos:", error.message);
    return [];
  }
  return data as Product[];
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Erro ao buscar produto:", error.message);
    return null;
  }
  return data as Product;
}

export interface NewProductInput {
  title: string;
  category: string;
  condition: "novo" | "usado";
  vehicleCompat: string;
  price: number;
  description: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function createProduct(input: NewProductInput) {
  const { data: userData } = await supabase.auth.getUser();
  const sellerId = userData?.user?.id;

  if (!sellerId) {
    return { error: "Você precisa estar logado para anunciar um produto." };
  }

  const slug = `${slugify(input.title)}-${Date.now().toString(36)}`;

  const { error } = await supabase.from("products").insert({
    seller_id: sellerId,
    title: input.title,
    slug,
    category: input.category,
    price: input.price,
    description: input.description,
    condition: input.condition,
    vehicle_compat: input.vehicleCompat,
    status: "pendente",
  });

  if (error) {
    console.error("Erro ao criar produto:", error.message);
    return { error: error.message };
  }

  return { error: null, slug };
}
