import { Link } from "react-router";
import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="Zap Shift" className="w-20 sm:w-30" />
    </Link>
  );
};

export default Logo;
