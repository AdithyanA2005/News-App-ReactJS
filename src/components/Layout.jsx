import React from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <div className="relative bg-slate-200 dark:bg-slate-900 min-h-screen">
        <Navbar />
        <main className="pt-20 mx-auto max-w-7xl w-11/12">
          <Outlet />
        </main>
        <BackToTop />
      </div>
    </>
  );
}
