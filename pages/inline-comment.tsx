import Footer from "../components/Footer";
import Popover from "../components/Popover";
import Seo from "../components/Seo";
import toast from "react-hot-toast";
import { ChatIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function EmojiPicker() {
  const [v, setV] = useState<string>("");

  return (
    <>
      <Seo
        title="Inline Comment component"
        description="A simple component for picking an emoji from a smaller set of emoji."
      />

      <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 min-h-full">
        <div className="max-w-screen-md mx-auto px-6 py-24 flex flex-col">
          <h1 className="text-3xl font-bold dark:font-semibold dark:tracking-[0.5px]">
            Inline Comment
          </h1>

          <p className="text-lg mt-3 font-medium dark:font-normal">
            A simple component for commenting on something inline.
          </p>

          <div className="w-min mx-auto mt-8 sm:mx-0">
            <Popover
              align="center"
              className="group"
              content={({ close }) => (
                <div className="flex">
                  <input
                    className="py-2.5 px-4 rounded-l-full bg-transparent focus:outline-none w-48 placeholder-neutral-400 dark:placeholder-neutral-500"
                    placeholder="Thoughts?"
                    onChange={(e) => {
                      setV(e.currentTarget.value);
                    }}
                    value={v}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && close) {
                        e.preventDefault();
                        e.stopPropagation();

                        toast("Successfully sent comment");

                        close();

                        setTimeout(() => {
                          setV("");
                        }, 500);
                      }
                    }}
                    type="text"
                    autoFocus
                  />

                  <div className="p-1">
                    <button
                      disabled={!v?.length}
                      title={v ? "Send comment" : "Please enter a comment"}
                      onClick={() => {
                        toast("Successfully sent comment");

                        if (close) {
                          close();
                        }

                        setTimeout(() => {
                          setV("");
                        }, 500);
                      }}
                      className="h-full px-[18px] rounded-full bg-indigo-400 dark:bg-indigo-500 hover:enabled:bg-indigo-500 dark:enabled:hover:bg-indigo-600 transition shadow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <PaperAirplaneIcon className="w-4 text-white" />
                    </button>
                  </div>
                </div>
              )}
            >
              <button className="rounded-md bg-neutral-200 dark:bg-neutral-700 h-12 w-12 flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-neutral-600 transition focus:outline-none">
                <ChatIcon className="w-6" />
              </button>
            </Popover>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
