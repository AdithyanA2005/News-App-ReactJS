import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Spin } from "./spin.svg";

export default function Spinner(props) {
  return (
    <>
      <div
        className={`flex justify-center items-center ${
          props.isFull
            ? "bg-slate-200 opacity-70 backdrop-blur-md dark:bg-slate-900 fixed top-0 left-0 right-0 h-screen"
            : "p-3"
        }`}
      >
        <Spin
          className={`rounded-full animate-spin mr-2 text-gray-400 dark:text-gray-600 fill-blue-600 ${
            props.isFull ? "w-12 h-12" : "w-10 h-10"
          }`}
        />
      </div>
    </>
  );
}

Spinner.defaultProps = {
  isFull: false,
};

Spinner.propTypes = {
  isFull: PropTypes.bool,
};
