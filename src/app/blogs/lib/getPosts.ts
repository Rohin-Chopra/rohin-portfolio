import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { extname } from "path";
import { cache } from "react";
import { Post } from "../types";

export const getPosts = cache(async (): Promise<Post[]> => {
  const posts = (await readdir("./posts/")).filter((file) =>
    [".md", ".mdx"].includes(extname(file))
  );

  const postsPromises = await Promise.allSettled(
    posts.map(async (file) => {
      const filePath = `./posts/${file}`;
      const postContent = await readFile(filePath, "utf-8");
      const { data, content } = matter(postContent);

      return { ...data, body: content } as Post;
    })
  );

  return postsPromises
    .filter((res) => res.status === "fulfilled")
    .map((res) => {
      const fulfilledResult = res as PromiseFulfilledResult<Post>;
      return fulfilledResult.value;
    });
});
