import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav.jsx";

const Header = () => {
  const [isActive, setActive] = useState(false);

  window.onresize = (e) => {
    window.innerWidth >= 845 && setActive(false);
  };

  window.onscroll = (e) => {
    window.scrollY >= 550 && setActive(false);
  };

  return (
    <header className=" layout flex-row justify-between items-center gap-14 p-4">
      <div className="flex">
        <object data={logo} type="image/svg+xml"></object>
        <p className="text-body-md font-semibold m-2">CRAPPO</p>
      </div>

      {isActive ? (
        <button
          className="md:hidden absolute right-4 top-6 z-30"
          onClick={(e) => setActive(!isActive)}
        >
          <i className="fas fa-times fa-2x"></i>
        </button>
      ) : (
        <button className="md:hidden" onClick={(e) => setActive(!isActive)}>
          <i className="fas fa-bars fa-2x "></i>
        </button>
      )}

      {isActive ? (
        <AnimatePresence>
          <motion.div
            key="nav"
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
            exit={{ opacity: 0, x: "100vw" }}
            className="absolute right-0 top-0 min-h-screen w-full p-8 grid place-content-center text-center bg-secondary z-20 text-body-lg"
          >
            <Nav
              custom=""
              navStyle="grid gap-8"
              authStyle="mt-12 mb-4  gap-8"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <Nav custom="hidden md:flex" navStyle="" authStyle="" />
      )}
    </header>
  );
};

export default Header;
