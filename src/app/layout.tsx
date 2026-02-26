import "~~/styles/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clx } from "~~/utils";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  metadataBase: new URL("https://umangverma.com"),
  title: {
    default: "Umang Verma",
    template: "Umang Verma",
  },
  description: "Building fun products!",
  openGraph: {
    title: "Umang Verma",
    description: "Building fun products!",
    url: "https://umangverma.com",
    siteName: "Umang Verma",
    locale: "en_US",
    type: "website",
    images: ["https://umangverma.com/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Umang Verma",
    card: "summary_large_image",
    creator: "@umang_veerma",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={clx(
          "bg-white text-gray-900",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <body className="mx-auto max-w-2xl px-6 py-12 antialiased">
          <main className="flex min-w-0 flex-col">
            {children}
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
