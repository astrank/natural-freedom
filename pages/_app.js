import { ProvideTheme } from "../context/ThemeContext";
import Head from "next/head";
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { IdProvider } from "@radix-ui/react-id";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <>
      <IdProvider>
        <Head>
          <title>Natural Freedom</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ProvideTheme>
          {isMounted &&
            <Component {...pageProps} />
          }
        </ProvideTheme>
      </IdProvider>
    </>
  );
}

export default MyApp
