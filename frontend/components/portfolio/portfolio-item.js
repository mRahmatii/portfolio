import { Transition } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment } from "react";

export default function PortfolioItem(props) {
  const { viewTransition } = props;

  const isShowing = true;
  if (viewTransition === "undefined") {
    const isShowing = false;
  }
  return (
    <Transition
      show={isShowing}
      appear={true}
      as={Fragment}
      enterFrom="translate-y-10 opacity-0"
      enterTo="translate-y-0 opacity-100"
      enter="transition-all  ease-in-out duration-[2s] delay-[200ms]"
    >
      <div className="rounded overflow-hidden justify-center justify-items-center py-6">
        <div className="relative aspect-[20/10] flex-none">
          <Image
            src="/1.jpg"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover rounded"
            alt="portfolio"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold my-3">title of my project</h1>
        </div>
        <div>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
          </p>
        </div>

        <div className="flex">
          <p class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <LinkIcon width={24} height={24} />
            <span class="ml-2">live</span>
          </p>
          <p class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <LinkIcon width={24} height={24} />
            <span class="ml-2">code</span>
          </p>
        </div>
      </div>
    </Transition>
  );
}
