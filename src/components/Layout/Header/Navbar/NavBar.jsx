// import React from 'react'
import { Link } from "react-router-dom";
import menu from "../../../../assets/vector/menu.svg";
import close from "../../../../assets/vector/close.svg";
import { useState } from "react";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className=" hidden md:flex md:flex-row md:gap-5 md:items-center">
        <Link to="/" className="hover:text-blue-400 capitalize">
          Home
        </Link>
        <Link to="about" className="hover:text-blue-400 capitalize">
          About
        </Link>
        <Link to="Experience" className="hover:text-blue-400 capitalize">
          Experience
        </Link>
        <Link to="projets" className="hover:text-blue-400 capitalize">
          Projets
        </Link>
        <Link to="contact" className="hover:text-blue-400 capitalize">
          Contact
        </Link>
      </div>
      {nav && (
        <div className=" z-10 flex flex-col justify-center items-center gap-10 fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-800">
          <Link
            to="/"
            className="hover:text-blue-400 capitalize"
            onClick={() => setNav(!nav)}
          >
            Home
          </Link>
          <Link
            to="about"
            className="hover:text-blue-400 capitalize"
            onClick={() => setNav(!nav)}
          >
            About
          </Link>
          <Link
            to="Experience"
            className="hover:text-blue-400 capitalize"
            onClick={() => setNav(!nav)}
          >
            Experience
          </Link>
          <Link
            to="projets"
            className="hover:text-blue-400 capitalize "
            onClick={() => setNav(!nav)}
          >
            Projets
          </Link>
          <Link
            to="contact"
            className="hover:text-blue-400 capitalize"
            onClick={() => setNav(!nav)}
          >
            Contact
          </Link>
        </div>
      )}

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer block z-10 md:hidden "
      >
        {nav ? (
          <img src={close} alt="close" className="h-[30px] w-[30px]" />
        ) : (
          <img src={menu} alt="menu" className="h-[30px] w-[30px]" />
        )}
      </div>
    </>
  );
}
