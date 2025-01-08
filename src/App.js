import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/header/Header';
import { Intro } from './components/Intro';
import { Mission } from './components/Mission';
import { useEffect } from 'react';
import { Cando } from './components/cando/Cando';
import { Service } from './components/Service';
import { Testimonial } from './components/testimonials/Testimonial';
import { OpenHrs } from './components/OpenHrs';
import FadeInComponent from './components/FadeInComponent';

function App() {
  useEffect(() => {
    document.title = "Somerville Dental";
  }, []);

  const components = [
    <Header />,
    <Intro />,
    <Mission />,
    <Cando />,
    <Service />,
    <Testimonial />,
    <OpenHrs />,
    <Footer />
  ];

  return (
    <>
      {components.map((component, index) => (
        <FadeInComponent key={index}>
          {component}
        </FadeInComponent>
      ))}
    </>
  );
}


export default App;
