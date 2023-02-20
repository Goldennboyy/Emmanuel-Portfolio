"use client";
import React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiMoonLine } from "react-icons/ri";

function Navbar() {
  interface NavItemsProps {
    label: string;
    page: string;
  }

  const NAV_ITEMS: Array<NavItemsProps> = [
    {
      label: "Home",
      page: "/",
    },

    {
      label: "About",
      page: "/about",
    },

    {
      label: "Projects",
      page: "/projects",
    },
  ];

  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="fixed top-0 z-10 w-full px-4 mx-auto bg-white shadow dark:bg-zinc-800 dark:border-b dark:border-zinc-600 ">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold text-teal-500 hover:text-orange-400">
              <a href="/">Emmanuel Ezeagwula</a>
            </h2>
          </div>
        </div>
        <div className="md:flex md:space-x-6">
          {NAV_ITEMS.map((item, index) => {
            return (
              <a
                href={item.page}
                className="text-teal-500 hover:text-orange-400"
                key={index}
              >
                {item.label}
              </a>
            );
          })}

          {currentTheme === "dark" ? (
            <button
              className="p-2 text-black border-black rounded-full bg-amber-400"
              onClick={() => setTheme("light")}
            >
              <RiMoonLine size={20} />
            </button>
          ) : (
            <button
              className="p-2 text-black bg-purple-400 border-black rounded-full"
              onClick={() => setTheme("dark")}
            >
              <RiMoonFill size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
