import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio by Akmal Hazriq",
  description: "A portfolio created by Akmal Hazriq with some examples taken on internet as the reference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", figtree.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030014] overflow-x-hidden antialiased`}
      >
        <StarsCanvas />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
