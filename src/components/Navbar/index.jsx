import React, { useEffect, useState } from "react";
import DarkModeBtn from "./DarkModeBtn";
import Hamburger from "./Hamburger";
import MobNavItem from "./MobNavItem";
import NavItem from "./NavItem";

export default function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const toggleSidebar = () => setSidebarActive(!sidebarActive);
  const navLinks = [
    { title: "Trending", url: "/" },
    { title: "Business", url: "/business" },
    { title: "Entertainment", url: "/entertainment" },
    { title: "General", url: "/general" },
    { title: "Health", url: "/health" },
    { title: "Science", url: "/science" },
    { title: "Sports", url: "/sports" },
    { title: "Technology", url: "/technology" },
  ];

  useEffect(() => {
    if (localStorage.darkTheme == false) return setIsDarkTheme(false);
    if (localStorage.darkTheme == true) return setIsDarkTheme(true);
    localStorage.darkTheme = isDarkTheme;
  }, []);

  useEffect(() => {
    localStorage.darkTheme = isDarkTheme;
    if (isDarkTheme === true) return document.documentElement.classList.add("dark");
    return document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="fixed z-10 h-14 top-0 flex items-center px-3 py-3 w-full bg-white dark:backdrop-blur-xl dark:bg-opacity-80 dark:bg-slate-700">
        <div className="flex justify-between w-full max-w-7xl mx-auto">
          <h1 className="text-2xl justify-start w-1/4 text-gray-600 dark:text-gray-400 font-semibold">
            AdiNews
          </h1>
          <div className="hidden w-2/4 justify-center lg:flex right-0 items-center gap-5">
            {navLinks.map((navLink, index) => (
              <NavItem key={index} url={navLink.url} title={navLink.title} />
            ))}
          </div>
          <div className="justify-end w-1/4 flex right-0 items-center gap-5">
            <DarkModeBtn isDark={isDarkTheme} onClickHandle={toggleTheme} />
            <Hamburger onClickHandle={toggleSidebar} />
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div
        className={`${
          sidebarActive ? "translate-x-0" : "translate-x-full"
        } flex flex-col gap-4 fixed p-4 w-72 h-full pt-16 right-0 ease-in-out duration-500 bg-white dark:backdrop-blur-xl dark:bg-opacity-80 dark:bg-slate-700`}
      >
        {navLinks.map((navLink, index) => (
          <MobNavItem key={index} url={navLink.url} title={navLink.title} />
        ))}
      </div>
    </>
  );
}
