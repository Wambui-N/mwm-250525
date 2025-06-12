import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-96 gap-4 flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="flex items-center justify-center">
        <span className="mx-4 text-9xl font-extrabold text-black dark:text-gray-100 md:text-9xl">
          4
        </span>
        <Image
          src="/logo.svg"
          alt="0"
          width={120    }
          height={120}
          className="h-auto"
        />
        <span className="mx-4 text-9xl font-extrabold text-black dark:text-gray-100 md:text-9xl">
          4
        </span>
      </div>
      <p className="mt-4 text-lg text-black/70 md:text-xl">
        Oops! Looks like you've found a page that doesn't exist.
      </p>
      <ButtonLink
        href="/"
        className="ml-3 flex h-8 items-center gap-2 rounded-sm bg-black px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        <span>Go back home</span>
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </ButtonLink>
    </div>
  );
}
