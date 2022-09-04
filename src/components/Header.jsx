import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-14 p-4">
      <div className="flex">
        <object data={logo} type="image/svg+xml"></object>
        <p className="text-body-md font-semibold m-2">CRAPPO</p>
      </div>

      <nav className="hidden md:flex ">
        <ul>
          <a href="#">Products</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
        <ul className="font-medium">
          <a href="#">Login</a>
          <a href="#" className="rounded-[32px] px-8 py-3 bg-accent">
            Register
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
