import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Boyault | Développeur front-end / React",
  description:
    "Bienvenue sur le portfolio de Gabriel Boyault, développeur front-end react nantais",
  openGraph: {
    title: "Gabriel Boyault | Développeur front-end / React",
    description:
      "Bienvenue sur le portfolio de Gabriel Boyault, développeur front-end react nantais",
    url: "https://www.gabrielboyault.com/",
    siteName: "Gabriel Boyault | Développeur front-end / React",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.className} text-sm/6 md:text-base/6 text-white-light bg-background`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
