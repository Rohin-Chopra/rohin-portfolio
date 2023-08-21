import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { getPost } from "../lib/getPost";
import "./highlight.css";
import { BlogPostParams } from "./types";

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
  };
};

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
