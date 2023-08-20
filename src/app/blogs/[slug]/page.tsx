import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { getPost } from "../lib/getPost";
import { getPosts } from "../lib/getPosts";
import { Pre } from "./mdx/Pre";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

type Props = {
  params: {
    slug: string;
  };
};

const BlogPage = async ({ params }: Props) => {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-black font-roboto text-white">
      <div className="container mx-auto flex justify-center py-2">
        <div className="lg:max-w-2xl">
          <p className="mb-4 text-slate-400">{post.createdAt}</p>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>
          <p className="mb-8 text-slate-400">{post.description}</p>
          <div className="prose text-white prose-headings:text-white prose-h2:mb-4 prose-p:mb-2 prose-p:text-lg lg:max-w-none">
            {/* @ts-expect-error Server Component */}
            <MDXRemote
              source={post.body}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkFrontmatter],
                  rehypePlugins: [rehypeHighlight],
                },
              }}
              components={{
                // h2: ({ children, ...props }) => (
                //   <h2 className="my-2 text-2xl font-bold" {...props}>
                //     {children}
                //   </h2>
                // ),
                // h3: ({ children, ...props }) => (
                //   <h3 {...props} className="mb-1 text-xl font-semibold">
                //     {children}
                //   </h3>
                // ),
                // p: ({ children, ...props }) => (
                //   <p {...props} className="text-lg">
                //     {children}
                //   </p>
                // ),
                // pre: ({ children, ...props }) => (
                //   <pre className="prose" {...props}>
                //     {children}
                //   </pre>
                // ),
                a: ({ children, ...props }) => (
                  <a {...props} className="text-blue-400 hover:text-blue-200">
                    {children}
                  </a>
                ),
                pre: Pre,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
