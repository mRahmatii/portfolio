import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function SkillItem() {
  return (
    <div className="reletive rounded items-stretch border-b-2 border-zinc-700 shadow-xl overflow-hidden  p-4">
      <div className="">
        <AcademicCapIcon
          className="h-10 w-10 text-gray-400"
          aria-hidden="true"
        />
        <h1 className="text-3xl font-bold my-4">stategy</h1>
        <div>
          <p className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
          </p>
        </div>
      </div>
    </div>
  );
}
