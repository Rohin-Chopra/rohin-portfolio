import Link from "next/link";
import { Post } from "../types";

type Props = {
  post: Post;
};

export const BlogItem = ({ post }: Props) => {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="cursor-pointer hover:opacity-80"
      passHref
    >
      <p className="mb-2 text-slate-400">{post.createdAt}</p>
      <h2 className="text-xl font-semibold md:text-2xl"> {post.title}</h2>
      <p className="mt-2 text-slate-400">{post.description}</p>
    </Link>
  );
};
