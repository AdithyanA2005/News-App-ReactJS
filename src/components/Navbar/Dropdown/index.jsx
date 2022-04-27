import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

export default function Dropdown(props) {
  const [isMobDropActive, setIsMobDropActive] = useState(false);
  const toggleMobDropActive = () => setIsMobDropActive(!isMobDropActive);
  useEffect(() => {
    if (props.sidebarOpen == false) return setIsMobDropActive(false);
  }, [props.sidebarOpen]);

  return (
    <>
      <div className="dropdown group">
        <button
          onClick={props.isDeskNav ? null : toggleMobDropActive}
          className={`
            ${props.isDeskNav ? "py-2" : "pl-3 font-semibold py-4 bg-slate-300 dark:bg-slate-900"}
            ${isMobDropActive && "mb-5"}
           font-medium text-gray-600 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white w-full flex items-center gap-1 justify-center rounded-lg
          `}
        >
          {props.title}
          <svg
            className="w-3 h-3 ease-in-out duration-500 group-hover:rotate-180"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
          </svg>
        </button>
        <div
          className={`
            ${
              props.isDeskNav &&
              "group-hover:flex overflow-y-auto max-h-96 absolute p-3 bg-white dark:bg-slate-700"
            } 
            ${!props.isDeskNav && isMobDropActive ? "flex" : "hidden"} 
            flex-col gap-3 dropdown-content`}
        >
          {props.links.map((navLink, index) => (
            <NavItem key={index} url={navLink.url} title={navLink.title} />
          ))}
        </div>
      </div>
    </>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  isDeskNav: PropTypes.bool,
};
