import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { extname } from "path";
import { cache } from "react";
import { Post } from "../types";

export const getPosts = cache(async (): Promise<Post[]> => {
  const posts = (await readdir("./posts/")).filter((file) =>
    [".md", ".mdx"].includes(extname(file))
  );

  return await Promise.all(
    posts.map(async (file) => {
      const filePath = `./posts/${file}`;
      const postContent = await readFile(filePath, "utf-8");
      const { data, content } = matter(postContent);

      return { ...data, body: content } as Post;
    })
  );
});
