import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import CountDown from "./CountDown";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main
      id="hero-section"
      className="relative flex flex-col items-center justify-center min-h-screen hero-main-center hero-section"
    >
      {" "}
      {/* Removed overflow-hidden */}
      {/* Floating particles and other stuff */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="shimmer-dot shimmer-dot-1"></div>
      <div className="shimmer-dot shimmer-dot-2"></div>
      <div className="shimmer-dot shimmer-dot-3"></div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full min-h-0 hero-flex-vertical">
        <div
          className="flex flex-col items-center justify-center flex-1 w-full min-h-0 gap-0 sm:gap-0 desktop-no-gap"
          style={{ gap: 0 }}
        >
          {/* Topline */}
          <div
            className="text-center z-20 w-full"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.3s both",
            }}
          >
            <div className="flex items-center justify-center w-full mx-auto mt-4 mb-16 px-2 sm:my-4 sm:px-4">
              <img
                src="/assets/images/top_line.png"
                alt="The JT Arts Council presents"
                className="h-8 w-[clamp(17rem,90vw,22rem)] max-w-[95vw] object-cover object-center sm:h-[clamp(2rem,4vw,2.75rem)] sm:w-[clamp(12rem,34vw,22rem)] sm:max-w-[70vw]"
              />
            </div>
          </div>

          {/* Logo */}
          <div
            className="relative z-10 flex w-full -translate-y-14 items-center justify-center sm:-translate-y-3 sm:px-10 sm:py-16"
            style={{
              animation: "fadeIn 0.8s ease-out 1.0s both",
            }}
          >
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="h-auto max-h-[40vh] w-auto object-contain sm:max-h-[300px]"
              style={{
                animation: "paintReveal 2.5s ease-in-out 1.5s both",
              }}
            />
          </div>

          {/* Countdown Timer */}
          <div
            className="z-30 flex items-center justify-center w-full mb-6 mt-[-2.5rem] sm:mt-[-4rem]"
            style={{
              animation: "fadeInUp 1.2s ease-out 2s both",
            }}
          >
            <CountDown />
          </div>

          {/* Navbar inside Hero for home page */}
          <div
            className="z-50 flex items-center justify-center w-full overflow-visible"
            style={{
              animation: "fadeInUp 1.2s ease-out 2.2s both",
            }}
          >
            <Navbar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
