import { getBlogs } from "@/(subpages)/blogs/lib/getBlogs";
import type { Blog } from "@/(subpages)/blogs/types";

export const getBlog = async (slug: string): Promise<Blog | undefined> => {
  const posts = await getBlogs();

  return posts.find((post) => post.slug === slug);
};
