import React from 'react';
import brightTeeth from '../assets/images/brightTeeth.png';
import FadeInComponent from './FadeInComponent';

export const OpenHrs = () => {
  return (
    <section id="contact">
      <div className="w-full bg-[#0f6794]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row min-h-[540px] md:min-h-[500px] lg:min-h-[580px]">
            {/* Text Column */}
            <div className="w-full md:w-1/2 px-6 md:px-16 py-16">
              <div className="space-y-6">
                {/* Title */}
                <div className="text-white text-2xl md:text-4xl font-normal pr-4 font-elmessiri leading-tight">
                  Experience The <span className="blink">Difference </span>
                  In Dental Care
                </div>

                {/* Hours Section */}
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold font-nunito mb-3">
                    Hours
                  </h3>
                  <div className="text-white text-base md:text-xl font-normal font-nunito leading-relaxed">
                    <FadeInComponent delay={0}>
                      Mondays & Tuesdays: 7:00 AM to 5:00 PM.<br />
                      <br />
                    </FadeInComponent>
                    <FadeInComponent delay={200}>
                      Wednesdays: 1:00 PM to 7:00 PM.<br />
                      <br />                    </FadeInComponent>
                    <FadeInComponent delay={400}>
                      Thursdays: 7:00 AM to 1:00 PM.<br /><br />
                    </FadeInComponent>
                    <FadeInComponent delay={600}>
                      Fridays (Per Month): 7:00 AM to 12:00 PM.<br /><br />
                    </FadeInComponent>
                    <FadeInComponent delay={800}>
                      Saturdays & Sundays: Closed.
                    </FadeInComponent>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="text-white text-sm md:text-base font-normal font-nunito">
                  <FadeInComponent delay={1000}>
                    Select holidays are open/closed. Call in to check our availability.
                  </FadeInComponent>
                  <FadeInComponent delay={1200}>
                    Circumstantial emergency procedures may result in appointments outside of these times.
                  </FadeInComponent>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="w-full md:w-1/2 bg-[#0f6794] flex items-stretch">
              <img
                className="w-auto max-h-full object-cover -mr-8 md:-mr-16 fade-in-right"
                src={brightTeeth}
                alt="bright-teeth"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};