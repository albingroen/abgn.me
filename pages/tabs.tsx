/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { useState } from "react";
import { Cog8ToothIcon, EyeIcon, UsersIcon } from "@heroicons/react/24/outline";
import {
  EyeIcon as EyeIconSolid,
  Cog8ToothIcon as CogIconSolid,
  UsersIcon as UsersIconSolid,
} from "@heroicons/react/24/solid";
import classNames from "../lib/classNames";

const TABS = [
  {
    label: "Overview",
    icon: EyeIcon,
    iconSolid: EyeIconSolid,
  },
  {
    label: "Members",
    icon: UsersIcon,
    iconSolid: UsersIconSolid,
  },
  {
    label: "Settings",
    icon: Cog8ToothIcon,
    iconSolid: CogIconSolid,
  },
];

export default function Tabs() {
  const [tab, setTab] = useState<string>(TABS[0].label);

  return (
    <>
      <Seo
        title="Tabs component"
        description="A simple component for picking an emoji from a smaller set of emoji."
      />

      <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 min-h-full">
        <div className="max-w-screen-md mx-auto px-6 py-24 flex flex-col">
          <h1 className="text-3xl font-bold dark:font-semibold dark:tracking-[0.5px] mt-20">
            Tabs
          </h1>

          <div className="flex items-end mt-12 border-b border-neutral-300 dark:border-neutral-700 relative">
            {TABS.map((TAB) => {
              const isActive = TAB.label === tab;

              const Icon = isActive ? TAB.iconSolid : TAB.icon;

              return (
                <div className="pb-1.5 w-32" key={TAB.label}>
                  <button
                    type="button"
                    className={classNames(
                      "transition py-3.5 w-full hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md flex items-center gap-2.5 justify-center"
                    )}
                    onClick={() => {
                      setTab(TAB.label);
                    }}
                  >
                    <span className="relative">
                      <Icon
                        className={classNames(
                          "w-4 transition",
                          isActive ? "opacity-100" : "opacity-50"
                        )}
                      />
                    </span>

                    <span className="leading-none">{TAB.label}</span>
                  </button>
                </div>
              );
            })}

            <div
              className="h-px bg-neutral-900 dark:bg-white w-32 absolute bottom-0 transition"
              style={{
                transform: `translateX(${
                  TABS.findIndex((TAB) => TAB.label === tab) * 128
                }px)`,
              }}
            />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
