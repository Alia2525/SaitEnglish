import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaitEnglish — тренажери з англійської",
  description:
    "Безкоштовні вправи з граматики, словника та артиклів. Український інтерфейс, рівні A1–B2.",
  openGraph: {
    title: "SaitEnglish",
    description: "Вивчай англійську з інтерактивними тренажерами",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased gradient-bg`}>
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="border-t border-[var(--color-border)] py-8 text-center text-sm text-[var(--color-muted)]">
          SaitEnglish — навчайся без реєстрації
        </footer>
      </body>
    </html>
  );
}
