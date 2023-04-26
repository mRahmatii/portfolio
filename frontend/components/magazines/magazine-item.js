import { ArrowDownRightIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function MagazieItem(props) {
  const { title, date, description, slug } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/blog/${slug}`;
  return (
    <a href={exploreLink}>
      <div className="rounded p-10 hover:bg-zinc-100 space-y-6">
        <div>
          <time className="pl-3 border-l-2 border-zinc-300 text-zinc-300">
            {humanReadableDate}
          </time>
        </div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <div>
          <p className="text-sm">{description}</p>
        </div>

        <div className="relative flex items-center font-medium text-sm text-teal-700 ">
          read article
          <ChevronRightIcon className="" width={10} />
        </div>
      </div>
    </a>
  );
}
