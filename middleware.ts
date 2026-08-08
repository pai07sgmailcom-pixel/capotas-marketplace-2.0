import { NextResponse, type NextRequest } from "next/server";

// TODO(preencher depois): implementar checagem real com @supabase/ssr:
// 1. Ler a sessão do usuário a partir dos cookies da requisição.
// 2. Buscar o profile correspondente (tabela `profiles`, coluna `role`).
// 3. Se role !== "admin", redirecionar para "/" (ou para "/login").
//
// Exemplo de esqueleto (descomentar e completar com as env vars do projeto):
//
// import { createServerClient } from "@supabase/ssr";
//
// export async function middleware(request: NextRequest) {
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     { cookies: { get: (name) => request.cookies.get(name)?.value } }
//   );
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return NextResponse.redirect(new URL("/login", request.url));
//
//   const { data: profile } = await supabase
//     .from("profiles")
//     .select("role")
//     .eq("id", user.id)
//     .single();
//
//   if (profile?.role !== "admin") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//
//   return NextResponse.next();
// }

export function middleware(request: NextRequest) {
  // Placeholder: deixa passar por enquanto. Implementar checagem acima
  // antes de considerar /admin protegido em produção.
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
