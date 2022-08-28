import "../styles/globals.css";
import type { AppProps } from "next/app";
import splitbee from "@splitbee/web";
import { Toaster } from "react-hot-toast";

splitbee.init();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          position: "bottom-right",
          style: {
            fontFamily: "InterDisplay",
            background: "#006aff",
            letterSpacing: 0.5,
            paddingInline: 2,
            paddingBlock: 6,
            borderRadius: 6,
            fontWeight: 500,
            color: "white",
            fontSize: 14,
          },
        }}
      />
    </>
  );
}

export default MyApp;
