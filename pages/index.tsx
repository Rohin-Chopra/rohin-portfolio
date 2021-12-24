import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rohin Chopra</title>
        <meta name="description" content="Rohin Chopra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold">Hello, from Rohin Chopra</h1>
    </div>
  );
};

export default Home;
