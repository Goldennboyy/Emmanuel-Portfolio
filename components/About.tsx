import React from "react";
import Skills from "@/components/Skills";

function About() {
  return (
    <main className="flex flex-row max-w-3xl px-6 mx-auto mb-10 md:max-5xl mt-28">
      <div className="pt-5">
        <div className="mb-5 text-3xl">
          <p className="text-center text-teal-500">Who am I ? </p>
        </div>
        <p className="text-md md:text-xl">
          Hello, my name is Emmanuel born in 🇧🇪 with Nigerian heritage 🇳🇬. I am
          22 years old. Always being curious about computers & technology during
          my early age, I turned to study in computer science to get my
          bachelor&apos;s degree in computer science management in 2023 at
          HE2B-ESI. Since then, I have been training to expand my knowledge as
          much as possible to learn even more !{" "}
        </p>
      </div>
    </main>
  );
}

export default About;
