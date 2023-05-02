import Link from "next/link";

export default function Button(props) {
  if (props.link) {
    return (
      <Link
        href={props.link}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
