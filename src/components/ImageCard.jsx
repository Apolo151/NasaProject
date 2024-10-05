import React, { useEffect, useRef, useState } from 'react';
import './ImageCard.css';

export default function ImageCard({ img, dir, title, description }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`CardContainer ${dir === 'right' ? 'CardRight' : 'CardLeft'} ${
        isVisible ? 'visible' : ''
      }`} // Add 'visible' class when the card becomes visible
    >
      <div className='CardContent'>
        <h3 className='CardTitle'>{title}</h3>
        <p className='CardDescription'>{description}</p>
      </div>
      <div className='CardimageContainer'>
        <img src={img} alt={title} />
      </div>
    </div>
  );
}
