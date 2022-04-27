import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function DropDownNavItem(props) {
  return (
    <>
      <abbr className="flex" title={`See ${props.title} news`}>
        <NavLink
          className="w-full h-full dark:text-gray-200 dark:hover:text-white dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-600 hover:text-gray-700 bg-slate-200 hover:bg-gray-300 p-3 text-center rounded-lg ease-in-out duration-500"
          to={props.url}
        >
          {props.title}
        </NavLink>
      </abbr>
    </>
  );
}

DropDownNavItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
