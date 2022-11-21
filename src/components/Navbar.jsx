import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-[#082338] absolute">
      <NavLink
        to="/"
        className="text-gray-300 w-5/12 md:w-6/12 text-4xl absolute top-5 left-5 md:top-10 md:left-28"
      >
        challenge <span className="font-bold">greydive.</span>
      </NavLink>
      <AiOutlineMenu
        className="md:hidden absolute right-5 top-10 w-10 h-10"
        color="white"
      />
    </div>
  );
};

export default Navbar;
