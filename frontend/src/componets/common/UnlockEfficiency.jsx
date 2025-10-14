import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[5rem] text-white bg-[#101010]">
      <div data-aos="fade-up" className="wrapper flex flex-col text-white items-center gap-5 text-center">
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2">Unlock Efficiency with Dots&Decimals</h2>
        <p className="desc max-w-[40rem] text-center">
          We are a leading provider of cutting-edge technology solutions,
          delivering innovative digital solutions to help organizations thrive in
          the rapidly evolving digital landscape.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">Contact Us</Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
