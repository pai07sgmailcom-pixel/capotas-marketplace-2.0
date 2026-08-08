import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "MercadoCapotas — Capotas e acessórios automotivos",
  description:
    "Marketplace de capotas, estribos, racks e acessórios para picapes e SUVs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-navy-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
