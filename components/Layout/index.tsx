import Head from "next/head";
import { Fragment, PropsWithChildren } from "react";
import Navbar from "../Navbar";

type Props = PropsWithChildren<any>;

const Layout = ({ children }: Props) => (
  <Fragment>
    <Head>
      <title>Rohin Chopra</title>
      <meta name="description" content="Rohin Chopra" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    {children}
  </Fragment>
);

export default Layout;
