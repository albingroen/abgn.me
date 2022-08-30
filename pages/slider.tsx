import * as Slider from "@radix-ui/react-slider";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import classNames from "../lib/classNames";
import { UserGroupIcon, UserIcon, UsersIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function EmojiPicker() {
  const [v, setV] = useState<number>(1.2);

  return (
    <>
      <Seo
        title="Slider component"
        description="A slider component with micro-interactions."
      />

      <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 min-h-full">
        <div className="max-w-screen-md mx-auto px-6 py-24 flex flex-col">
          <h1 className="text-3xl font-bold dark:font-semibold dark:tracking-[0.5px]">
            Slider
          </h1>

          <p className="text-lg mt-3 font-medium dark:font-normal">
            A slider component with micro-interactions.
          </p>

          <div className="mt-8 flex flex-col-reverse sm:flex-col items-center gap-5 w-[250px] sm:w-[350px]">
            <div className="flex items-center gap-5 w-full">
              <Slider.Root
                step={0.01}
                onValueChange={(newValues) => {
                  const [newValue] = newValues;

                  setV(newValue);
                }}
                min={1}
                max={3}
                value={[v]}
                className="h-[20px] w-full relative flex items-center"
              >
                <Slider.Track className="bg-neutral-200 dark:bg-neutral-900 w-full flex-1 rounded-full relative h-[3px]">
                  <Slider.Range className="absolute h-full rounded-full bg-blue-500 dark:bg-white" />
                </Slider.Track>
                <Slider.Thumb className="h-5 w-5 rounded-full bg-blue-500 dark:bg-white block focus:outline-none focus-visible:ring-2 ring-blue-500 ring-offset-1" />
              </Slider.Root>

              <p className="flex items-center gap-3 w-[50px]">
                <span className="font-medium">{Math.round(v)}</span>{" "}
                <span className="opacity-60">
                  (${Math.round(v) * 7.5}/month)
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center w-full relative transform -translate-x-8">
              <UserIcon
                className={classNames(
                  "w-7 absolute transition transform duration-300 text-yellow-600 dark:text-yellow-500",
                  v >= 1 && v < 1.5
                    ? "opacity-100 scale-100"
                    : "opacity-0 rotate-90"
                )}
              />

              <UsersIcon
                className={classNames(
                  "w-7 absolute transition transform duration-300 text-indigo-500 dark:text-indigo-400",
                  v >= 1.5 && v < 2.5
                    ? "opacity-100 scale-100"
                    : "opacity-0 rotate-90"
                )}
              />

              <UserGroupIcon
                className={classNames(
                  "w-7 absolute transition transform duration-300 text-green-600 dark:text-green-500",
                  v >= 2.5 ? "opacity-100 scale-100" : "opacity-0 rotate-90"
                )}
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
