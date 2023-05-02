import axios, * as others from "axios";
import Head from "next/head";
import { Fragment } from "react";
import MagazineDetailComponent from "../../../components/magazines/magazine-detail";
import Comments from "../../../components/input/comment/comments";
export default function MagazineDetailPage(props) {
  const magazine = props.magazine;

  if (!magazine) {
    return <div>no magazineeee</div>;
  }
  return (
    <Fragment>
      <Head>
        <title>{magazine.meta_title}</title>
        <meta name="description" content={magazine.meta_description} />
      </Head>
      <MagazineDetailComponent
        date={magazine.created_at}
        title={magazine.title}
        content={magazine.content}
      />
      <Comments magazineId={magazine.id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.get("http://127.0.0.1:8000/blog/api/" + slug, {
    headers: headers,
  });
  const magazine = await response.data;

  return {
    props: { magazine: magazine },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  // you can add api for featured event
  return {
    paths: [{ params: { slug: "testtt" } }],
    fallback: "blocking",
  };
}
