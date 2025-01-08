import React, { useState } from 'react'
import { TestimonialCard } from './TestimonialCard'
import testimonialsData from '../../assets/data/Testimonials.json'
import FadeInComponent from '../FadeInComponent';

import JohnM from '../../assets/images/JohnM.png'
import DiannaM from '../../assets/images/DiannaM.png'
import ScottM from '../../assets/images/ScottM.png'
import BrittanyC from '../../assets/images/BrittanyC.png'
import MackQ from '../../assets/images/MackQ.png'
import DaveM from '../../assets/images/DaveM.png'

// Create an image map
const imageMap = {
  'JohnM.png': JohnM,
  'DiannaM.png': DiannaM,
  'ScottM.png': ScottM,
  'MackQ.png': MackQ,
  'DaveM.png': DaveM,
  'BrittanyC.png': BrittanyC,

}

export const Testimonial = () => {
  const itemsPerPage = 3;
  const numberOfPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  }

  const currentPageData = testimonialsData.slice(
    activeIndex * itemsPerPage,
    activeIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section id="testimonials">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto">
          <div className="p-6 md:p-20">
            <div className="mb-12 md:mb-20">
              <div className="text-center mb-7">
                <div className="text-[#0d4e6e] text-md font-semibold font-nunito tracking-wide mb-5">
                  Testimonials
                </div>
                <div className="text-[#090909] text-4xl md:text-5xl font-normal font-elmessiri leading-10 mb-7 fade-in-right">
                  See What Others Have To Say
                </div>
                <p className="text-[#363636] text-lg md:text-2xl font-normal font-nunito max-w-3xl mx-auto">
                  Want to see more testimonials? Check out our Yelp page here where you can view more about what others had to say about us.
                </p>
              </div>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {currentPageData.map((testimonial, index) => (
                  <FadeInComponent key={testimonial.id} delay={index * 200}>
                    <TestimonialCard
                      picture={imageMap[testimonial.picture.split('/').pop()]}
                      name={testimonial.name}
                      review={testimonial.review}
                    /></FadeInComponent>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              {Array.from({ length: numberOfPages }).map((_, index) => (
                <button
                  key={index}
                  className={`h-4 w-4 rounded-full mx-1 ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}