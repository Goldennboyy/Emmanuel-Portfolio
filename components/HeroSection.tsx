"use client";
import React from "react";
import Image from "next/image";
import Skills from "@/components/Skills";

import profile from "../public/Images/profile.jpg";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";
function HeroSection() {
  return (
    <section className="items-center justify-center min-h-screen px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse items-center justify-center pt-10 md:flex-row md:pt-30">
        <div className="p-4 md:w-3/5 md:p-8">
          <div className="h-auto max-w-md p-2 mb-2 text-center dark:text-white text-gray-600 rounded-lg bg-[#f4f0e9] dark:bg-zinc-700">
            <p>Hello! I&apos;m a 22 old Junior Developer based in Belgium.</p>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-teal-500">
            Emmanuel Ezeagwula{" "}
          </h1>
          <h2 className="mb-4 text-xl text-gray-600 dark:text-white">
            Junior Developer / CS Student
          </h2>
          <p className="w-full max-w-2xl text-lg text-gray-600 dark:text-white">
            Hello, my name is Emmanuel born in 🇧🇪 with Nigerian heritage 🇳🇬. I
            am 22 years old. Always being curious about computers &amp;
            technology during my early age, I turned to study in computer
            science to get my bachelor&apos;s degree in computer science
            management in 2023 at HE2B-ESI. Since then, I have been training to
            expand my knowledge as much as possible to learn even more!
          </p>
          <div className="flex flex-row mt-5 mb-4 space-x-4 text-teal-500">
            <a href="https://www.linkedin.com/in/emmanuel-ezeagwula-87b325251/">
              <IoLogoLinkedin size={30} className="hover:text-orange-400" />
            </a>
            <a href="https://github.com/Goldennboyy">
              <IoLogoGithub size={30} className="hover:text-orange-400" />
            </a>
          </div>
          <a href="/projects">
            <button className="w-full font-semibold text-gray-600 bg-teal-500 dark:text-white dark:bg-teal-500/30 btn rounded-xl md:w-auto">
              View Projects!
            </button>
          </a>
        </div>
        <div className="p-4 md:w-2/5">
          <Image
            className="w-full h-auto p-4 rounded-2xl"
            src={profile}
            alt="Emmanuel's Image"
            width={200}
            height={250}
          />
        </div>
      </div>
      <hr className="mx-4 mb-2 border-gray-600 md:mx-16" />
      <div className="mb-28">
        <Skills />
      </div>
    </section>
  );
}

export default HeroSection;
