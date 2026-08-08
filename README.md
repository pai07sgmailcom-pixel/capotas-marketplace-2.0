# MercadoCapotas (mercado-capotas-a01)

Estrutura de páginas e componentes do marketplace, pronta para você preencher
as integrações reais. Todos os pontos que dependem de backend/dados reais
estão marcados com `TODO(preencher depois)` no código.

## O que já está pronto (com dados de exemplo)

- `app/page.tsx` — Home institucional (hero, categorias, destaques, confiança)
- `app/produtos/page.tsx` — Catálogo com filtros (visual pronto, sem lógica de filtro real)
- `app/produtos/[id]/page.tsx` — Detalhe de produto
- `app/checkout/page.tsx` — Resumo, escolha de entrega e pagamento (UI funcional, sem processar pagamento de verdade)
- `app/login/page.tsx` e `app/cadastro/page.tsx` — Formulários de autenticação
- `app/vendedor/page.tsx`, `/vendedor/novo-produto`, `/vendedor/mercadopago/conectar` — Painel do vendedor
- `app/admin/page.tsx` — Painel administrativo (moderação, usuários, comissão)
- `components/ui/*` — Button, Card, Field/Input/Select/Textarea reutilizáveis
- `lib/data.ts` — Dados mockados (produtos, categorias, vendedores)
- `middleware.ts` — Esqueleto de proteção da rota `/admin` (comentado, pronto pra ligar ao Supabase)

## Principais TODOs para deixar em produção

1. **Supabase**: criar projeto, tabelas (`profiles`, `products`, `orders`...),
   preencher `.env.local` a partir de `.env.example`, trocar `MOCK_PRODUCTS`/
   `MOCK_SELLERS` em `lib/data.ts` por queries reais.
2. **Auth**: ligar `app/login` e `app/cadastro` ao Supabase Auth
   (`signInWithPassword`, `signInWithOAuth("google")`, `signUp`).
3. **Upload de imagens**: trocar os `<input type="file">` por upload real
   para o Supabase Storage (produto e avatar).
4. **Mercado Pago**: implementar o fluxo OAuth em
   `/vendedor/mercadopago/conectar` e o processamento de pagamento (com
   split) em `app/checkout`.
5. **Middleware admin**: descomentar e completar a checagem de `role` em
   `middleware.ts`.
6. **Frete**: integrar cálculo real de frete (Correios/transportadora) no
   checkout.

## Rodando localmente

```bash
npm install
npm run dev
```

Este projeto usa Next.js 16, React 19 e Tailwind CSS 4 — a paleta de cores
(navy + laranja) está definida em `app/globals.css`.
