import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../../../src/app/components/Animation-1713011295861.json';
const LottieAnimation = () => {
    const container = useRef(null);
  
    useEffect(() => {
      if (container.current) {
        lottie.loadAnimation({
          container: container.current,
          renderer: 'svg', // or 'canvas'
          loop: true,
          autoplay: true,
          animationData: animationData
        });
      }
    }, []);
  
    return <div ref={container}></div>;
  };
  
  export default LottieAnimation;
  
