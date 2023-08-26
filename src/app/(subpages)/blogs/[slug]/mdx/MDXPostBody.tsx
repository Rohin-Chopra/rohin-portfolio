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
    <div className="prose dark:prose-invert prose-h2:mb-4 prose-h4:mb-3 prose-p:mb-2 prose-p:text-lg prose-blockquote:border-l-primary prose-code:rounded prose-code:bg-slate-200 prose-code:p-1 prose-li:text-lg dark:text-zinc-200 prose-headings:dark:text-white prose-strong:dark:text-white prose-code:dark:bg-dracula prose-code:dark:text-white lg:max-w-none">
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
    </div>
  );
};
