import { ProvideTheme } from "../context/ThemeContext";
import Head from "next/head";
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { IdProvider } from "@radix-ui/react-id";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <IdProvider>
        <Head>
          <title>Natural Freedom</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ProvideTheme>
          <Component {...pageProps} />
        </ProvideTheme>
      </IdProvider>
    </>
  );
}

export default MyApp
