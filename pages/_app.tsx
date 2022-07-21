import "../styles/globals.css";
import type { AppProps } from "next/app";
import splitbee from "@splitbee/web";

splitbee.init();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
