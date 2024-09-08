import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Website Development",
          "App Development",
          "SEO",
          "Graphics Design",
          "Logo Creation",
          "Social Media Marketing",
          "Content Writing",
          "Page Optimization"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
