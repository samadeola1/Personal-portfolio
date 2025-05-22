import React, { useState } from "react";
import robertLogo from "../assets/robert garcia logo.svg";
import mobileNavLogo from "../assets/mobileNavLogo.svg";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header>
      <main>
        <section className="flex justify-between items-center md:px-12 md:py-6 px-2 py-4">
          {/* Logo */}
          <RouterLink to="/">
            <div>
              <img src={robertLogo} alt="robertLogo" />
            </div>
          </RouterLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 leading-[150%] font-Manrope ">
              <Link to="projects" smooth={true} duration={500}>
                <li className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A] transition-all">
                  work
                </li>
              </Link>

              <RouterLink to="about-me">
                <li className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A] transition-all">
                  About
                </li>
              </RouterLink>

              <Link to="connect" smooth={true} duration={500}>
                <li className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A] transition-all ">
                  Contact
                </li>
              </Link>
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileNav}>
              <img src={mobileNavLogo} alt="mobileNavLogo" />
            </button>
          </div>
        </section>

        {/* Mobile Navigation */}
        {isMobileNavVisible && (
          <nav className="md:hidden bg-[#0A0A0A] text-white text-center px-12 py-4">
            <ul className="flex flex-col gap-4">
              <Link to="projects" smooth={true} duration={500}>
                <li className="text-[#C7C7C7]cursor-pointer hover:text-[#D3E97A] transition-all">work</li>
              </Link>

              <RouterLink to="about-me">
                <li className="text-[#C7C7C7]cursor-pointer hover:text-[#D3E97A] transition-all">About</li>
              </RouterLink>

              <Link to="connect" smooth={true} duration={500}>
                <li className="text-[#C7C7C7]cursor-pointer hover:text-[#D3E97A] transition-all">Contact</li>
              </Link>
            </ul>
          </nav>
        )}
      </main>
    </header>
  );
};

export default Navbar;