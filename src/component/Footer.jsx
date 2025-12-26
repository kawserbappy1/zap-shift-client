import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import MyLink from "./MyLink";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
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
    <Container>
      <div className="bg-bg2 py-10">
        <div className="flex flex-col items-center gap-6">
          <Logo></Logo>
          <p className="text-white max-w-xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <div className=" border-b border-t border-dashed py-4 text-center">
            <ul className="flex gap-4 xl:gap-8">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <MyLink to={to}>{label}</MyLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-5">
            <button className="w-8 h-8 bg-baseColor rounded-full flex items-center justify-center text-bg1 cursor-pointer">
              <FaFacebookF />
            </button>
            <button className="w-8 h-8 bg-baseColor rounded-full flex items-center justify-center text-bg1 cursor-pointer">
              <BsTwitterX />
            </button>
            <button className="w-8 h-8 bg-baseColor rounded-full flex items-center justify-center text-bg1 cursor-pointer">
              <FaLinkedinIn />
            </button>
            <button className="w-8 h-8 bg-baseColor rounded-full flex items-center justify-center text-bg1 cursor-pointer">
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
