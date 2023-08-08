import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hatsui",
  description: "Leitor de mangás online em português ainda em desenvolvimento.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </header>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
