export default function MagazineDetailComponent(props) {
  const { title, date, content } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="mt-20 max-w-3xl mx-auto">
      <article>
        <headear>
          <time className="pl-3 border-l-2 border-zinc-300 text-zinc-300">
            {humanReadableDate}
          </time>
          <h1 className="font-bold text-4xl my-10 ">{title}</h1>
        </headear>

        <div className="text-justify">
          <p>{content}</p>
        </div>
      </article>
    </div>
  );
}
