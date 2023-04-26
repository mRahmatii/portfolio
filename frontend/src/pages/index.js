import Image from "next/image";
import { Inter } from "next/font/google";
import SkillList from "../../components/skills/skill-list";
import PortfolioList from "../../components/portfolio/portfolio-list";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto rounded-lg ">
      <div className="hero text-center">
        <div className="intro my-10">
          <Image
            src="/next.svg"
            width="20"
            height="20"
            alt="twitter"
            className="rounded mx-auto "
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

      <div className="wallpapers  mt-16 sm:mt:20">
        <div className="flex justify-center gap-5">
          <div className="rounded overflow-hidden rotate-2 w-44">
            <Image
              src="/1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="portfolio"
            />
          </div>
          <div className="rounded overflow-hidden -rotate-2 w-44">
            <Image
              src="/1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="portfolio"
            />
          </div>
          <div className="rounded overflow-hidden rotate-2 w-44">
            <Image
              src="/4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="portfolio"
            />
          </div>
          <div className="rounded overflow-hidden rotate-2 w-44">
            <Image
              src="/4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="portfolio"
            />
          </div>
          <div className="rounded overflow-hidden -rotate-2 w-44">
            <Image
              src="/4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="portfolio"
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <SkillList />
      </div>
      <div className="mt-20">
        <PortfolioList />
      </div>
    </div>
  );
}
