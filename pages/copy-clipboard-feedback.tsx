/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import toast from "react-hot-toast";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Link from "next/link";

const symbol0 = "⌘";
const symbol1 = "⌥";
const symbol2 = "↑";
const symbol3 = "¼";
const symbol4 = "€";

const buttonStyles =
  "cursor-copy bg-neutral-200 dark:bg-neutral-700 rounded h-10 w-10 flex items-center justify-center transition";

function copy(c: string, toastSrOnly: boolean = true) {
  toast("Copied symbol to clipboard");

  return navigator.clipboard.writeText(c);
}

export default function Home() {
  return (
    <>
      <Seo
        title="Copy to clipboard feedback"
        description="Some examples of feedback a user could get when
          clicking a button to copy some sort of symbol or text."
      />

      <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 min-h-full">
        <div className="max-w-screen-md mx-auto px-6 py-24 flex flex-col">
          <h1 className="text-3xl font-bold dark:font-semibold dark:tracking-[0.5px] mt-20">
            Clipboard feedback
          </h1>

          <h2 className="mt-8 text-xl font-bold dark:font-semibold">
            Choose a symbol
          </h2>
          <p className="text-lg mt-3 font-medium dark:font-normal">
            These here are some examples of feedback a user could get when
            clicking a button to copy some sort of symbol or text. Click a
            symbol below to copy it to your clipboard.
          </p>

          <div className="mt-7 flex gap-3 flex-wrap p-4 bg-white dark:bg-neutral-900 shadow-sm rounded">
            <ButtonZero />
            <ButtonOne />
            <ButtonTwo />
            <ButtonThree />
            <ButtonFour />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

function ButtonZero() {
  return (
    <button
      aria-label="Copy command symbol"
      onClick={async () => {
        copy(symbol0, false);
      }}
      className={`text-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 ${buttonStyles}`}
    >
      {symbol0}
    </button>
  );
}

function ButtonOne() {
  const [animating, setAnimating] = useState<boolean>(false);

  const d = 85;
  const t = 3;

  const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, d));
  };

  return (
    <button
      aria-label="Copy command symbol"
      onClick={async () => {
        copy(symbol1);

        for (let i = 0; i < t; i++) {
          setAnimating(true);

          await sleep();

          setAnimating(false);

          await sleep();
        }
      }}
      className={`text-lg ${
        animating
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "hover:bg-neutral-300 dark:hover:bg-neutral-600"
      } ${buttonStyles}`}
    >
      {symbol1}
    </button>
  );
}

function ButtonTwo() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <button
      aria-label="Copy command symbol"
      onClick={async () => {
        copy(symbol2);

        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 4000);
      }}
      className={`relative hover:bg-neutral-300 dark:hover:bg-neutral-600 ${buttonStyles}`}
    >
      <CheckIcon
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 transition ${
          isCopied ? "opacity-100" : "opacity-0"
        }`}
      />

      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl transition ${
          isCopied ? "opacity-0" : "opacity-100"
        }`}
      >
        {symbol2}
      </span>
    </button>
  );
}

function ButtonThree() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <button
      aria-label="Copy command symbol"
      onClick={async () => {
        copy(symbol3);

        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 4000);
      }}
      className={`relative ${
        isCopied
          ? "bg-green-500 dark:bg-green-600 text-white"
          : "hover:bg-neutral-300 dark:hover:bg-neutral-600"
      } ${buttonStyles}`}
    >
      <CheckCircleIcon
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 transition ${
          isCopied ? "opacity-100" : "opacity-0"
        }`}
      />

      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl transition ${
          isCopied ? "opacity-0" : "opacity-100"
        }`}
      >
        {symbol3}
      </span>
    </button>
  );
}

function ButtonFour() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <button
      aria-label="Copy command symbol"
      onClick={async () => {
        copy(symbol4);

        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 4000);
      }}
      className={`relative hover:bg-neutral-300 dark:hover:bg-neutral-600 ${buttonStyles}`}
    >
      <span className="text-xl">{symbol4}</span>

      <div
        className={`absolute h-4 w-4 rounded-full text-white bg-green-500 dark:bg-green-600 top-0 right-0 transform translate-x-1.5 -translate-y-1.5 flex items-center justify-center transition origin-center ${
          isCopied ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <CheckIcon className="w-2.5 h-2.5" />
      </div>
    </button>
  );
}
