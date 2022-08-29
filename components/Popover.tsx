import React, {
  Fragment,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { Popover as PopoverPrimitive, Transition } from "@headlessui/react";
import classNames from "../lib/classNames";

const { Button, Panel } = PopoverPrimitive;

type PopoverAlignment = "left" | "center" | "right" | "topLeft";

type PopoverProps = {
  content: (props: {
    open: boolean;
    close?: () => void;
  }) => ReactElement<any, string>;
  containerClassName?: string;
  align?: PopoverAlignment;
  withoutWrapper?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

const getPopupPanelStyles = ({
  align = "left",
}: {
  align?: PopoverAlignment;
}) => {
  const styles = {
    base: "absolute bg-gradient-to-b bg-white dark:bg-neutral-700 rounded-full shadow-lg overflow-hidden z-10",
    alignments: {
      center: "transform left-1/2 -translate-x-1/2 mt-2",
      right: "right-0 mt-2",
      left: "left-0 mt-2",
      topLeft: "left-0 bottom-[140%] mb-2",
    },
  };

  return classNames(styles.base, styles.alignments[align]);
};

const Popover = ({
  containerClassName,
  align = "left",
  children,
  content,
  ...rest
}: PopoverProps) => {
  return (
    <PopoverPrimitive
      className={classNames("relative", containerClassName)}
      as="div"
    >
      <Button as={Fragment}>{children}</Button>

      <Transition
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-neutral-900 bg-opacity-40 z-10" />
      </Transition>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Panel
          {...rest}
          className={classNames(getPopupPanelStyles({ align }), rest.className)}
        >
          {content}
        </Panel>
      </Transition>
    </PopoverPrimitive>
  );
};

export default Popover;
