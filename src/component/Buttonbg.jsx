import { Link } from "react-router";

const Buttonbg = ({ to, onClick, text }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={` bg-baseColor cursor-pointer px-3 py-2 md:px-6 md:py-3 rounded-md text-bg2 font-bold transition-all duration-300 hover:bg-baseColor/80 `}
    >
      {text}
    </Link>
  );
};

export default Buttonbg;
