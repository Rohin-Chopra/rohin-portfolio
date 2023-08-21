import type { Post } from "./../types";
import { getPosts } from "./getPosts";

export const getPost = async (slug: string): Promise<Post | undefined> => {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slug);
};
