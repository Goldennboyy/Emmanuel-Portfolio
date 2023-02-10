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
      page: "home",
    },

    {
      label: "About",
      page: "about",
    },

    {
      label: "Projects",
      page: "projects",
    },
    {
      label: "Resume",
      page: "resume",
    },
  ];

  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="fixed top-0 z-10 w-full px-4 mx-auto bg-white shadow dark:bg-stone-900 dark:border-b dark:border-stone-600 ">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">Emmanuel Ezeagwula</h2>
          </div>
        </div>
        <div className="md:flex md:space-x-6">
          {NAV_ITEMS.map((item, index) => {
            return <a key={index}>{item.label}</a>;
          })}

          {currentTheme === "dark" ? (
            <button
              className="p-2 border-black rounded-xl bg-slate-100"
              onClick={() => setTheme("light")}
            >
              <RiMoonLine size={20} color="black" />
            </button>
          ) : (
            <button
              className="p-2 rounded-xl bg-slate-100"
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
