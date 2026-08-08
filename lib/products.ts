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
