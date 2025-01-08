import React from 'react'
import { CandoCard } from './CandoCard'
import candoData from '../../assets/data/Cando.json'
import dentalFloss from '../../assets/images/dental-floss.svg'
import restoration from '../../assets/images/restoration.svg';
import denture from '../../assets/images/denture.svg';
import implant from '../../assets/images/implant.svg';
import emergency from '../../assets/images/emergency.svg';
import toothHygiene from '../../assets/images/tooth-hygiene.svg';
import FadeInComponent from '../FadeInComponent';

const images = {
  'dental-floss.svg': dentalFloss,
  'restoration.svg': restoration,
  'denture.svg': denture,
  'implant.svg': implant,
  'emergency.svg': emergency,
  'tooth-hygiene.svg': toothHygiene,
};


export const Cando = () => {

  const data = candoData.map(item => ({
    ...item,
    picture: images[item.picture.split('/').pop()]
  }))
  return (
    <section id="doctor">
      <div className="w-full bg-[#f0fbff]">
        <div className="max-w-[1440px] mx-auto ">
          <div className="p-4 md:p-20">
            <div className="mb-8 md:mb-12">
              <div className="text-center mb-2">
                <div className="text-[#0d4e6e] text-md font-semibold font-nunito tracking-wide mb-5">
                  Most Insurances Accepted
                </div>
                <div className="text-[#090909] text-4xl md:text-5xl font-normal font-elmessiri leading-10 mb-7 animate-pulse">
                  What Can We Do?
                </div>
                <p className="text-[#363636] text-lg md:text-2xl font-normal font-nunito max-w-3xl mx-auto mb-8">
                  Contact us for more details and specifications. Don't see what you're looking for ? Just ask us!
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item, index) => (
                  <FadeInComponent key={item.id} delay={index * 200}>
                    <CandoCard picture={item.picture} title={item.title} details={item.details} />
                  </FadeInComponent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}
