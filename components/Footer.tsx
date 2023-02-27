"use client";

import React from "react";

function Footer() {
  return (
    <footer className="relative bottom-0 items-center w-full h-8 max-w-3xl px-4 mx-auto md:max-w-5xl">
      <div className="flex flex-row items-center justify-center space-x-1 text-sm md:text-base">
        <span className="text-gray-600 dark:text-white">© 2023 </span>
        <a href="/">
          <span className="text-teal-500 underline"> Ezeagwula Emmanuel</span>
        </a>
        <span className="text-gray-600 dark:text-white">Powered by </span>
        <a href="https://nextjs.org/">
          <span className="text-teal-500 underline">NextJS</span>
        </a>
        <span className="text-gray-600 dark:text-white">&</span>
        <a href="https://tailwindcss.com/">
          <span className="text-teal-500 underline">TailwindCSS</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
