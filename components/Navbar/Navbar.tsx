import React from "react";
import NavSearch from "./NavSearch";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import LinkDropDown from "./LinkDropDown";

const Navbar = () => {
  return (
    <nav className="border-b ">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinkDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
