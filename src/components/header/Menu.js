import React, { useState } from 'react'

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className="md:px-4 py-6 flex flex-col justify-start items-start">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-2xl md:text-3xl">
                <span className="text-[#010c0d] font-extrabold font-['Inter']">Somerville </span>
                <span className="text-[#010c0d] font-light font-['Inter']">Dental</span>
              </div>

              <div className="hidden md:block w-0.5 h-8 bg-[#e7e7e7]"></div>

              <div className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-center text-[#363636] text-base font-normal font-nunito leading-relaxed hover:text-[#0d4e6e] hover:font-bold hover:text-lg"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-center text-[#363636] text-base font-normal font-nunito
                  leading-relaxed hover:text-[#0d4e6e] hover:font-bold hover:text-lg"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-center text-[#363636] text-base font-normal font-nunito leading-relaxed hover:text-[#0d4e6e] hover:font-bold hover:text-lg"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-center text-[#363636] text-base font-normal font-nunito leading-relaxed hover:text-[#0d4e6e] hover:font-bold hover:text-lg"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-center text-[#363636] text-base font-normal font-nunito leading-relaxed hover:text-[#0d4e6e] hover:font-bold hover:text-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex px-6 py-3 bg-[#0d4e6e] rounded-xl items-center gap-2.5 hover:bg-[#0a3d56] hover:scale-105 transition-colors"
              >
                <span className="text-white text-base font-medium font-nunito leading-none hover:font-bold">
                  Plan Your Visit !
                </span>
                <i className="bi bi-arrow-right text-white "></i>
              </button>

              <button
                className="md:hidden text-[#363636]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="w-full md:hidden mt-4 border-t border-[#e7e7e7] pt-4">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left text-[#363636] text-base font-nunito hover:text-[#0d4e6e]"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-[#363636] text-base font-nunito hover:text-[#0d4e6e]"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-[#363636] text-base font-nunito hover:text-[#0d4e6e]"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left text-[#363636] text-base font-nunito hover:text-[#0d4e6e]"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-[#363636] text-base font-nunito hover:text-[#0d4e6e]"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-3 bg-[#0d4e6e] rounded-xl flex items-center justify-center gap-2.5 transition-colors hover:bg-[#0a3d56] hover:scale-105"
                >
                  <span className="text-white text-base font-medium font-nunito leading-none">
                    Plan Your Visit !
                  </span>
                  <i className="bi bi-arrow-right text-white"></i>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
