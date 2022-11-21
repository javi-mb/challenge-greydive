import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import Menu from "./Menu";

const redes = [
  {
    name: "LinkedIn",
    icon: AiFillLinkedin,
    url: "https://www.linkedin.com/in/javiermartinezblanco/",
  },
  {
    name: "GitHub",
    icon: AiFillGithub,
    url: "https://github.com/javi-mb",
  },
  {
    name: "Mail",
    icon: HiMail,
    url: "mailto:jh.martinezblanco@gmail.com",
  },
];

const Redes = () => (
  <div className="hidden md:flex absolute md:right-24 md:top-10 gap-5">
    {redes.map((red, i) => (
      <a key={i} target="_blank" href={red.url}>
        <red.icon color="white" className="w-10 h-10" />
      </a>
    ))}
  </div>
);

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
      <Redes />
      <Menu openMenu={openMenu} changeMenu={changeMenu} redes={redes} />
    </div>
  );
};

export default Navbar;
