import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Cursor from "@/components/Cursor";
import { SpeedInsights } from "@vercel/speed-insights/next"

const appelGarmondBold = localfont({
  src:[{
    path: "/fonts/AppleGaramond-Bold.ttf",
    weight: "bold",
  }],
  variable: "--font-appel-garmond-bold",
});
const appelGarmond = localfont({
  src:[{
    path: "/fonts/AppleGaramond.ttf",
    weight: "normal",
  }],
  variable: "--font-appel-garmond",
});
const appelGarmondItalic = localfont({
  src:[{
    path: "/fonts/AppleGaramond-Italic.ttf",
    weight: "normal",
  }],
  variable: "--font-appel-garmond-italic",
});
const appelGarmondBoldItalic = localfont({
  src:[{
    path: "/fonts/AppleGaramond-BoldItalic.ttf",
    weight: "bold",
  }],
  variable: "--font-appel-garmond-bold-italic",
});
const appelGarmondLight = localfont({
  src:[{
    path: "/fonts/AppleGaramond-Light.ttf",
    weight: "light",
  }],
  variable: "--font-appel-garmond-light",
});
const appelGarmondLightItalic = localfont({
  src:[{
    path: "/fonts/AppleGaramond-LightItalic.ttf",
    weight: "light",
  }],
  variable: "--font-appel-garmond-light-italic",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boris Mwanga | Full-Stack Developer & Designer",
  description: "Full-stack developer specializing in Ruby, Rails, JavaScript, and React. Creating impactful web applications with a focus on user experience and modern design.",
  keywords: [
    "Boris Mwanga",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Ruby Developer",
    "Rails Developer",
    "JavaScript Developer",
    "React Developer",
    "Web Designer",
    "Brussels",
    "Belgium"
  ],
  authors: [{ name: "Boris Mwanga" }],
  creator: "Boris Mwanga",
  publisher: "Boris Mwanga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Next.js",
  applicationName: "Boris Mwanga Portfolio",
  referrer: "origin-when-cross-origin",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
  alternates: {
    canonical: "https://borismwanga.com", 
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://borismwanga.com", 
    title: "Boris Mwanga | Full-Stack Developer & Designer",
    description: "Full-stack developer specializing in Ruby, Rails, JavaScript, and React. Creating impactful web applications with a focus on user experience and modern design.",
    siteName: "Boris Mwanga Portfolio",
    images: [{
      url: "/og-image.png", 
      width: 1200,
      height: 630,
      alt: "Boris Mwanga - Developer Portfolio"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boris Mwanga | Full-Stack Developer & Designer",
    description: "Full-stack developer specializing in Ruby, Rails, JavaScript, and React. Creating impactful web applications with a focus on user experience and modern design.",
    images: ["/twitter-image.jpg"], 
    creator: "@borismwanga", 
  },
  category: "technology",
  classification: "Portfolio",
  metadataBase: new URL("https://borismwanga.com"), 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}
          antialiased
          ${appelGarmondBold.variable}
          ${appelGarmond.variable}
          ${appelGarmondItalic.variable}
          ${appelGarmondBoldItalic.variable}
          ${appelGarmondLight.variable}
          ${appelGarmondLightItalic.variable}
          ${instrumentSerif.variable}
          w-screen h-dvh bg-[#F2F2F2] dark:bg-[#0d0d0d] 
          `
        }
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <SpeedInsights/>
            <Cursor />
          </ThemeProvider>
        
      </body>
    </html>
  );
}
