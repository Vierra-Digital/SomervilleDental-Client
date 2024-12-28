import React from 'react'
import smileGirl from '../assets/images/smileGirl.png'
import { ReactTyped } from 'react-typed';
export const Intro = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <div className="w-full bg-white">
        {/* Main container with max width */}
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-4">
          {/* Content wrapper */}
          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 py-4 md:py-6">
            {/* Left content container */}
            <div className="w-full md:w-1/2 flex flex-col items-start gap-6 justify-center">
              {/* Text content group */}
              <div className="flex flex-col gap-6">
                <h3 className="text-[#0d4e6e] text-lg font-semibold font-nunito leading-loose tracking-wide">
                  Quality Dental Health Is
                </h3>
                <h1 className="text-[#090909] text-4xl md:text-6xl font-normal font-elmessiri leading-tight">
                  <ReactTyped
                    strings={[
                      '',

                      'Comfortable And Traditional General And Cosmetic Dentistry',
                    ]}
                    typeSpeed={50}
                    fadeOut
                    backDelay={500}
                    startDelay={1000}
                    loop />
                </h1>
              </div>

              {/* Description text */}
              <p className="text-[#363636] text-lg md:text-xl font-normal font-nunito leading-relaxed">
                At Somerville Dental Associates, our dental staff strives
                <br />
                to make your experience
                as comfortable as possible to
                <br />
                ensure you get the quality dental care you require.
              </p>

              {/* Button group */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 w-full sm:w-auto">
                <button onClick={() => scrollToSection('contact')} className="px-7 py-3.5 bg-[#0d4e6e] rounded-lg text-white text-base font-semibold font-nunito transition-colors hover:bg-[#0a3d56] hover:scale-105 hover:font-extrabold">
                  Plan Your Visit
                </button>
                <button onClick={() => scrollToSection('services')} className="px-7 py-3.5 rounded-lg border border-[#0d4e6e] text-[#0d4e6e] text-base font-semibold font-nunito hover:bg-[#f5f5f5]  hover:scale-105 transition-colors hover:font-extrabold">
                  Check Our Services
                </button>
              </div>
            </div>

            {/* Right image container */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-0 pt-[100%] relative overflow-hidden fade-in-down">
                <img
                  src={smileGirl}
                  alt="Dental Care"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
