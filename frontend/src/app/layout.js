import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const displayFont = Epilogue({
  variable: "--font-site-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-site-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.kurosizzlers.in"),

  title: {
    default: "Kuro Sizzlers | Sizzlers, Continental & Multi-Cuisine",
    template: "%s | Kuro Sizzlers",
  },

  description:
    "Kuro Sizzlers brings Continental, Chinese and multi-cuisine flavours together with signature sizzling plates and crafted dishes.",

  alternates: {
    canonical: "https://www.kurosizzlers.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.kurosizzlers.in",
    siteName: "Kuro Sizzlers",
    title: "Kuro Sizzlers | Sizzlers, Continental & Multi-Cuisine",
    description:
      "Continental, Chinese and multi-cuisine flavours crafted with an Indian soul. Experience signature sizzling plates at Kuro Sizzlers.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kuro Sizzlers | Sizzlers, Continental & Multi-Cuisine",
    description:
      "Continental, Chinese and multi-cuisine flavours crafted with an Indian soul.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>

      <body className="min-h-screen flex flex-col bg-wok-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
