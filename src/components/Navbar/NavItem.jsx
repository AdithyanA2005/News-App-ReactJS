import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavItem(props) {
  return (
    <>
      <NavLink
        className="hover:scale-105 ease-in-out duration-300 text-center text-gray-600 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white"
        to={props.url}
      >
        {props.title}
      </NavLink>
    </>
  );
}

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
