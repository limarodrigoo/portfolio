"use client";

import TypingEffect from "./typeEffect";
import Social from "./social";

const Home = () => {
  return (
    <div className="flex h-dvh flex-col justify-center">
      <h1 className="my-2 flex self-center font-mono text-3xl">limarodrigoo</h1>
      <TypingEffect />
      <Social />
    </div>
  );
};

export default Home;
