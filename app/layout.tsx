import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Shadow - Box, Drop & Text Shadows",
  description:
    "Shadow is a collection of modern box, drop, and text shadows for CSS and Tailwind. Copy clean, layered, and 3D shadow styles for your UI projects.",
  keywords: [
    "box shadow",
    "drop shadow",
    "text shadow",
    "CSS shadows",
    "Tailwind shadows",
    "shadow",
    "shadow me",
    "UI shadows",
  ],
  openGraph: {
    title: "Shadow - Box, Drop & Text Shadows",
    description:
      "A collection of modern box, drop, and text shadows for CSS and Tailwind.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
