import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sensualissima — Lingerie & Íntimos Premium",
    template: "%s | Sensualissima",
  },
  description:
    "Sensualissima. Não é o que você veste. É o que você sente. Lingerie, bodywear e produtos íntimos premium para a mulher que se celebra.",
  keywords: ["lingerie", "íntimos", "bodywear", "sensualidade", "premium", "brasil"],
  authors: [{ name: "Sensualissima" }],
  creator: "Umoja Infinity",
  metadataBase: new URL("https://sensualissima.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sensualissima.com.br",
    siteName: "Sensualissima",
    title: "Sensualissima — Lingerie & Íntimos Premium",
    description: "Não é o que você veste. É o que você sente.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensualissima",
    description: "Não é o que você veste. É o que você sente.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-rosa-50 text-carvao antialiased">
        {children}
      </body>
    </html>
  );
}
