import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function MobNavItem(props) {
  return (
    <>
      <NavLink
        className="dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 bg-gray-200 hover:bg-gray-300 p-3 text-center rounded-lg ease-in-out duration-500"
        to={props.url}
      >
        {props.title}
      </NavLink>
    </>
  );
}

MobNavItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
