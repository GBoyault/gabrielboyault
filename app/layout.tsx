import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Boyault | Développeur front-end",
  description:
    "Bienvenue sur le portfolio de Gabriel Boyault, développeur front-end react & WordPress nantais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} text-sm/6 md:text-base/6 text-white-light bg-background`}>{children}</body>
    </html>
  );
}
