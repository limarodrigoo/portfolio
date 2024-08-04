"use client";

import { Card } from "@components/ui/card";
import TypingEffect from "./typeEffect";
import GitLogo from "@/github-logo.png";
import EmailLogo from "@/o-email.png";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="grid h-dvh">
      <Card className="flex flex-col justify-center">
        <TypingEffect />
        <div className="my-10 flex justify-center">
          <Link
            href="http://github.com/limarodrigoo"
            target="_blank"
            className="m-2"
          >
            <Image src={GitLogo} alt="github" width={50} height={50}></Image>
          </Link>
          <Link
            href="mailto:hello@limarodrigoo.com"
            target="_blank"
            className="m-2"
          >
            <Image src={EmailLogo} alt="email" width={50} height={50}></Image>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
