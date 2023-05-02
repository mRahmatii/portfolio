import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

export default function SkillItem(props) {
  const { title, viewTransition } = props;

  const isShowing = true;
  if (viewTransition === "undefined") {
    const isShowing = false;
  }
  return (
    <div className="reletive">
      <h1 className="text-l font-bold my-4">{title}</h1>
      <div className="">
        <span>git</span>

        <div className="bg-zinc-200 relative h-[10px] w-full rounded-2xl">
          <Transition
            show={isShowing}
            appear={true}
            as={Fragment}
            enterFrom="w-0"
            enterTo="w-full"
            enter="transition-all  ease-in-out duration-[2s] delay-[100ms]"
          >
            <div className="bg-teal-400 absolute top-0 left-0 h-full w-1/2 rounded-2xl">
              <span className="bg-teal-800 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span className="bg-teal-800 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                50%
              </span>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}
