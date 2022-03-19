import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: any) {
  if (!Component.requiresLayout) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
