import { Link } from "react-router";

const ButtonOutline = ({ to, onClick, text, className }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`border cursor-pointer border-bg px-3 py-2 md:px-6 md:py-3 rounded-md text-bg2 font-bold transition-all duration-300 hover:bg-baseColor ${className}`}
    >
      {text}
    </Link>
  );
};

export default ButtonOutline;
