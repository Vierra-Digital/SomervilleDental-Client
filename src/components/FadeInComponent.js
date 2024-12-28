import React, { useEffect, useState, useRef } from 'react';

const FadeInComponent = ({ children, delay = 50 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          setIsVisible(false);
        }
      });
    });

    const currentRef = domRef.current;
    observer.observe(currentRef);

    return () => observer.unobserve(currentRef);
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeInComponent;