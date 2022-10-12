import Script from "next/script";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Fragment>
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
      <Layout showDesign={Component.requiresNavDesign}>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
