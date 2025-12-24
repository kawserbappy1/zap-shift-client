import { NavLink } from "react-router";

const MyLink = ({ to, className, children, onClick }) => {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) =>
        isActive ? "text-baseColor font-semibold" : `text-base ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
