import type { Metadata } from "next";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";


export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: personalInfo.tagline,
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js"],
  // TODO: Add your Open Graph image for social sharing
  openGraph: {
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.tagline,
    type: "website",
    // images: ["/og-image.png"],
  },
  // TODO: Add your Twitter/X handle
  twitter: {
    card: "summary_large_image",
    // creator: "@yourhandle",
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
      
        {children}
      </body>
    </html>
  );
}
