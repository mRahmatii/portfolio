import "@/styles/globals.css";
import Layout from "../../components/layout/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>App</title>
        <meta name="description" content="genericcc one" />
        <meta
          name="viewreport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
