import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import { ThemeProvider } from "@/components/theme-provider"
import { DockDemo } from "@/components/navbar";
import { TextReveal } from "@/components/magicui/text-reveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App ShopV1 by.nextJs",
  description: "Creat by.Wutthipong Wongwai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
          <SmoothCursor />
          <DockDemo/>
          </ThemeProvider>
          <div className="max-w-6xl mx-auto py-10 px-4">
            <TextReveal>Just Do It. Don't Be a Stupid Man</TextReveal>
          </div>
      </body>
    </html>
  );
}
