import { useState } from "react";
import ArrowSign from "./ArrowSign";
import Buttonbg from "./Buttonbg";
import ButtonOutline from "./ButtonOutline";
import Container from "./Container";
import Logo from "./Logo";
import MyLink from "./MyLink";
import { MdOutlineClose } from "react-icons/md";
import { RiMenuUnfold2Line } from "react-icons/ri";
import useAuth from "./../hooks/useAuth";
import { Link } from "react-router";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOutUser } = useAuth();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/coverage", label: "Coverage" },
    { to: "/about-us", label: "About Us" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/be-rider", label: "Be Rider" },
  ];

  const handleLogoutUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        logOutUser()
          .then(() => {
            Swal.fire(
              "Logged Out!",
              "You have been successfully logged out.",
              "success"
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
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
          <div className="flex items-center gap-1 sm:gap-2">
            {user ? (
              <>
                <div className="relative group">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-bg-1 bg-gray-400 cursor-pointer ">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} alt="" />
                    ) : (
                      <div className="flex items-center justify-center w-ful h-full">
                        <FaRegUser className="text-bg1" />
                      </div>
                    )}
                  </div>
                  <div className="absolute right-0  w-52 bg-white rounded-md shadow-2xl border border-gray-200 p-2 overflow-hidden z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <ul className="">
                      <li className="border-b border-gray-100 pb-1 mb-2  font-bold hover:bg-gray-200">
                        <h3>{user?.displayName || "User"}</h3>
                        <p className="text-xs">{user?.email}</p>
                      </li>
                      <li className="flex items-center gap-2 text-bg1 font-bold border-b border-b-gray-100 mb-1 pb-1 hover:bg-gray-200">
                        <CgMenuGridO />
                        <Link to={"/"}>Dashboard</Link>
                      </li>
                      <li className="flex items-center gap-2 text-bg1 font-bold border-b border-b-gray-100 mb-1 pb-1 hover:bg-gray-200">
                        <FaUserEdit />
                        <Link to={"/"}>Edit Profile</Link>
                      </li>
                      <li className="flex items-center gap-2 text-bg1 font-bold hover:bg-gray-200">
                        <IoMdLogOut />
                        <button
                          onClick={handleLogoutUser}
                          className=" cursor-pointer"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <ButtonOutline
                  to={"/login"}
                  text="Sign In"
                  className="hidden sm:flex"
                ></ButtonOutline>
                <div className="flex items-center group">
                  <Buttonbg
                    to={"/register"}
                    text="Sign Up"
                    className="hidden sm:flex"
                  ></Buttonbg>
                  <ArrowSign className="hidden sm:flex"></ArrowSign>
                </div>{" "}
              </>
            )}
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
