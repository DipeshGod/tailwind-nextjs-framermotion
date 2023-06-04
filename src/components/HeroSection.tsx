import React from 'react';

const HeroSection = () => {
  return (
    <div className="mb-[550px] grid h-screen grid-cols-1 text-center md:mb-14 lg:mb-0 lg:grid-cols-2 dark:bg-black dark:text-white">
      <div className="order-last py-10 my-auto space-y-8 text-left md:order-first">
        <h1 className="mt-5 text-4xl leading-relaxed tracking-wider md:text-5xl">
          I explore how technology can help people build software for Change And
          Growth
        </h1>
        <p className="text-2xl">
          I am driven by vision to make software products that focuses on
          automation, effciency and insights. I am curious about the art of
          making valuable products which involves people, process and learning
        </p>
        <p className="text-2xl">
          Making things, learning more and playing with ideas is what i love to
          do. Working with people who value and are driven by common goal is
          something I look forward to
        </p>
      </div>

      <div className="mx-auto my-auto h-[300px] w-[300px] rounded-[50%] bg-green-500 bg-gradient-to-r from-yellow-400 to-yellow-600 md:h-[400px] md:w-[400px]">
        <img
          src="./me.png"
          alt="dipesh chaulagain"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default HeroSection;
