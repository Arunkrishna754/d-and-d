import React from "react";
import { Link } from "react-router-dom";
import { companyDetails, logoImg, routes } from "../constant";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import LandingFooter from "../componets/landingPages/LandingFooter";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-primary/20">
      <div className="py-4 top-0 w-full bg-black/20 backdrop-blur-md z-50 text-white">
        <div className="wrapper flex justify-between items-center gap-10">
          <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
            <Link to="/" className="cursor-pointer relative">
              <img
                src={logoImg}
                className="w-[4rem] sm:w-[5rem] scale-125"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper h-full flex flex-col items-center py-[10rem] gap-3 text-white text-center">
        <h1 className="heading-1">Thank You!</h1>
        <p className="desc">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link to="/" className="primary-btn w-fit mt-4">
          Home
        </Link>
      </div>
      <LandingFooter />
    </div>
  );
};

export default Thankyou;
