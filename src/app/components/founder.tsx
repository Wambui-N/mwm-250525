import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <section className="py-16]">
      <div className="padding flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="mb-2 text-4xl font-semibold">The founder</h2>
          {/* <div className="flex justify-start md:justify-start mb-6">
            <span className="mx-auto md:mx-0 w-2 h-2 bg-black rounded-full block"></span>
          </div> */}
          <p className="text-lg text-black/80 mb-4">
            Fabian Albert, a dedicated designer born in Romania.
          </p>
          <p className="text-black/70 mb-4">
            I've always had a passion for appealing aesthetics, which ultimately turned into a more niched scope, digital design. I've been exploring design for the past 12 years and worked with multiple start-ups and ventures achieving outstanding results and great conversions.
          </p>
          <p className="text-black/70 mb-4">
            Attention to details plays a big role in my work which ultimately improves the end experience and creates natural & organic engagement.
          </p>
          <p className="text-black/70">
            Working directly with people fuels my creativity and pushes me to to achieve remarkable experiences for the end user.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[400px] flex justify-center md:justify-end relative">
          <Image
            src="/founder.png"
            alt="Fabian Albert"
            width={400}
            height={400}
            className="object-contain object-right rounded-none grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fog/0 via-fog/10 to-fog/100" />
        </div>
      </div>
    </section>
  );
};

export default Founder;
