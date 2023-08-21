import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";
import { getPost } from "../lib/getBlog";
import { getBlogs } from "../lib/getBlogs";
import "./highlight.css";
import type { BlogPostParams } from "./types";

export async function generateStaticParams(): Promise<
  BlogPostParams["params"][]
> {
  const posts = await getBlogs();

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
