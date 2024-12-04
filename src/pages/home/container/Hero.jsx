import React from "react";

import { images } from "../../../constants";
// import Search from "../../../components/Search";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-4xl lg:text-left lg:max-w-[540px]">
          Discover the Eternal Wisdom of{" "}
          <span className="text-primary">Sanatan Dharma</span>
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Explore timeless teachings, sacred scriptures, and profound insights that have guided humanity for millennia.
        </p>
        {/* <Search className="mt-10 lg:mt-6 xl:mt-10" /> */}
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Topics:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Bhagavad Gita
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Yoga Philosophy
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Vedic Sciences
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="w-full max-w-[500px] mx-auto"
          src={images.CoverPhoto} // Replace with a relevant image for Sanatan Dharma
          alt="Sanatan Dharma Cover"
        />
      </div>
    </section>
  );
};

export default Hero;
