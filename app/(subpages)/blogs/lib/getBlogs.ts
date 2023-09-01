import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { extname } from "path";
import { cache } from "react";
import type { Blog } from "../types";

export const getBlogs = cache(async (): Promise<Blog[]> => {
  const posts = (await readdir("./posts/")).filter((file) =>
    [".md", ".mdx"].includes(extname(file))
  );

  const postsPromises = await Promise.allSettled(
    posts.map(async (file) => {
      const filePath = `./posts/${file}`;
      const postContent = await readFile(filePath, "utf-8");
      const { data, content } = matter(postContent);

      return { ...data, body: content } as Blog;
    })
  );

  return postsPromises
    .filter((res) => res.status === "fulfilled")
    .map((res) => {
      const fulfilledResult = res as PromiseFulfilledResult<Blog>;
      return fulfilledResult.value;
    });
});
