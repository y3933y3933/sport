import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <li className="list-none p-2  hover:text-primary-2 font-semibold">
      {!props.subMenu && (
        <NavLink
          to={props.route}
          className={({ isActive }) => (isActive ? "text-primary-2" : "text-primary-1")}
        >
          {props.text}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItem;
