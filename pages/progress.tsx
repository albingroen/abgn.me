/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import classNames from "../lib/classNames";
import { useState } from "react";

export default function Progress() {
  const [v, setV] = useState<number>(40);

  return (
    <>
      <Seo
        title="Progress component"
        description="A simple component for picking an emoji from a smaller set of emoji."
      />

      <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 min-h-full">
        <div className="max-w-screen-md mx-auto px-6 py-24 flex flex-col">
          <h1 className="text-3xl font-bold dark:font-semibold dark:tracking-[0.5px] mt-20">
            Progress
          </h1>

          <div className="flex flex-col gap-4 mt-12 sm:w-1/2">
            <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-400">
              <p className="font-medium">Launching</p>
              <p className="font-medium">{v}%</p>
            </div>

            <div className="rounded-full overflow-hidden flex gap-0.5">
              {Array.from(Array(10).keys()).map((n) => {
                const isFilled = (n + 1) * 10 <= v;

                return (
                  <div
                    key={n}
                    className={classNames(
                      "flex-1 h-2 transition",
                      isFilled
                        ? "bg-green-500 dark:bg-lime-500"
                        : "bg-neutral-300 dark:bg-neutral-600"
                    )}
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-2 !mt-4">
              <button
                onClick={() => {
                  if (v > 0) {
                    setV(v - 10);
                  }
                }}
                disabled={v <= 0}
                className="bg-white dark:bg-neutral-700 rounded-lg py-2 px-3 5 font-medium text-sm shadow border border-neutral-200 dark:border-neutral-600 enabled:hover:bg-neutral-50 dark:enabled:hover:bg-neutral-600 transition enabled:hover:border-neutral-300 dark:enabled:hover:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 enabled:active:bg-neutral-100 dark:enabled:active:bg-neutral-500 enabled:active:border-neutral-400 dark:enabled:active:border-neutral-400"
              >
                Less
              </button>
              <button
                onClick={() => {
                  if (v < 100) {
                    setV(v + 10);
                  }
                }}
                disabled={v >= 100}
                className="bg-white dark:bg-neutral-700 rounded-lg py-2 px-3 5 font-medium text-sm shadow border border-neutral-200 dark:border-neutral-600 enabled:hover:bg-neutral-50 dark:enabled:hover:bg-neutral-600 transition enabled:hover:border-neutral-300 dark:enabled:hover:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 enabled:active:bg-neutral-100 dark:enabled:active:bg-neutral-500 enabled:active:border-neutral-400 dark:enabled:active:border-neutral-400"
              >
                More
              </button>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
