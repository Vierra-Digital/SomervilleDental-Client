import React from "react";
import { SubscribeButton } from "./SubscribeButton";

export const Footer = () => {

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="w-full bg-[#0d4e6e]">
      <div className="max-w-[1440px] mx-auto">
        <div className="p-6 md:p-20 flex flex-col gap-8 md:gap-16">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-32">
            {/* Subscribe Section */}
            <div className="w-full md:w-[500px] flex flex-col gap-6">
              <div className="w-[267px]">
                <div className="flex items-center gap-[13.37px]">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.65154 5.58904C6.57956 5.50768 6.54642 5.4028 6.55116 5.29891C6.55589 5.19599 6.59756 5.09503 6.67711 5.02053L6.92711 4.7843L7.1222 5.00583L8.74824 3.47084L7.79553 2.39067L8.84388 1.40067C9.16776 1.09484 9.58257 0.954697 9.99074 0.973316C10.398 0.99292 10.7985 1.1723 11.094 1.50654L11.0978 1.51046C11.3904 1.8447 11.5259 2.27208 11.5069 2.69354C11.488 3.11503 11.3147 3.52964 10.9918 3.83547C10.6395 4.15895 10.2919 4.49612 9.9434 4.82547L8.88178 3.62178L7.25574 5.15677L7.45083 5.37829L7.20083 5.61452C7.12222 5.68901 7.02089 5.72332 6.92052 5.71842C6.82108 5.71352 6.72354 5.67039 6.65156 5.58805L6.65154 5.58904ZM11.1282 3.98447C11.1253 3.98741 11.1234 3.98937 11.1206 3.99133L10.5429 4.5373L11.7598 5.96544L13.2637 6.37124C13.4455 6.13208 13.6293 5.88605 13.8149 5.64591L12.3631 5.25383C12.3451 5.24893 12.3271 5.23815 12.3138 5.22246L11.1992 3.9149C11.1764 3.93842 11.1537 3.96195 11.13 3.98449L11.1282 3.98447ZM11.792 7.24153C10.4662 5.32135 9.00109 5.89572 7.79374 6.36817C7.12136 6.63185 6.52472 6.86514 6.0389 6.6583C4.81628 6.13684 3.9649 5.93883 3.27461 5.9849C2.59275 6.02999 2.06241 6.31523 1.48095 6.76123C1.43738 6.79456 1.39382 6.83082 1.35026 6.87003C0.798153 7.367 0.451537 8.18839 0.45721 9.18917C0.462893 10.2007 0.829403 11.3936 1.70538 12.6209C1.83891 12.8071 1.98475 12.9963 2.14575 13.1874C2.42133 13.5148 2.40334 14.398 2.38345 15.4272C2.36641 16.2692 2.34747 17.2121 2.48289 18.0012C2.50089 18.1051 2.56055 18.4119 2.62779 18.752C2.73291 19.2833 2.85602 19.8979 2.87212 19.9724C2.96587 20.4066 3.11645 20.6987 3.29355 20.8653C3.40246 20.9683 3.52084 21.0212 3.64016 21.0281C3.75949 21.0349 3.88355 20.9957 4.00099 20.9144C4.19797 20.7781 4.37791 20.5272 4.50385 20.1772C4.7122 19.598 4.72451 18.9001 4.73777 18.1747C4.74534 17.7522 4.75292 17.321 4.79838 16.8975C4.81921 16.7034 4.87982 16.1722 5.10332 15.7037C5.33534 15.2175 5.73783 14.7999 6.44051 14.8734C6.90929 14.9224 7.2114 15.2577 7.415 15.7448C7.60819 16.2085 7.71143 16.8142 7.78719 17.4357C7.87621 18.1639 7.95576 18.7726 8.04573 19.2667C8.1338 19.7509 8.2304 20.1185 8.3535 20.3713C8.48135 20.6331 8.61204 20.7909 8.74085 20.8683C8.86396 20.9418 8.98896 20.9399 9.10923 20.885C9.24276 20.8242 9.37441 20.7017 9.49563 20.5429C9.79774 20.1488 10.0307 19.549 10.0998 19.1089C10.115 19.0118 10.1434 18.8942 10.1784 18.7511C10.2741 18.358 10.4161 17.7719 10.4341 17.0122C10.4616 15.8732 10.4057 14.649 10.3792 14.058C10.3697 13.8483 10.3641 13.7159 10.3669 13.6865C10.4152 13.2072 10.7694 12.6975 11.169 12.1241C11.4427 11.731 11.7382 11.3066 11.9636 10.8489C12.2534 10.2627 12.4087 9.61284 12.3774 8.96299C12.349 8.37486 12.1681 7.78578 11.7941 7.24372L11.792 7.24153ZM19.319 9.19605L14.6266 5.31066C14.6219 5.30772 14.6172 5.30379 14.6124 5.29889C14.5679 5.26459 14.5139 5.25184 14.4609 5.25773C14.4088 5.26361 14.3586 5.28909 14.3226 5.33222C14.3189 5.33712 14.316 5.34202 14.3113 5.34692L13.3841 6.54667C13.3813 6.55059 13.3794 6.55353 13.3766 6.55647L13.2923 6.66527C13.2554 6.71232 13.2411 6.77211 13.2468 6.82896C13.2525 6.88581 13.28 6.93972 13.3254 6.97795L18.0256 10.8694C18.0711 10.9076 18.1288 10.9223 18.1837 10.9164C18.2387 10.9105 18.2908 10.8821 18.3277 10.8351L19.3533 9.50786C19.3903 9.46082 19.4045 9.40102 19.3988 9.34417C19.3931 9.28732 19.3656 9.23341 19.3202 9.19518L19.319 9.19605Z" fill="white" />
                    </svg>
                  </svg>
                  <div className="text-white text-xl font-normal font-['Alice']">
                    Somerville Dental
                  </div>
                </div>
              </div>
              <div className="text-white text-base font-normal font-nunito">
                Join our newsletter to stay up to date on features and releases.
              </div>
              <SubscribeButton />
            </div>

            {/* Links and Social Section */}
            <div className="flex flex-col sm:flex-row gap-10 flex-grow">
              {/* Links */}
              <div className="w-full sm:w-[322px] flex flex-col gap-4">
                <div className="text-white text-base font-bold font-nunito">
                  Links
                </div>
                <div className="flex flex-col">
                  {["Home", "About", "Services", "Doctors", "Testimonials"].map(
                    (link) => (
                      <div key={link} className="py-2">
                        <a
                          href={`#${link.toLowerCase()}`}
                          onClick={(e) =>
                            handleScrollToSection(e, link.toLowerCase())
                          }
                          className="text-white text-base font-normal font-nunito hover:font-bold hover:text-lg"
                        >
                          {link}
                        </a>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex-grow flex flex-col gap-4">
                <div className="text-white text-base font-bold font-nunito">
                  Follow Us
                </div>
                <div className="flex flex-col">
                  {[
                    { name: "Facebook", icon: "bi-facebook" },
                    { name: "Instagram", icon: "bi-instagram" },
                    { name: "X", icon: "bi-twitter-x" },
                    { name: "LinkedIn", icon: "bi-linkedin" },
                  ].map((social) => (
                    <div
                      key={social.name}
                      className="py-2 flex items-center gap-3"
                    >
                      <div className="w-6 h-6 relative">
                        <i className={`bi ${social.icon} text-white`}></i>
                      </div>
                      <a
                        href="/"
                        className="text-white text-base font-normal font-nunito hover:font-bold"
                      >
                        {social.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col gap-8">
            <div className="h-[0.20px] bg-white" />
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="text-white text-base font-normal font-nunito">
                © Somerville Dental Associates, All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};