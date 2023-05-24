import { useState } from "react";
import Seo from "../components/Seo";
import classNames from "../lib/classNames";

export default function Steps() {
  const [step, setStep] = useState<number>(0);

  return (
    <>
      <Seo
        title="Steps component"
        description="A steps component with micro-interactions."
      />

      <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 min-h-full">
        <div className="max-w-screen-md mx-auto px-6 py-24 flex flex-col">
          <h1 className="text-3xl font-bold dark:font-semibold dark:tracking-[0.5px] mt-20">
            Steps
          </h1>

          <p className="text-lg mt-3 font-medium dark:font-normal">
            A steps component with micro-interactions.
          </p>

          <div className="mt-8 flex">
            {[0, 1, 2, 3, 4].map((_) => {
              const isActive = _ === step;

              return (
                <button
                  key={_}
                  className="pr-3 py-3 group"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                  onClick={() => {
                    setStep(_);
                  }}
                >
                  <div
                    className={classNames(
                      "h-1.5 rounded-full transition-all duration-200 ease-in",
                      isActive
                        ? "bg-indigo-500 w-32"
                        : "bg-neutral-200 group-hover:bg-neutral-400 w-14"
                    )}
                  ></div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
