import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import RootStyleRegistry from "./root-style-registry";

export const metadata: Metadata = {
  title: "Rohin Chopra",
  description:
    "Rohin Chopra is a Software Engineer who excels in architecting ,designing and developing robust and scalable solutions",
  openGraph: {
    title: "Rohin Chopra",
    description:
      "Rohin Chopra is a Software Engineer who excels in architecting ,designing and developing robust and scalable solutions",
  },
  twitter: {
    title: "Rohin Chopra",
    description:
      "Rohin Chopra is a Software Engineer who excels in architecting ,designing and developing robust and scalable solutions",
    images: [
      "https://www.rohinchopra.com/_next/image?url=%2Fhero.png&w=640&q=75",
    ],
    card: "summary_large_image",
  },
};

type Props = {
  children: JSX.Element;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <RootStyleRegistry>{children}</RootStyleRegistry>
        <Footer />

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="ga" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
