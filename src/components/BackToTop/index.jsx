import React, { useEffect, useState } from "react";
import { ReactComponent as JetIcon } from "./jet.svg";

export default function BackToTop() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 50);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <abbr title="Go back to top">
        <button
          onClick={() => window.scroll(0, 0)}
          className={`${isActive ? "translate-y-0" : "translate-y-36"}
          fixed bottom-4 right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 rounded-full w-16 h-16 p-4 text-slate-800 dark:text-slate-100 bg-slate-400 dark:bg-slate-700 opacity-50 hover:opacity-100 ease-in-out duration-500`}
        >
          <JetIcon />
        </button>
      </abbr>
    </>
  );
}
