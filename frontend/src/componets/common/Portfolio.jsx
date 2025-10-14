import React from "react";
import { appPortfolio, webPortfolio } from "../../constant";

const Portfolio = ({ page }) => {
  const isWebDevelopment = page === "web-development";
  const isAppDevelopment = page === "app-development";
  const portfolio = isWebDevelopment
    ? webPortfolio
    : isAppDevelopment
    ? appPortfolio
    : [];
  const isOddCount = portfolio.length % 2 !== 0;
  const lastItem = portfolio[portfolio.length - 1];

  return (
    <div id="portfolio" className="bg-[#101010] text-white py-20">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5 text-white">
          <div className="gradient-rounded-text-box">Our Work</div>
          <h2 className="heading-2 text-center mb-8">
            {isWebDevelopment
              ? "Web Development Showcase"
              : isAppDevelopment
              ? "App Development Portfolio"
              : ""}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            {portfolio.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className={`flex flex-col gap-3 rounded-lg overflow-hidden relative group w-full
                  ${
                    isOddCount && item.id === lastItem.id
                      ? "md:col-span-2 lg:col-span-1 lg:mx-auto lg:max-w-md"
                      : ""
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent text-white">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  {item.category && (
                    <p className="text-sm text-primary">{item.category}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
