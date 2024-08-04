// import { randomUUID } from "crypto";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  return (
    <div className="text-center">
      <Typewriter
        // options={{ loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello, World!")
            .pauseFor(1000)
            .deleteAll()
            .typeString("My name is Rodrigo.")
            .pauseFor(1500)
            .deleteAll()
            .typeString("I'm a Back-end developer learning Front-end.")
            .pauseFor(1500)
            .typeString("<br>My main stacks are: ")
            .typeString("<br> NodeJs")
            .pauseFor(200)
            .typeString("<br> Go,")
            .pauseFor(200)
            .typeString("<br> RabbitMQ,")
            .pauseFor(200)
            .typeString("<br> Redis")
            .pauseFor(750)
            .typeString(
              "<br><br><br> Fell free to contact me at hello@limarodrigoo.com",
            )
            .pauseFor(12000)
            .start();
        }}
      />
    </div>
  );
}
