import MagazineList from "../../../components/magazines/magazine-list";
import axios, * as others from "axios";
import { getAllMagazines } from "../../../helper/api-util";

export default function Index(props) {
  return (
    <div className="">
      <MagazineList items={props.magazines} />
    </div>
  );
}

export async function getStaticProps() {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.get(
    "http://127.0.0.1:8000/blog/api/?format=json",
    {
      headers: headers,
    }
  );
  const getAllMagazines = await response.data;

  return {
    props: {
      magazines: getAllMagazines,
    },
    revalidate: 1000,
  };
}
