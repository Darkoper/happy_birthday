import type { Metadata } from "next";
import { Great_Vibes, Italiana, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cyrano",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "Happy Birthday, My Love ❤️",
  description: "A heartfelt love letter for the most beautiful girl in my life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${italiana.variable} ${cormorantGaramond.variable}`}
    >
      <body
        className="antialiased selection:bg-rose-200 selection:text-rose-900"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
