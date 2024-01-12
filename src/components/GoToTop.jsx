import React, { useEffect, useState } from 'react';
import 'scroll-behavior-polyfill';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);
  
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <i className="fa fa-arrow-circle-o-up fs-2" aria-hidden="true"></i>
        </div>
      )}
    </>
  );
};

export default GoToTop;