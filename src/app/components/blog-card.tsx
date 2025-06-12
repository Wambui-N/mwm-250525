import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/contentful";
import { Entry } from "contentful";

interface BlogCardProps {
  post: Entry<BlogPost>;
  className?: string;
}

export function BlogCard({ post, className = "" }: BlogCardProps) {
  const imageUrl = ((post.fields.image as unknown) as { fields?: { file?: { url?: string } } })?.fields?.file?.url;

  return (
    <Link
      href={`/blog/${post.sys.id}`}
      className={`group flex flex-col overflow-hidden rounded-xl border border-black/10 transition-all hover:border-black/20 hover:shadow-sm ${className}`}
    >
      {imageUrl && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={`https:${imageUrl}`}
            alt={typeof post.fields.title === 'string' ? `Cover image for ${post.fields.title}` : 'Blog post image'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {Array.isArray(post.fields.tags) && post.fields.tags.length > 0 && (
          <div className="mb-3 flex items-center gap-1 text-xs text-black/50">
            {post.fields.tags?.map((tag: string, index: number) => (
              <span key={tag}>
                {tag}
                {index < (post.fields.tags?.length ?? 0) - 1 && (
                  <span className="mx-1">•</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h2 className="mb-3 text-xl font-semibold group-hover:text-black/80">
          {typeof post.fields.title === 'string' ? post.fields.title : 'Untitled Post'}
        </h2>
        <div className="mt-auto flex items-center text-sm font-medium text-black/70 group-hover:text-black">
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
} 