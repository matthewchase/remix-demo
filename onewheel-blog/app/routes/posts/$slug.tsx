import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return json({ post });
};

export default function PostRoute() {
  const { post } = useLoaderData();
  return (
    <main className="max-w-4x1 mx-auto">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
    </main>
  );
}
