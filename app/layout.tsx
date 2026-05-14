import { Cairo, Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { en } from "@/lib/i18n/dictionaries/en";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { getSiteUrl, siteName } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const base = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: base,
  title: {
    default: en.meta.titleDefault,
    template: `%s — ${siteName}`,
  },
  description: en.meta.description,
  keywords: [...en.meta.keywords],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: en.meta.ogLocale,
    url: "/en",
    siteName,
    title: en.meta.titleDefault,
    description: en.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.titleDefault,
    description: en.meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const raw = h.get("x-locale");
  const locale: Locale = raw && isLocale(raw) ? raw : defaultLocale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} min-h-dvh bg-zinc-50 font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-dvh flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
