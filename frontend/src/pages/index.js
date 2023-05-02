import Image from "next/image";
import { Inter } from "next/font/google";
import SkillList from "../../components/skills/skill-list";
import PortfolioList from "../../components/portfolio/portfolio-list";

export default function Home() {
  return (
    <div className="mx-auto rounded-lg ">
      <div className="hero mt-20 text-center">
        <div className="intro my-10">
          <Image
            src="/marmar.jpg"
            width="100"
            height="100"
            alt="twitter"
            className="mx-auto rounded-full "
          />
          <h1 className="text-3xl font-bold mt-6">
            Software engineer, Fullstack Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Im Marzie, a full-stack web developer, making great stuff since
            2016. currently working as freelance developer.
          </p>
        </div>
        <div className="social_media mt-6">
          <div className=" inline-flex gap-6">
            <span>
              <Image src="/twitter.svg" width="20" height="20" alt="twitter" />
            </span>
            <span>
              <Image
                src="/instagram.svg"
                width="20"
                height="20"
                alt="twitter"
              />
            </span>
            <span>
              <Image src="/github.svg" width="20" height="20" alt="twitter" />
            </span>
            <span>
              <Image src="/linkedin.svg" width="20" height="20" alt="twitter" />
            </span>
          </div>
        </div>
      </div>

      <div className="wallpapers  mt-16 sm:mt:20 w-screen ml-[calc(-1*((100vw-100%)/2))]">
        <div className="flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl  sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src="/1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
              alt="portfolio"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl -rotate-2">
            <Image
              src="/1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
              alt="portfolio"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src="/4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
              alt="portfolio"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl  sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src="/4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
              alt="portfolio"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl  sm:w-72 sm:rounded-2xl -rotate-2">
            <Image
              src="/4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
              alt="portfolio"
            />
          </div>
        </div>
      </div>
      <div className="skills mt-20 ">
        <SkillList />
      </div>
      <div className="mt-20 ">
        <PortfolioList />
      </div>
    </div>
  );
}
