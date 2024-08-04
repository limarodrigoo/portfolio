// import { randomUUID } from "crypto";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  return (
    <div className="text-center font-mono text-2xl text-foreground">
      <Typewriter
        options={{ loop: true }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .typeString("Hello, World!")
            .pauseFor(1000)
            .deleteAll()
            .typeString("My name is Rodrigo.")
            .pauseFor(1500)
            .deleteAll()
            .typeString("I'm a Back-end developer learning Front-end.")
            .pauseFor(1500)
            .deleteChars(20)
            .typeString(".")
            .pauseFor(750)
            .typeString(
              "<br><br><br> Fell free to contact me at <a href=mailto:hello@limarodrigoo.com>hello@limarodrigoo.com</a>",
            )
            .pauseFor(25000)
            .start();
        }}
      />
    </div>
  );
}
