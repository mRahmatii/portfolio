import Image from "next/image";

export default function PortfolioItem() {
  return (
    <div className="space-x-2 rounded overflow-hidden">
      <div>
        <Image src="/1.jpg" width={300} height={300} />
      </div>
      <div>
        <h1 className="text-xls font-semibold">title of my project</h1>
      </div>
      <div>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
        </p>
      </div>

      <div>
        <span>live</span>
        <span>code</span>
      </div>
    </div>
  );
}
