import React from 'react'
import Paul from '../assets/images/Paul.png'
import Deanna from '../assets/images/Deanna.png'
import FadeInComponent from './FadeInComponent';


export const Mission = () => {
  const paragraphs = [
    "Going to the dentist can be an amazing experience when you choose a dental office that takes the patients' comfort into consideration. We are a traditional general and cosmetic dental office, who can provide you with all the dental care you require to keep your smile healthy and beautiful.",
    "Our goal at Somerville Dental Associates is to assist each patient in achieving and maintaining long-term dental health and a beautiful smile. We are happy to serve our neighbors in and around our surrounding areas with exceptional dental care.",
    "We value the trust that you place in us to manage your dental care, and we work hard to continue to earn that trust every time you visit. At Somerville Dental Associates you will be treated as family.",
    "Part of our commitment to serving our patients includes providing information that helps them to make more informed decisions about their oral health needs. Our experienced and friendly staff takes great pride in making sure you are well informed with the recommend treatment and how your insurance will factor into your treatment. We look forward to not only helping keep your smile healthy and beautiful but also to building great friendships with our patients."
  ];


  return (
    <section id="about">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-4 md:px-8 pt-12 md:pt-20 pb-8 md:pb-14">
            {/* Mission Text Section */}
            <div className="mb-12 md:mb-20">
              <div className="text-center mb-7">
                <div className="text-[#0d4e6e] text-sm font-semibold font-nunito tracking-wide mb-5">
                  ABOUT US
                </div>
                <div className="text-[#090909] text-4xl md:text-5xl font-normal font-elmessiri leading-10 mb-7">
                  Our Mission
                </div>
              </div>

              <div className="space-y-6 text-[#363636] text-base md:text-lg font-normal font-nunito">
                {paragraphs.map((text, index) => (
                  <FadeInComponent key={index} delay={index * 200}>
                    <p className="text-center hover:fond-bold">{text}</p>
                  </FadeInComponent>
                ))}
              </div>
            </div>

            {/* Staff Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
              <div className="w-full max-w-sm rounded-lg shadow-sm group">
                <img
                  className="w-full h-auto object-cover rounded-t-lg transition-transform duration-600 group-hover:scale-110"
                  src={Paul}
                  alt="Dr. Paul K. Shick"
                />
                <div className="p-4 text-center transition-all duration-300 group-hover:-translate-y-20">
                  <h3 className="text-xl font-bold font-['DM Sans'] text-[#050505] group-hover:text-white group-hover:text-2xl leading-relaxed">
                    Dr. Paul K. Shick
                  </h3>
                  <p className="text-sm font-normal font-['Nunito'] text-[#373737] group-hover:text-white">
                    Dentist
                  </p>
                </div>
              </div>

              <div className="w-full max-w-sm rounded-lg shadow-sm group">
                <img
                  className="w-full h-auto object-cover rounded-t-lg transition-transform duration-600 group-hover:scale-110"
                  src={Deanna}
                  alt="Deanna M."
                />
                <div className="p-4 text-center transition-all duration-300 group-hover:-translate-y-20">
                  <h3 className="text-xl font-bold font-['DM Sans'] text-[#050505] group-hover:text-white group-hover:text-2xl leading-relaxed">
                    Deanna M.
                  </h3>
                  <p className="text-sm font-normal font-['Nunito'] text-[#373737] group-hover:text-white">
                    Office Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}