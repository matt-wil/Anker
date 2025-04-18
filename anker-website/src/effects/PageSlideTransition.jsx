import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageSlideTransition = ({ children }) => {
        const location = useLocation();
      
        useEffect(() => {
          gsap.fromTo(
            ".page",
            { x: "100%" },
            { x: "0%", duration: 0.8, ease: "power2.out" }
          );
        }, [location]);
      
        return <div className="page">{children}</div>;
      };
      
export default PageSlideTransition