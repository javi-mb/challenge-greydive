import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineMenu,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineClose,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const changeMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };
  return (
    <div className="h-20 w-full bg-[#082338] absolute">
      <NavLink
        to="/"
        className="text-gray-300 w-5/12 md:w-6/12 text-4xl absolute top-5 left-5 md:top-10 md:left-28"
      >
        challenge <span className="font-bold">greydive.</span>
      </NavLink>
      <AiOutlineMenu
        onClick={changeMenu}
        className="md:hidden absolute right-5 top-10 w-10 h-10"
        color="white"
      />
      <div className="hidden md:flex absolute md:right-24 md:top-10 gap-5">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/javiermartinezblanco/"
        >
          <AiFillLinkedin color="white" className="w-10 h-10" />
        </a>
        <a target="_blank" href="https://github.com/javi-mb">
          <AiFillGithub color="white" className="w-10 h-10" />
        </a>
        <a href="mailto:jh.martinezblanco@gmail.com">
          <HiMail color="white" className="w-10 h-10" />
        </a>
      </div>
      <div
        className={`flex flex-col justify-between w-full h-screen fixed z-10 bg-[#082338] duration-700
          ${openMenu ? null : " translate-x-full"}
        `}
      >
        <AiOutlineClose
          color="white"
          className="w-10 h-10 relative top-10 left-5"
          onClick={changeMenu}
        />
        <div className="flex flex-col gap-5">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/javiermartinezblanco/"
            className="flex w-full justify-center gap-5 py-5 bg-[#063254] text-white font-bold items-center"
          >
            <AiFillLinkedin color="white" className="w-10 h-10" /> LinkedIn
          </a>
          <a
            target="_blank"
            href="https://github.com/javi-mb"
            className="flex w-full justify-center gap-5 py-5 bg-[#063254] text-white font-bold items-center"
          >
            <AiFillGithub color="white" className="w-10 h-10" /> GitHub
          </a>
          <a
            target="_blank"
            href="mailto:jh.martinezblanco@gmail.com"
            className="flex w-full justify-center gap-5 py-5 bg-[#063254] text-white font-bold items-center"
          >
            <HiMail color="white" className="w-10 h-10" /> Mail
          </a>
        </div>
        <div className="h-24 flex items-center justify-center">
          <p className="text-white">Realizado por Javier Martinez</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
