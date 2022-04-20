import React, { Component } from "react";
import Spin from "./Spin";

export default class Spinner extends Component {
  componentDidMount() {
    document.documentElement.style.overflowY = "hidden";
  }

  componentWillUnmount() {
    document.documentElement.style.overflowY = "scroll";
  }

  render() {
    return (
      <>
        <div className="bg-slate-200 opacity-70 backdrop-blur-md dark:bg-slate-900 fixed top-0 left-0 right-0  h-screen flex justify-center items-center">
          <Spin />
        </div>
      </>
    );
  }
}
