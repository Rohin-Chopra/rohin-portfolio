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
    </Head>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;
