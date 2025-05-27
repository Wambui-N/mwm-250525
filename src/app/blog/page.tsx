import { getAllPosts, getPostsByTag } from "@/lib/contentful";
import Link from "next/link";
import { BlogCard } from "@/app/components/blog-card";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const posts = searchParams.tag 
    ? await getPostsByTag(searchParams.tag)
    : await getAllPosts();

  // Log the fields of the first post to inspect tag data
  if (posts && posts.length > 0) {
    console.log("First post data:", posts[0]);
    console.log("First post fields:", posts[0].fields);
    console.log("Tags of first post:", posts[0].fields.tags);
  }

  // Get unique tags from all posts, excluding empty/null/undefined tags
  const allTags = Array.from(
    new Set(
      posts
        .flatMap((post) => post.fields.tags || [])
        .filter((tag): tag is string => Boolean(tag))
    )
  ).sort();
  
  console.log("Extracted tags:", allTags);

  // Filter posts if a tag is selected
  const filteredPosts = searchParams.tag && posts.length > 0
    ? posts.filter(post => post.fields.tags && post.fields.tags.includes(searchParams.tag!))
    : posts;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="padding relative overflow-hidden rounded-xl py-24">
        <div className="relative z-10">
          <div className="">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-balance pb-4 text-xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                <span className="block">
                  Blog
                </span>
                <span className="underline underline-offset-8">
                  Insights & Case Studies
                </span>
              </h1>
              <p className="max-w-2xl text-base text-black/70">
                Explore our latest insights, tips, and case studies on automation and business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Filter */}
      {allTags.length > 0 && (
        <section className="padding py-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog"
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  !searchParams.tag
                    ? "bg-black text-white"
                    : "bg-black/5 text-black/70 hover:bg-black/10"
                }`}
              >
                All
              </Link>
              {allTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    searchParams.tag === tag
                      ? "bg-black text-white"
                      : "bg-black/5 text-black/70 hover:bg-black/10"
                  }`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="padding py-12">
        <div className="">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-black/70">
                {searchParams.tag 
                  ? `No posts found for the tag "${searchParams.tag}".` 
                  : "No posts available at the moment. Please check back later."}
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <BlogCard key={post.sys.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 