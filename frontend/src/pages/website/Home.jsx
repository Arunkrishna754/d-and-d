import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[7rem] sm:pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 justify-center h-full text-white flex flex-col items-center gap-5 text-center max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              Welcome to Dots&Decimals Infotech
            </div>
            <h1 className="heading-1">Shaping the Future with Technology</h1>
            <p className="desc">
              We are a leading provider of cutting-edge technology solutions,
              delivering innovative digital solutions to help organizations
              thrive in the rapidly evolving digital landscape.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Enhancing Operational Efficiency with Innovative Technology.
              </h2>
              <p className="desc">
                At Dots&Decimals Infotech, we are driven by a passion for
                delivering innovative and impactful solutions that help
                businesses thrive in today’s digital world. Whether you need a
                custom website, a next-gen mobile app, or solutions in emerging
                technologies like AI, blockchain, and AR/VR, we are here to help
                you achieve your goals and stay ahead of the competition.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
              <Link to="/products" className="secondary-btn">
                Products
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutUsImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section className="py-[5rem] bg-black text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-primary max-w-[50rem] mx-auto to-secondary bg-clip-text text-transparent">
            Your Trusted Partner for Digital Transformation
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            We are a leading provider of cutting-edge technology solutions,
            delivering innovative digital solutions to help organizations thrive
            in the rapidly evolving digital landscape. At Dots&Decimals
            Infotech, we are passionate about helping businesses navigate the
            digital landscape and stay ahead of the curve. Our team of
            experienced professionals is dedicated to delivering customized
            solutions that meet the unique needs of our clients.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};

export default Home;
