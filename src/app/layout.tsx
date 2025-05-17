import Navbar from "@/components/navbar";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: [
      { url: "/logo-black.svg", type: "image/svg+xml" },
      { url: "/logo-white.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
      { url: "/logo-black-16.png", type: "image/png", sizes: "16x16" },
      { url: "/logo-white-16.png", type: "image/png", sizes: "16x16", media: "(prefers-color-scheme: dark)" },
      { url: "/logo-black-32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-white-32.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: dark)" },
      { url: "/logo-black-96.png", type: "image/png", sizes: "96x96" },
      { url: "/logo-white-96.png", type: "image/png", sizes: "96x96", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      { url: "/logo-black-180.png" },
      // Du könntest hier auch eine spezifische weiße Version für den Dark Mode auf Apple-Geräten hinzufügen, falls gewünscht:
      // { url: "/logo-white-180.png", media: "(prefers-color-scheme: dark)" }
    ],
  },
};

// TODO: Add CI/CD pipeline

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
