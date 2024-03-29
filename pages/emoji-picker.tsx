/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Popover from "../components/Popover";
import Seo from "../components/Seo";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function EmojiPicker() {
  const [s, setS] = useState<string>();

  return (
    <>
      <Seo
        title="Emoji Picker component"
        description="A simple component for picking an emoji from a smaller set of emoji."
      />

      <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 min-h-full">
        <div className="max-w-screen-md mx-auto px-6 py-24 flex flex-col">
          <h1 className="text-3xl font-bold dark:font-semibold dark:tracking-[0.5px] mt-20">
            Emoji Picker
          </h1>

          <p className="text-lg mt-3 font-medium dark:font-normal">
            A simple component for picking an emoji from a smaller set of emoji.
          </p>

          <div className="w-min mx-auto mt-8 sm:mx-0">
            <Popover
              align="center"
              className="group px-3"
              content={({ close }) => (
                <div className="flex items-center">
                  {[
                    { symbol: "😀", title: "Smiling face" },
                    { symbol: "👍", title: "Thumbs up" },
                    { symbol: "👋", title: "Waiving hand" },
                    { symbol: "😱", title: "Shocked face" },
                  ].map((emoji) => (
                    <button
                      key={emoji.title}
                      className="group-hover:opacity-50 hover:!opacity-100 focus:!opacity-100 text-2xl font-medium px-1.5 py-2.5 text-white origin-center transform hover:scale-125 focus:scale-125 hover:drop-shadow-lg focus:drop-shadow-lg transition focus:outline-none"
                      title={emoji.title}
                      onClick={() => {
                        setS(emoji.symbol);

                        if (close) {
                          close();
                        }
                      }}
                    >
                      {emoji.symbol}
                    </button>
                  ))}
                </div>
              )}
            >
              <button className="rounded-md bg-neutral-200 dark:bg-neutral-700 h-12 w-12 flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-neutral-600 transition focus:outline-none">
                {s ? (
                  <span className="text-2xl">{s}</span>
                ) : (
                  <PlusIcon className="w-6" />
                )}
              </button>
            </Popover>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
