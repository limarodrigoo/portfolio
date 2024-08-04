import GitLogo from "@/github-logo.png";
import EmailLogo from "@/o-email.png";
import Image from "next/image";
import Link from "next/link";

export default function Social() {
  return (
    <div className="my-10 flex justify-center">
      <Link
        href="http://github.com/limarodrigoo"
        target="_blank"
        className="m-2"
      >
        <Image
          src={GitLogo}
          alt="github"
          width={50}
          height={50}
          className="hover:translate-x-2 hover:scale-125"
        ></Image>
      </Link>
      <Link
        href="mailto:hello@limarodrigoo.com"
        target="_blank"
        className="m-2"
      >
        <Image
          src={EmailLogo}
          alt="email"
          width={50}
          height={50}
          className="hover:translate-x-2 hover:scale-125"
        ></Image>
      </Link>
    </div>
  );
}
