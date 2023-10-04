import { Link } from "react-router-dom";
import logo from "./assets/logo-ilustrografia.png";
import Dropdown from "./Dropdown";
import { useState } from "react";
import HoverMenuButton from "./HoverMenuButton";
import DropdownProjects from "./DropdownProjects";

type Props = {
  mobile: boolean;
};

const MainLinks = ({ mobile }: Props) => {

  return (
    <>
      <Link
        role="navigation"
        className="border-red-magic text-sm font-semibold uppercase hover:scale-110  hover:border-b-2 hover:text-red-magic hover:transition hover:duration-500"
        to="/"
      >
        Home
      </Link>
      <Link
        role="navigation"
        className="border-red-magic text-sm font-semibold uppercase hover:scale-110  hover:border-b-2 hover:text-red-magic hover:transition hover:duration-500"
        to="/illustrations"
      >
        Illustrations
      </Link>

        <DropdownProjects />




      <Link role="navigation" to="/" className={mobile ? "hidden" : ""}>
        <img
          className="h-20 transition duration-500 hover:-translate-y-1 hover:scale-105 dark:invert"
          src={logo}
          alt="logo-ilustrografia"
        />
      </Link>
      <Link
        role="navigation"
        className="border-red-magic text-sm font-semibold uppercase hover:scale-110  hover:border-b-2 hover:text-red-magic hover:transition hover:duration-500"
        to="/shop"
      >
        Shop
      </Link>
      <Link
        role="navigation"
        className="border-red-magic text-sm font-semibold uppercase hover:scale-110  hover:border-b-2 hover:text-red-magic hover:transition hover:duration-500"
        to="/about-us"
      >
        About
      </Link>
      <Link
        role="navigation"
        className="border-red-magic text-sm font-semibold uppercase hover:scale-110  hover:border-b-2 hover:text-red-magic hover:transition hover:duration-500"
        to="/contact"
      >
        Contact
      </Link>
    </>
  );
};
export default MainLinks;
