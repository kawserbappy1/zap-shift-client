import React from "react";
import Logo from "../component/Logo";
import { Outlet } from "react-router";
import img from "../assets/auth/auth.png";
import Container from "../component/Container";

const AuthLayouts = () => {
  return (
    <Container>
      <div className="flex min-h-screen justify-between bg-white ">
        <div className="flex-1">
          <div className="pl-5 pt-5">
            <Logo></Logo>
          </div>
          <div className="grid place-items-center min-h-[calc(100vh-60px)]">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="flex-1 grid place-items-center bg-[#FAFDF0]">
          <img src={img} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default AuthLayouts;
