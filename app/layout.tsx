import type { Metadata } from "next";
import Script from "next/script";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { Analytics } from "@vercel/analytics/next";
import AiAssistant from "./components/AiAssistant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "Siddhant V Patil",
  description:
    "Product Designer & Creative Technologist specializing in early-stage innovation and complex problem spaces. 6 years across design & tech",
  keywords: [
    "design",
    "creative technology",
    "UX design",
    "innovation",
    "Germany",
    "open to work",
  ],
  authors: [{ name: "Siddhant V Patil" }],
  creator: "Siddhant V Patil",
  publisher: "Siddhant V Patil",
  robots: "index, follow",
  openGraph: {
    title: "Siddhant V Patil - Product Design • Strategy • Code",
    description:
      "Specializing in early-stage innovation and complex problem spaces. 6 years across design & tech",
    url: "https://www.siddhantpatil.com",
    siteName: "Siddhant V Patil Portfolio",
    images: [
      {
        url: "https://www.siddhantpatil.com/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Siddhant V Patil - Product Design • Strategy • Code",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant V Patil - Product Design • Strategy • Code",
    description:
      "Specializing in early-stage innovation and complex problem spaces. 6 years across design & tech",
    images: ["https://www.siddhantpatil.com/preview-image.png"],
    creator: "@sidomatic11",
  },
  other: {
    "theme-color": "#fbbf24", // Amber color to match your brand
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
        className={`${inter.className} ${inter.variable} ${ebGaramond.variable} w-full overflow-x-hidden`}
      >
        <LoadingScreen />
        <div
          id="home"
          className="relative mx-auto min-h-screen max-w-5xl px-8 text-gray-700 sm:pt-16 lg:w-[calc(100%-4rem)] lg:px-0"
        >
          {children}
        </div>

        <svg className="hidden">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.45"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
        </svg>
        <AiAssistant />
        <Footer />
        <Analytics />
        <Script
          src="https://t.contentsquare.net/uxa/d3dacc29166cc.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
