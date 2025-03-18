import React from 'react'
import { gsap } from 'gsap'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        gsap.fromTo(
            ".page",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
        );
    }, [location]);

  return (
    <div className='page'>{children}</div>
  )
}

export default PageTransition