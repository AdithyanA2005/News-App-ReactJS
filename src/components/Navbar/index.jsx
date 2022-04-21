import React, { useEffect, useState } from "react";
import DarkModeButton from "./Button/DarkMode";
import HamburgerButton from "./Button/Hamburger";
import Dropdown from "./Dropdown";
import NavItem from "./NavItem";

export default function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const toggleSidebar = () => setSidebarActive((prev) => !prev);
  const categoryLinks = [
    { title: "Trending", url: "/" },
    { title: "Business", url: "/category/business" },
    { title: "Entertainment", url: "/category/entertainment" },
    { title: "General", url: "/category/general" },
    { title: "Health", url: "/category/health" },
    { title: "Science", url: "/category/science" },
    { title: "Sports", url: "/category/sports" },
    { title: "Technology", url: "/category/technology" },
  ];
  const languageLinks = [
    { title: "Arabic", url: "/language/ar" },
    { title: "German", url: "/language/de" },
    { title: "English", url: "/language/en" },
    { title: "Spanish/Castilian", url: "/language/es" },
    { title: "French", url: "/language/fr" },
    { title: "Hebrew", url: "/language/he" },
    { title: "Italian", url: "/language/it" },
    { title: "Dutch/Flemish", url: "/language/nl" },
    { title: "Norwegian", url: "/language/no" },
    { title: "Portuguese", url: "/language/pt" },
    { title: "Rundi", url: "/language/ru" },
    { title: "Northern Sami", url: "/language/se" },
    { title: "Chinese", url: "/language/zh" },
  ];

  useEffect(() => {
    if (localStorage.darkTheme === "false") return setIsDarkTheme(false);
    if (localStorage.darkTheme === "true") return setIsDarkTheme(true);
    localStorage.darkTheme = "dark";
  }, []);
  useEffect(() => {
    localStorage.darkTheme = isDarkTheme;
    if (isDarkTheme === true) return document.documentElement.classList.add("dark");
    return document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="fixed z-10 h-14 top-0 flex items-center px-3 py-3 w-full bg-white backdrop-blur-xl bg-opacity-80 dark:backdrop-blur-xl dark:bg-opacity-80 dark:bg-slate-700">
        <div className="flex justify-between w-full max-w-7xl mx-auto">
          <h1 className="text-2xl justify-start w-1/4 text-gray-600 dark:text-gray-400 font-semibold">
            AdiNews
          </h1>
          <div className="hidden w-2/4 justify-center lg:flex right-0 items-center gap-6">
            <NavItem url="/" title="Trending" />
            <Dropdown isDeskNav title="Category" links={categoryLinks} />
            <Dropdown isDeskNav title="Language" links={languageLinks} />
            <Dropdown isDeskNav title="Country" links={categoryLinks} />
          </div>
          <div className="justify-end w-1/4 flex right-0 items-center gap-5">
            <DarkModeButton isDark={isDarkTheme} onClickHandle={toggleTheme} />
            <HamburgerButton onClickHandle={toggleSidebar} />
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}

      <div
        id="sidebar"
        className={`${sidebarActive ? "translate-x-0" : "translate-x-full"} 
        flex flex-col gap-4 p-4 fixed w-72 h-full pt-16 overflow-y-scroll right-0 ease-in-out duration-500 bg-white backdrop-blur-xl bg-opacity-80 dark:backdrop-blur-xl dark:bg-opacity-80 dark:bg-slate-700`}
      >
        <Dropdown title="Category" links={categoryLinks} />
        <Dropdown title="Language" links={languageLinks} />
        <Dropdown title="Country" links={categoryLinks} />
      </div>
    </>
  );
}
