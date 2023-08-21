import { MDXRemote } from "next-mdx-remote/rsc";
import Link, { LinkProps } from "next/link";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { getPost } from "../lib/getPost";
import { getPosts } from "../lib/getPosts";
import { MDXImage } from "./components/mdx/MDXImage";
import { MDXPre } from "./components/mdx/MDXPre";
import styles from "./style.module.css";
import { BlogPostParams } from "./types";

const terraformFm = (hljs: import("highlight.js").HLJSApi) => {
  const NUMBERS = {
    className: "number",
    begin: "\\b\\d+(\\.\\d+)?",
    relevance: 0,
  };
  const STRINGS = {
    className: "string",
    begin: '"',
    end: '"',
    contains: [
      {
        className: "variable",
        begin: "\\${",
        end: "\\}",
        relevance: 9,
        contains: [
          {
            className: "string",
            begin: '"',
            end: '"',
          },
          {
            className: "meta",
            begin: "[A-Za-z_0-9]*" + "\\(",
            end: "\\)",
            contains: [
              NUMBERS,
              {
                className: "string",
                begin: '"',
                end: '"',
                contains: [
                  {
                    className: "variable",
                    begin: "\\${",
                    end: "\\}",
                    contains: [
                      {
                        className: "string",
                        begin: '"',
                        end: '"',
                        contains: [
                          {
                            className: "variable",
                            begin: "\\${",
                            end: "\\}",
                          },
                        ],
                      },
                      {
                        className: "meta",
                        begin: "[A-Za-z_0-9]*" + "\\(",
                        end: "\\)",
                      },
                    ],
                  },
                ],
              },
              "self",
            ],
          },
        ],
      },
    ],
  };

  return {
    aliases: ["tf", "hcl"],
    keywords:
      "resource variable provider output locals module data terraform|10",
    literal: "false true null",
    contains: [hljs.COMMENT("\\#", "$"), NUMBERS, STRINGS],
  };
};

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

const BlogPage = async ({ params }: BlogPostParams) => {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-black font-roboto text-white">
      <header className={`${styles.gradientBackgroundHeader} pt-20`}>
        <div className="container px-4 md:mx-auto md:flex md:justify-center">
          <div>
            <div className="lg:max-w-2xl">
              <p className="mb-4 text-slate-400">{post.createdAt}</p>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                {post.title}
              </h1>
              <p className="mb-8 text-slate-400">{post.description}</p>
            </div>
          </div>
        </div>
      </header>
      <div className="container px-4 pb-8 pt-2 md:mx-auto md:flex md:justify-center">
        <div>
          <div className="lg:max-w-2xl">
            <div className="prose prose-invert text-zinc-200 prose-headings:text-white prose-h2:mb-4 prose-h4:mb-3 prose-p:mb-2 prose-p:text-lg prose-blockquote:border-l-primary prose-strong:text-white prose-code:rounded prose-code:bg-draculaTheme prose-code:p-1 prose-code:text-white prose-li:text-lg lg:max-w-none">
              {/* @ts-expect-error Server Component */}
              <MDXRemote
                source={post.body}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm, remarkFrontmatter],
                    rehypePlugins: [
                      [
                        rehypeHighlight,
                        {
                          languages: {
                            hcl: terraformFm,
                          },
                        },
                      ],
                    ],
                  },
                }}
                components={{
                  a: ({ children, ...props }) => (
                    <Link
                      {...(props as LinkProps)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={props.href || ""}
                      className="text-blue-400 transition-colors hover:text-blue-300"
                    >
                      {children}
                    </Link>
                  ),
                  pre: MDXPre,
                  img: ({ children, ...props }) => {
                    return <MDXImage {...props} />;
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
