import Head from "next/head";
import { Fragment, PropsWithChildren } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = PropsWithChildren<any>;

const Layout = ({ children }: Props) => (
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
      <meta name="twitter:title" content="Frontend Dev Blog" />
      <meta
        name="twitter:description"
        content="Rohin Chopra is a Software Engineer who excels in architecting ,designing and developing robust and scalable solutions"
      />
      <meta
        name="twitter:image"
        content="https://www.rohinchopra.com/_next/image?url=%2Fhero.png&w=640&q=75"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;
