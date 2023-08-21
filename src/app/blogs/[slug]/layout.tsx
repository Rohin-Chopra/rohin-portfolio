import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { getPost } from "../lib/getPost";
import { getPosts } from "../lib/getPosts";
import "./highlight.css";
import { BlogPostParams } from "./types";

export async function generateStaticParams(): Promise<
  BlogPostParams["params"][]
> {
  const posts = await getPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export const generateMetadata = async ({
  params,
}: BlogPostParams): Promise<Metadata> => {
  const post = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.rohinchopra.com/blogs/${params.slug}`,
    },
  };
};

const BlogPostLayout = (props: PropsWithChildren) => {
  return <>{props.children}</>;
};

export default BlogPostLayout;
