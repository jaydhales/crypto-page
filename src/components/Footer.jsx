import React from "react";
import logo from "../assets/logo.svg";
import mastercard from "../assets/Mastercard.png";
import visa from "../assets/Visa.png";
import bitcoin from "../assets/Bitcoin.png";

const Footer = () => {
  return (
    <footer className="layout block ">
      <div className="md:grid gap-8 text-center sm:text-left md:grid-cols-6 lg:grid-cols-9 md:place-items-start">
        <div className="mx-auto  mb-8 md:m-0 w-max flex col-span-2 ">
          <object data={logo} type="image/svg+xml"></object>
          <p className="text-body-md font-semibold m-2">CRAPPO</p>
        </div>
        <div className="col-span-4 w-full flex flex-col sm:flex-row  justify-between md:justify-evenly gap-8">
          <nav className="grid gap-2 ">
            <p className="text-body-lg font-medium mx-4 mb-4">Quick Link</p>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
          </nav>

          <nav className="grid gap-2 ">
            <p className="text-body-lg font-medium mx-4 mb-4">Resources</p>
            <a href="#">Download Whitepaper</a>
            <a href="#">Smart Token</a>
            <a href="#">Blockchain Explorer</a>
            <a href="#">Crypto API</a>
            <a href="#">Interest</a>
          </nav>
        </div>

        <div className="mt-8 lg:mt-0 col-span-full lg:col-span-3">
          <h3>We accept following payment systems</h3>
          <div className="mt-6 flex justify-between">
            {[visa, mastercard, bitcoin].map((png) => (
              <img src={png} alt={png} className="" key={png} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row  sm:justify-between gap-4 pt-8">
        <p>©2021 CRAPPO. All rights reserved</p>
        <div className="flex w-max gap-8 text-head-3">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
