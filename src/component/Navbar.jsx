import { useState } from "react";
import ArrowSign from "./ArrowSign";
import Buttonbg from "./Buttonbg";
import ButtonOutline from "./ButtonOutline";
import Container from "./Container";
import Logo from "./Logo";
import MyLink from "./MyLink";
import { MdOutlineClose } from "react-icons/md";
import { RiMenuUnfold2Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/coverage", label: "Coverage" },
    { to: "/about-us", label: "About Us" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <div className="fixed top-0 left-0 w-full z-999 transition-all duration-300">
      <Container>
        <div className="w-full flex items-center justify-between bg-white h-18 px-2 md:px-4 lg:px-8 rounded-lg ">
          {/* logo area  */}
          <Logo></Logo>
          {/* menu area  */}
          <nav className="hidden lg:flex">
            <ul className="flex gap-4 xl:gap-8">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <MyLink to={to}>{label}</MyLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* call to action button  */}
          <div className="hidden sm:flex flex items-center gap-1 sm:gap-2">
            <ButtonOutline to={"/login"} text="Sign In"></ButtonOutline>
            <div className="flex items-center group">
              <Buttonbg to={"/register"} text="Sign Up"></Buttonbg>
              <ArrowSign></ArrowSign>
            </div>
          </div>
          {/* menu button  */}
          <div className="md:hidden z-50">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <RiMenuUnfold2Line className="text-2xl cursor-pointer text-bg1" />
              ) : (
                <MdOutlineClose className="text-2xl cursor-pointer text-baseColor" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu  */}
        <div
          className={`lg:hidden absolute top-0 left-0 w-full bg-bg1 min-h-screen transition-transform duration-300 z-40 ${
            menuOpen ? " translate-x-full" : "traslate-x-0"
          }`}
        >
          <ul className="flex flex-col justify-center items-center py-20 gap-5">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <MyLink onClick={() => setMenuOpen(!menuOpen)} to={to}>
                  {label}
                </MyLink>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <ButtonOutline
              className="text-white hover:outline-0"
              text="Sign In"
              to="/login"
            ></ButtonOutline>
            <div className="flex items-center group">
              <Buttonbg to={"/register"} text="Sign Up"></Buttonbg>
              <ArrowSign></ArrowSign>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
