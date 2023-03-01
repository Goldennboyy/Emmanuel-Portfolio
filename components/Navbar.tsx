"use client";
import React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiMoonLine } from "react-icons/ri";
import { NavItemsProps } from "@/lib/interface";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const NAV_ITEMS: Array<NavItemsProps> = [
    {
      label: "Home",
      page: "/",
    },

    {
      label: "Projects",
      page: "/projects",
    },
  ];

  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="bg-[#f4ece5] shadow navbar dark:bg-zinc-800 dark:border-b dark:border-zinc-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* {NAV_ITEMS.map((item, index) => {
            return (
              <ul
                key={index}
                className="p-2 mt-3 bg-white shadow menu menu-compact dropdown-content dark:bg-zinc-800 rounded-box w-52"
              >
                <li>
                  <a href={item.page}>{item.label}</a>
                </li>
              </ul>
            );
          })} */}
          <div tabIndex={0} className="text-gray-600 dark:text-white">
            <ul
              tabIndex={0}
              className="p-2 mt-3 bg-white shadow menu menu-compact dropdown-content dark:bg-zinc-800 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
        <a
          href="/"
          className="text-2xl font-semibold text-gray-600 normal-case dark:text-white btn btn-ghost"
        >
          Emmanuel Ezeagwula
        </a>
      </div>

      <div className="hidden navbar-center lg:flex">
        {NAV_ITEMS.map((item, index) => {
          return (
            <div key={index}>
              <ul className="px-1 menu menu-horizontal">
                <li>
                  <a className="text-gray-600 dark:text-white" href={item.page}>
                    {item.label}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="navbar-end">
        {currentTheme === "dark" ? (
          <button
            className="p-1 text-black border-black rounded-full bg-amber-400"
            onClick={() => setTheme("light")}
          >
            <RiMoonLine size={25} />
          </button>
        ) : (
          <button
            className="p-1 text-black border-black rounded-full bg-amber-400 "
            onClick={() => setTheme("dark")}
          >
            <RiMoonFill size={25} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
