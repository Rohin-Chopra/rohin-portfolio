import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight/lib";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import type { Blog } from "../../types";
import { mdxComponents } from "./components";
import { terraformSyntaxHighlighter } from "./terraformSyntaxHighlighter";

type Props = {
  blog: Blog;
};

export const MDXBlogBody = ({ blog }: Props) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        source={blog.body}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkFrontmatter],
            rehypePlugins: [
              [
                rehypeHighlight,
                {
                  languages: {
                    hcl: terraformSyntaxHighlighter,
                  },
                },
              ],
            ],
          },
        }}
        components={mdxComponents}
      />
    </>
  );
};
