import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_0%] h-full w-full"
          alt=""
        />
      </div>
      <div className="pt-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <div className="mt-[3rem] grid md:grid-cols-2 gap-5">
            <div
              data-aos="fade-right"
              className="h-full flex items-center overflow-hidden rounded-lg"
            >
              <img
                src={aboutUsPageImg}
                className="scale-125 w-full object-cover"
                alt="about us"
              />
            </div>
            <div data-aos="fade-left" className="h-full">
              <h2 className="heading-2 text-start mb-3">About Us</h2>
              <p className="desc text-start">
                At Dots&Decimals Infotech, we are driven by a passion for
                delivering innovative and impactful solutions that help
                businesses thrive in today's digital world. We are a team of
                passionate developers, engineers, and designers specializing in
                web development, mobile app development, AI solutions, cloud
                computing, blockchain, AR/VR, IoT, and enterprise software
                solutions. We transform innovative ideas into impactful digital
                experiences, delivering exceptional results on time, every time.
                <br />
                <br />
                We create modern, responsive websites, high-performance mobile
                apps, intelligent AI solutions, secure blockchain applications,
                and immersive AR/VR experiences. Our comprehensive services also
                include robust cloud computing solutions, innovative IoT
                implementations, and streamlined enterprise systems. Our skilled
                professionals stay ahead of industry trends to offer
                cutting-edge solutions, prioritizing on-time delivery, quality,
                and a client-centric approach.
                <br />
                <br />
                Whether you need a custom website, a next-gen mobile app, or
                solutions in emerging technologies like AI, blockchain, and
                AR/VR, we are here to help you achieve your goals and stay ahead
                of the competition. We believe in building long-term
                relationships by delivering tailored solutions that align with
                your business objectives. Our commitment to excellence ensures
                products that are innovative, secure, and optimized for peak
                performance. Let's build something great together—your digital
                transformation is our mission.
              </p>
            </div>
          </div>
          <h2 data-aos="fade-up" className="heading-2 mt-[4rem]">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            We are a leading provider of cutting-edge technology solutions,
            delivering innovative digital solutions to help organizations thrive
            in the rapidly evolving digital landscape.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation as Our Foundation
                  </h6>
                  <p className="desc mt-2">
                    At Dots&Decimals Infotech, innovation isn't just a
                    goal—it’s our DNA. We continuously embrace new technologies
                    to craft solutions that drive efficiency, enhance user
                    experiences, and redefine industries.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation as Our Foundation"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Tailored for Your Success"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Tailored for Your Success
                  </h6>
                  <p className="desc mt-2">
                    No two businesses are the same, and neither are our
                    solutions. We take a deeply personalized approach,
                    ensuring that every strategy aligns perfectly with your
                    unique goals and challenges.
                  </p>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Quality Beyond Expectations
                  </h6>
                  <p className="desc mt-2">
                    We set the bar high when it comes to quality. Our
                    solutions are rigorously tested for security, scalability,
                    and reliability, ensuring they meet global standards and
                    drive lasting success.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Quality Beyond Expectations"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Impact"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation with Impact
                  </h6>
                  <p className="desc mt-2">
                    We transform technology into growth opportunities.
                    Whether it’s optimizing operations, elevating customer
                    interactions, or unlocking new business potential, we
                    create solutions that make a difference.
                  </p>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Comprehensive Digital Solutions
                  </h6>
                  <p className="desc mt-2">
                    From concept to deployment and beyond, we offer
                    end-to-end IT services. Whether you're launching your
                    digital presence, streamlining workflows, or developing
                    immersive experiences, we’re here every step of the way.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="Comprehensive Digital Solutions"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="wrapper mt-[5rem]">
          <h2 data-aos='fade-up' className="heading-2">Why Choose Dots&Decimals Infotech?</h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
          {whyChooseUsContent.map((item) => (
            <li data-aos='fade-up' key={item.id} className="text-primary">
            <span className="font-raleway font-bold">{item.title}:</span>{" "}
            <span className="desc text-white ml-1">{item.desc}</span>
            </li>
            ))}
            </ul>
        </div> */}
      </div>
      <UnlockEfficiency />
      {/* <OurServices length={3} /> */}
      {/* <Testimonials/> */}
    </>
  );
};

export default AboutUs;
