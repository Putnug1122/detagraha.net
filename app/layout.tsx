import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
  applicationName: "detagraha.net",
  authors: { name: siteConfig.username },
  creator: siteConfig.username,
  publisher: siteConfig.username,
  generator: "Next.js",
  keywords: [
    "detagraha",
    "detanugraha",
    "putranugraha",
    "gedeputranugraha",
    "Putra Nugraha",
    "Gede Putra Nugraha",
    "Deta Nugraha",
    "deta",
    "det",
    "detagraha.net",
  ],
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  icons: {
    icon: "/avatar.png",
  },
  appleWebApp: {
    title: "detagraha.net",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  title: {
    default: "Putra Nugraha",
    template: "%s | Putra Nugraha",
  },
  description:
    "A software engineer and student at Polstat STIS. Computer provision by day, building random stuff by night",
  openGraph: {
    url: siteConfig.url,
    title: "Putra Nugraha",
    description:
      "A software engineer and student at Polstat STIS. Computer provision by day, building random stuff by night",
    images: [
      {
        url: "https://og.sznm.dev/api/generate?heading=detagraha&text=https://detagraha.net", // to be replaced with own generator
        alt: "detagraha.net og-image",
      },
    ],
    siteName: "detagraha",
  },
  twitter: {
    creator: "@detactl",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased bg-[#fafafa] dark:bg-[#0a0a0a]`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navigation />
            <div className="flex flex-col min-h-screen justify-between space-y-4 container">
              {children}
              <Footer />
              <Toaster />
            </div>
          </ThemeProvider>
          <script
            async
            src="https://umami.detagraha.net/script.js"
            data-website-id="20a54dd8-4289-4dfe-bf5d-15496cd2f5d0"
          ></script>
        </body>
      </html>
    </ClerkProvider>
  );
}
