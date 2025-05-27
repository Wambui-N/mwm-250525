import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <section className="py-16]">
      <div className="padding flex flex-col items-center gap-32 md:flex-row">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="mb-2 text-4xl font-semibold capitalize">The founder</h2>
          {/* <div className="flex justify-start md:justify-start mb-6">
            <span className="mx-auto md:mx-0 w-2 h-2 bg-black rounded-full block"></span>
          </div> */}
          <p className="mb-4 font-medium text-xl text-black">
            Wambui Ndung'u — Based in Nairobi and the internet.
          </p>
          <p className="mb-4 text-black/70">
            I've always been drawn to how things work — the mechanics behind
            systems, and the small decisions that make them run smoothly. That
            curiosity led me to study Mathematics and Computer Science, and
            eventually into the world of automation.
          </p>
          <p className="mb-4 text-black/70">
            In university, I realized that technical thinking doesn't have to be
            rigid — it can be creative, even playful. I started building little
            tools to save time, just for fun. Over time, those side projects
            turned into real solutions for real people.
          </p>
          <p className="text-black/70">
            Now, I work with B2B founders who want fewer tabs open — in their
            browsers and in their heads. I'm not here to overcomplicate things.
            I just believe your time is too valuable to be spent on the stuff a
            system can handle for you.
          </p>
        </div>
        {/* Right: Image */}
        <div className="relative flex w-full flex-shrink-0 justify-center md:w-[400px] md:justify-end">
          <Image
            src="/founder.png"
            alt="Fabian Albert"
            width={400}
            height={400}
            className="rounded-none object-contain object-right grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fog/0 via-fog/10 to-fog/100" />
        </div>
      </div>
    </section>
  );
};

export default Founder;
