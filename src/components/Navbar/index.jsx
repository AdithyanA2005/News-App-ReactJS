import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import DarkModeButton from "./Button/DarkMode";
import HamburgerButton from "./Button/Hamburger";
import Dropdown from "./Dropdown";
import NavItem from "./NavItem";

export default function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const burgerRef = useRef();
  const sidebarRef = useRef();
  const toggleTheme = () => setIsDarkTheme((prev) => !prev);
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
  const countryLinks = [
    { title: "UAE", url: "/country/ae" },
    { title: "Argentina", url: "/country/ar" },
    { title: "Austria", url: "/country/at" },
    { title: "Australia", url: "/country/au" },
    { title: "Belgium", url: "/country/be" },
    { title: "Bulgaria", url: "/country/bg" },
    { title: "Brazil", url: "/country/br" },
    { title: "Canada", url: "/country/ca" },
    { title: "Switzerland", url: "/country/ch" },
    { title: "China", url: "/country/cn" },
    { title: "Colombia", url: "/country/co" },
    { title: "Cuba", url: "/country/cu" },
    { title: "Czech Republic", url: "/country/cz" },
    { title: "Germany", url: "/country/de" },
    { title: "Egypt", url: "/country/eg" },
    { title: "France", url: "/country/fr" },
    { title: "United Kingdom", url: "/country/gb" },
    { title: "Greece", url: "/country/gr" },
    { title: "Hong Kong", url: "/country/hk" },
    { title: "Hungary", url: "/country/hu" },
    { title: "Indonesia", url: "/country/id" },
    { title: "Ireland", url: "/country/ie" },
    { title: "Israel", url: "/country/il" },
    { title: "India", url: "/country/in" },
    { title: "Italy", url: "/country/it" },
    { title: "Japan", url: "/country/jp" },
    { title: "South Korea", url: "/country/kr" },
    { title: "Lithuania", url: "/country/lt" },
    { title: "Latvia", url: "/country/lv" },
    { title: "Morocco", url: "/country/ma" },
    { title: "Mexico", url: "/country/mx" },
    { title: "Malaysia", url: "/country/my" },
    { title: "Nigeria", url: "/country/ng" },
    { title: "Netherlands", url: "/country/nl" },
    { title: "Norway", url: "/country/no" },
    { title: "New Zealand", url: "/country/nz" },
    { title: "Philippines", url: "/country/ph" },
    { title: "Poland", url: "/country/pl" },
    { title: "Portugal", url: "/country/pt" },
    { title: "Romania", url: "/country/ro" },
    { title: "Serbia", url: "/country/rs" },
    { title: "Russia", url: "/country/ru" },
    { title: "Saudi Arabia", url: "/country/sa" },
    { title: "Sweden", url: "/country/se" },
    { title: "Singapore", url: "/country/sg" },
    { title: "Slovenia", url: "/country/si" },
    { title: "Slovakia", url: "/country/sk" },
    { title: "Thailand", url: "/country/th" },
    { title: "Turkey", url: "/country/tr" },
    { title: "Taiwan", url: "/country/tw" },
    { title: "Ukraine", url: "/country/ua" },
    { title: "United States", url: "/country/us" },
    { title: "Venezuela", url: "/country/ve" },
    { title: "South Africa", url: "/country/za" },
  ];

  useEffect(() => {
    // CHECK LOCAL_STORAGE FOR THEME
    if (localStorage.darkTheme === "false") return setIsDarkTheme(false);
    if (localStorage.darkTheme === "true") return setIsDarkTheme(true);
    localStorage.darkTheme = "dark";
  }, []);
  useEffect(() => {
    // HANDLE THEME CHANGE
    localStorage.darkTheme = isDarkTheme;
    if (isDarkTheme === true) return document.documentElement.classList.add("dark");
    return document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);
  useEffect(() => {
    function handleMouseDown(event) {
      // Handle sidebar open and close
      if (burgerRef.current.contains(event.target)) return setSidebarActive((prev) => !prev);
      if (!sidebarRef.current.contains(event.target)) return setSidebarActive(false);
    }
    function handleScroll(event) {
      // Handle sidebar close on body document scroll
      console.log("as");
      if (!sidebarRef.current.contains(event.target)) return setSidebarActive(false);
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="fixed z-10 h-14 top-0 flex items-center px-3 py-3 w-full bg-white backdrop-blur-xl bg-opacity-80 dark:backdrop-blur-xl dark:bg-opacity-80 dark:bg-slate-700">
        <div className="flex justify-between w-full max-w-7xl mx-auto">
          <h1 className="hover:scale-105 hover:pl-2 ease-in-out duration-500 flex items-center text-2xl justify-start w-1/4 font-semibold">
            <NavLink to="/">
              <span className="text-slate-600 dark:text-slate-400 hover:text-slate-700 hover:dark:text-slate-300">
                AdiNews
              </span>
            </NavLink>
          </h1>
          <div className="hidden w-2/4 justify-center lg:flex right-0 items-center gap-6">
            <NavItem url="/" title="Trending" />
            <Dropdown
              isDeskNav
              title="Category"
              sidebarOpen={sidebarActive}
              links={categoryLinks}
            />
            <Dropdown
              isDeskNav
              title="Language"
              sidebarOpen={sidebarActive}
              links={languageLinks}
            />
            <Dropdown isDeskNav title="Country" sidebarOpen={sidebarActive} links={countryLinks} />
          </div>
          <div className="justify-end w-1/4 flex right-0 items-center gap-5">
            <DarkModeButton isDark={isDarkTheme} onClickHandle={toggleTheme} />
            <HamburgerButton reference={burgerRef} />
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div ref={sidebarRef}>
        <div
          className={`${
            sidebarActive ? "translate-x-0" : "translate-x-full"
          } dropdown-content flex flex-col gap-4 p-4 pt-16 top-0 fixed w-72 h-screen overflow-y-scroll right-0 ease-in-out duration-500 bg-white backdrop-blur-xl bg-opacity-80 dark:backdrop-blur-xl dark:bg-opacity-80 dark:bg-slate-700`}
        >
          <Dropdown title="Category" sidebarOpen={sidebarActive} links={categoryLinks} />
          <Dropdown title="Language" sidebarOpen={sidebarActive} links={languageLinks} />
          <Dropdown title="Country" sidebarOpen={sidebarActive} links={countryLinks} />
        </div>
      </div>
    </>
  );
}
