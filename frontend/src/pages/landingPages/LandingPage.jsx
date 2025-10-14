import React from "react";
import section5Img1 from "../../assets/images/section-5-img-1.png";
import section5Img2 from "../../assets/images/section-5-img-2.png";
import section5Img3 from "../../assets/images/section-5-img-3.png";
import section5Img4 from "../../assets/images/section-5-img-4.png";
import section5Img5 from "../../assets/images/section-5-img-5.png";
import section5Img6 from "../../assets/images/section-5-img-6.png";
import section5Img7 from "../../assets/images/section-5-img-7.png";
import Contact from "../../componets/landingPages/Contact";
import {
  appDevBanner,
  appLandingAbout,
  webDevBanner,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import LandingServices from "../../componets/landingPages/LandingServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Portfolio from "../../componets/common/Portfolio";
import ContactForm from "../../componets/common/ContactForm";
import BrandLogos from "../../componets/common/BrandLogos";
import { landingPageContent } from "../../data/servicesPageDetalls";

export const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const selectedService = landingPageContent.find((item) => item.id === page);

  return (
    <>
      <div id="banner" className="min-h-screen relative">
        <img
          src={selectedService?.bannerImg}
          className="w-full h-full object-cover object-right absolute"
          alt=""
        />
        <div className="bg-gradient-to-r from-black/70 to-primary/60 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="min-h-screen pt-[8rem] pb-[4rem] sm:py-[3rem] wrapper flex items-center"
        >
          <div className="relative sm:translate-y-[3rem] z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              {/* {isWebDevelopment ? "Web Development" : "App Development"} */}
              {selectedService?.title}
            </div>
            <h1 className="heading-1 text-white">
              {/* {isWebDevelopment
                ? "Transforming Ideas into Seamless Web Experiences"
                : "Creating Seamless App Experiences for a Digital World"} */}{" "}
              {selectedService?.title}
              {selectedService?.bannerHeading}
            </h1>
            <p className="text-white desc">
              {/* {isWebDevelopment
                ? "High-performance web development services designed to create secure, scalable, and user-friendly websites that enhance your business's digital presence."
                : "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience."} */}
              {selectedService?.bannerDesc}
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Get Started
            </ScrollLink>
          </div>
        </div>
      </div>

      <ContactForm />

      <section id="about" className="pb-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          {/* {isWebDevelopment ? "Web Development" : "App Development"}
           */}
          {selectedService?.title}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                {/* {isWebDevelopment
                  ? "Transforming Your Vision into Cutting-Edge Web Solutions"
                  : "Crafting Intuitive Apps for the Modern Digital Era"} */}
                {selectedService?.aboutHeading}
              </h2>
              <p className="desc">
                {/* {isWebDevelopment
                  ? "At Dots&Decimals Infotech, we craft high-performance websites and digital experiences designed to elevate your online presence. From custom development to responsive design, our solutions are built for usability, aesthetics, and business success."
                  : "At Dots&Decimals Infotech, we develop innovative, high-performance mobile applications tailored to your business needs. With a blend of technical expertise and creative design, we build apps that enhance user engagement and drive business growth."} */}
                {selectedService?.aboutDesc}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={selectedService?.aboutImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>

      <LandingServices page={page} />
      <WhyChooseUs />
      <Portfolio page={page} />

      <section className="py-20 bg-black text-white">
        <div className="wrapper text-center flex flex-col gap-4">
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto mb-4"
          >
            Our Expertise
          </div>
          <h1
            data-aos="fade-up"
            className="heading-1 bg-gradient-to-r md:min-h-[5rem] from-primary to-secondary bg-clip-text text-transparent"
          >
            {/* {page === "web-development"
              ? "Web Development That Transforms"
              : "App Development That Delivers"} */}
            {selectedService.expertiseHeading}
          </h1>
          <p
            data-aos="fade-up"
            className="desc max-w-3xl mx-auto leading-relaxed"
          >
            {/* {page === "web-development"
              ? `At Dots&Decimals Infotech, we craft digital experiences that do more than just look good - they drive results. 
        In today's competitive online landscape, your website needs to be fast, intuitive, and conversion-optimized. 
        We build responsive, secure websites that not only establish your brand's credibility but also work tirelessly 
        to generate leads and grow your business. From lightning-fast load times to seamless user journeys, we engineer 
        every element for maximum impact.`
              : `At Dots&Decimals Infotech, we create mobile experiences that users love and businesses rely on. 
        In an era where mobile dominates digital interactions, your app needs to be performant, engaging, and reliable. 
        We develop native and cross-platform applications that deliver smooth performance, intuitive interfaces, 
        and features that keep users coming back. From initial concept to post-launch optimization, we build apps 
        that solve real business challenges and drive measurable results.`} */}
            {selectedService.expertiseDesc}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-secondary/80 to-primary/80 md:from-secondary/30 md:to-primary/30 overflow-hidden h-[70vh] relative flex items-center">
        <div className="wrapper">
          <div className="flex justify-center md:justify-normal gap-5">
            <div className="absolute -z-10 md:z-10 md:relative flex gap-5">
              <div
                data-aos="fade-up"
                id="to-top"
                className="flex flex-col -translate-y-[20%]"
              >
                <img
                  src={section5Img1}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img2}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img3}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
              <div
                data-aos="fade-up"
                id="to-bottom"
                className="flex flex-col translate-y-[20%]"
              >
                <img
                  src={section5Img4}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img5}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img6}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex z-10 flex-col gap-5 justify-center ml-10 text-white"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                Design
              </h2>
              <div className="flex items-center gap-2">
                <img
                  src={section5Img7}
                  className="sm:flex hidden h-[3rem] lg:h-[5rem] object-contain"
                  alt=""
                />
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                  & Recreate
                </h2>
              </div>
              <p className="desc text-white/70">
                Leverage your existing marketing platforms and sync the data
                seamlessly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Faqs /> */}

      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <BrandLogos />
      <Contact />
    </>
  );
};
