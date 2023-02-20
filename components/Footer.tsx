import React from "react";

function Footer() {
  return (
    <footer className="relative bottom-0 w-full max-w-4xl px-4 mx-auto md:max-w-5xl">
      <div className="flex flex-row items-center justify-center space-x-1 text-sm">
        <span>© 2023 </span>
        <a href="/">
          <span className="text-teal-500 underline"> Ezeagwula Emmanuel</span>
        </a>
        <span>Powered by </span>
        <a href="https://nextjs.org/">
          <span className="text-teal-500 underline">NextJS</span>
        </a>
        <span>&</span>
        <a href="https://tailwindcss.com/">
          <span className="text-teal-500 underline">TailwindCSS</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
