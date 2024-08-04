"use client";

import { Card, CardDescription, CardHeader } from "@components/ui/card";
import TypingEffect from "./typeEffect";

const Home = () => {
  return (
    <div className="grid h-dvh grid-cols-2 gap-5">
      <Card className="flex flex-col justify-center">
        <TypingEffect />
      </Card>
      <Card className="flex flex-col justify-center">
        <CardHeader className="text-center text-3xl">Contact me:</CardHeader>
        <CardDescription className="flex flex-col text-center">
          <a
            href="http://github.com/limarodrigoo"
            target="_blank"
            className="m-2 text-xl hover:text-foreground"
          >
            Github
          </a>
          <a
            href="mailto:hello@limarodrigoo.com"
            className="m-2 text-xl hover:text-foreground"
          >
            mail: hello@limarodrigoo.com
          </a>
        </CardDescription>
      </Card>
    </div>
  );
};

export default Home;
