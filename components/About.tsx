"use client";

import React from "react";

function About() {
  return (
    <main className="flex flex-row px-6 mx-auto mt-10 mb-10 max-w-l md:max-w-5xl">
      <div className="pt-2">
        <div className="mb-4 text-3xl font-bold">
          <p className="text-center text-teal-500">Who am I ? </p>
        </div>
        <p className="mt-2 text-lg text-center text-gray-600 md:text-lg dark:text-white ">
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
