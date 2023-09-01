import type { Blog } from "../types";
import { getBlogs } from "./getBlogs";

export const getPost = async (slug: string): Promise<Blog | undefined> => {
  const posts = await getBlogs();

  return posts.find((post) => post.slug === slug);
};
