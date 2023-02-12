import "../styles/globals.css";
import type { AppProps } from "next/app";
import splitbee from "@splitbee/web";
import { Toaster } from "react-hot-toast";
import { Inter, Poppins } from "@next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

splitbee.init();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main id="container" className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />

        <Toaster
          toastOptions={{
            position: "bottom-right",
            style: {
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
      </main>
    </>
  );
}

export default MyApp;
