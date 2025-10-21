import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "@/styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Ahso Studio | Micro SaaS & AI Web App Specialists",
  description:
    "Modern web app and micro SaaS studio helping SMBs build AI-driven experiences with Supabase and OpenAI Genkit.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-dark text-slate-100">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_55%)]">
          {children}
        </div>
      </body>
    </html>
  );
}
