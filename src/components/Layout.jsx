import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import LoaderContext from "../context/Loader/LoaderContext";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";

export default function Layout() {
  const loader = useContext(LoaderContext);
  return (
    <>
      <div className="relative bg-slate-200 dark:bg-slate-900 min-h-screen">
        <LoadingBar
          color="#f11946"
          progress={loader.progress}
          onLoaderFinished={() => loader.setProgress(0)}
        />
        <Navbar />
        <main className="pt-20 mx-auto max-w-7xl w-11/12">
          <Outlet />
        </main>
        <BackToTop />
      </div>
    </>
  );
}
