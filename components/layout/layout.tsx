import Head from "next/head";
import { Fragment, PropsWithChildren } from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

type Props = PropsWithChildren<any> & {
  showDesign: boolean;
};

const Layout = ({ children, showDesign }: Props) => (
  <Fragment>
    <Head>
      <title>Rohin Chopra</title>
      <meta name="description" content="Rohin Chopra" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="og:description"
        content="Rohin Chopra is a Software Engineer who excels in architecting ,designing and developing robust and scalable solutions"
      />
      <meta property="og:title" content="Rohin Chopra" />
      <meta property="og:url" content="https://rohinchopra.com/" />
      <meta name="twitter:title" content="Rohin Chopra" />
      <meta
        name="twitter:description"
        content="Rohin Chopra is a Software Engineer who excels in architecting ,designing and developing robust and scalable solutions"
      />
      <meta
        name="twitter:image"
        content="https://www.rohinchopra.com/_next/image?url=%2Fhero.png&w=640&q=75"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
    <Navbar showDesign={showDesign} />
    {children}
    <Footer />
  </Fragment>
);

export { Layout };
