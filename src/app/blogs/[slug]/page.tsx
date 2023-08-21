import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { getPost } from "../lib/getPost";
import { getPosts } from "../lib/getPosts";
import { mdxComponents } from "./components/mdx";
import { terraformSyntaxHighlighter } from "./lib/terraformSyntaxHighlighter";
import styles from "./style.module.css";
import { BlogPostParams } from "./types";

export async function generateStaticParams(): Promise<
  BlogPostParams["params"][]
> {
  const posts = await getPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

const BlogPage = async ({ params }: BlogPostParams) => {
  const post = await getPost(params.slug);

  // todo: add 404 page
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
