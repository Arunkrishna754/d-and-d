// LandingHeader.jsx
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { companyDetails, logoImg } from "../../constant";
import { Link } from "react-router-dom";

const options = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] h-[4.5rem] flex items-center justify-between px-4 sm:px-6 rounded-[2rem] shadow-lg z-50 text-white"
         style={{
           background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
           backdropFilter: "blur(20px)",
           border: "1px solid rgba(255, 255, 255, 0.3)"
         }}>
      <div className="wrapper flex justify-between items-center gap-4 sm:gap-10 w-full">
        <div className="flex justify-between items-center gap-4 sm:gap-20 w-full pl-[1rem] lg:pl-0">
          <Scroll smooth={true} to="banner" className="cursor-pointer relative">
            <img
              src={logoImg}
              className="w-[3.5rem] sm:w-[4.5rem] scale-150" // Reduced size
              alt="logo"
            />
          </Scroll>
          <div className="hidden lg:flex items-center gap-6 sm:gap-10">
            {options.map((option) => {
              return option.path.includes("/") ? (
                <Link
                  to={`${option.path}`}
                  className="link text-xs sm:text-sm"
                  key={option.path}
                >
                  {option.name}
                </Link>
              ) : (
                <Scroll
                  to={`${option.path}`}
                  className="link text-xs sm:text-sm hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:backdrop-blur-lg hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border hover:border-white/30 hover:rounded-xl hover:px-4 hover:py-2 transition-all duration-300 hover:scale-110 hover:transform"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  activeClass="active-link"
                  style={{
                    transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)", // Smooth water-drop effect
                  }}
                >
                  {option.name}
                </Scroll>
              );
            })}
            <Link
              to={`tel:${companyDetails.phone}`}
              className="text-black font-medium cursor-pointer tracking-wide bg-primary hover:bg-primary/80 text-xs sm:text-sm hover:shadow-secondary hover:-translate-y-1 shadow-2xl shadow-transparent rounded-full px-4 sm:px-6 py-2 sm:py-3 min-w-[6rem] sm:min-w-[7rem] flex justify-center text-center transition-all duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/30 text-white transition-all duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
          }`}
          style={{
            transformOrigin: "center",
            background: "rgba(0, 0, 0, 0.3)", // Semi-transparent black
            backdropFilter: "blur(10px)", // Frosty effect
          }}
        >
          <div className="flex flex-col h-full pt-4">
            <div className="flex items-center justify-end w-full px-6 pb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-[1.5rem] hover:opacity-70 transition-opacity"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="flex flex-col  gap-4 px-6">
              {options.map(({ name, path }) => {
                return path.includes("/") ? (
                  <Link
                    to={`${path}`}
                    className="text-lg text-white font-medium transition-colors duration-300 hover:text-primary link"
                    key={path}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                ) : (
                  <Scroll
                    onClick={() => setIsOpen(false)}
                    key={path}
                    className="text-lg text-white font-medium transition-colors duration-300 hover:text-primary link cursor-pointer"
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    {name}
                  </Scroll>
                );
              })}
            </div>
          </div>
        </Drawer>
        <div
          className="block lg:hidden justify-self-end cursor-pointer"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="white"
            size={20}
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;