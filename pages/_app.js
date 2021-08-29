import { ProvideTheme } from "../context/ThemeContext";
import Head from "next/head";
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Natural Freedom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProvideTheme>
        <Component {...pageProps} />
      </ProvideTheme>
    </>
  );
}

export default MyApp
