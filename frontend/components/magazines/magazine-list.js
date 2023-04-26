import MagazieItem from "./magazine-item";

export default function MagazineList(props) {
  const { items } = props;

  return (
    <>
      <h1 className="text-lg font-bold">magazine</h1>
      <div className="flex flex-col gap-10">
        {items.map((magazine) => (
          <MagazieItem
            key={magazine.id}
            id={magazine.id}
            title={magazine.title}
            slug={magazine.slug}
            date={magazine.created_at}
            description={magazine.description}
          />
        ))}
      </div>
    </>
  );
}
