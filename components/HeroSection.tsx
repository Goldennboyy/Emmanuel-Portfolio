import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";
function HeroSection() {
  return (
    <section className="flex flex-row items-center justify-center py-32 max-w-8xl">
      <div className="flex flex-col items-center mt-12">
        <Image
          className="object-cover border-black rounded-full"
          src={profile}
          alt="Emmanuel's Image"
          width={150}
          height={150}
        />
        <h1 className="py-5 text-3xl text-teal-500">Emmanuel Ezeagwula </h1>
        <span>Junior Developer / CS Student</span>
        <div className="flex flex-row mt-5 space-x-3 text-teal-500">
          <a href="https://www.linkedin.com/in/emmanuel-ezeagwula-87b325251/">
            <IoLogoLinkedin size={30} className="hover:text-orange-400" />
          </a>
          <a href="https://github.com/Goldennboyy">
            <IoLogoGithub size={30} className="hover:text-orange-400" />
          </a>
        </div>
        <div className="items-center justify-center">
          <div className="flex flex-row mt-5 space-x-5 text-teal-500">
            <button className="w-16 h-10 text-center bg-gray-600 rounded-lg hover:text-orange-400">
              About
            </button>
            <button className="w-16 h-10 text-center bg-gray-600 rounded-lg hover:text-orange-400">
              Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
