import axios, * as others from "axios";

export async function getAllMagazines() {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.get(
    "http://127.0.0.1:8000/blog/api/?format=json",
    {
      headers: headers,
    }
  );
  const AllMagazines = await response.data;
}

export async function getFeaturedMagazines() {
  const response = await Axios("");
  const getAllMagazines = await JSON.parse(response);
}
