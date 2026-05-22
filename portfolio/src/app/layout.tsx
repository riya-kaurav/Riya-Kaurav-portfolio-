import type { Metadata } from "next";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: personalInfo.tagline,
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js"],
  openGraph: {
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-overlay antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
