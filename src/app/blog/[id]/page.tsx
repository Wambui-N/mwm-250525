import { getPostById, getAllPosts, BlogPost } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { BlogCard } from "@/app/components/blog-card";

export const revalidate = 3600; // Revalidate every hour

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.sys.id,
  }));
}

// Rich text renderer options
const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-3 text-lg leading-relaxed text-black/70">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="mb-3 text-3xl font-semibold tracking-tight">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="mb-4 text-2xl font-semibold tracking-tight">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="mb-3 list-disc pl-6 text-lg leading-relaxed text-black/70">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="mb-3 list-decimal pl-6 text-lg leading-relaxed text-black/70">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-2">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <div className="my-8 rounded-xl border border-black/10 bg-black/5 p-8">
        <div className="mb-4 flex items-center gap-2 text-black/50">
          <Quote className="h-5 w-5" />
          {/* <span className="text-sm font-medium">Client Feedback</span> */}
        </div>
        <blockquote className="text-lg italic leading-relaxed text-black/70">
          {children}
        </blockquote>
      </div>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black underline underline-offset-4 hover:text-black/70"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPostById(params.id);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-semibold">Post not found</h1>
          <Link
            href="/blog"
            className="text-black underline underline-offset-4 hover:text-black/70"
          >
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen max-w-3xl mx-auto">
      {/* Hero Section */}
      <section className="padding relative overflow-hidden rounded-xl py-12">
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center">
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center text-sm font-medium text-black/70 hover:text-black"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              <div className="mb-3">
                {post.fields.tags && post.fields.tags.length > 0 && (
                  <div className="flex items-center gap-1 text-sm text-black/50">
                    {post.fields.tags.map((tag, index) => (
                      <span key={tag}>
                        {tag}
                        {index < post.fields.tags!.length - 1 && (
                          <span className="mx-1">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <h1 className="text-balance pb-4 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {post.fields.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="padding -mt-12 pb-12">
        <div className="container mx-auto">
          <div className="relative aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src={`https:${post.fields.image?.fields?.file?.url}`}
              alt={post.fields.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="padding py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg">
              {documentToReactComponents(post.fields.body, options)}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Posts */}
      {post.fields.recommendedPosts && post.fields.recommendedPosts.length > 0 && (
        <section className="padding py-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                Recommended Posts
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {post.fields.recommendedPosts.map((recommendedPost) => {
                const post = recommendedPost as unknown as BlogPost;
                return <BlogCard key={post.sys.id} post={post} />;
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
} 