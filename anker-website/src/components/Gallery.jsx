// src/components/Gallery.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Gallery() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const [fullscreenSrc, setFullscreenSrc] = useState(null);

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;
    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
    gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  useEffect(() => {
    const allPlanes = [plane1.current, plane2.current, plane3.current];
    allPlanes.forEach((plane) => {
      const images = plane.querySelectorAll("img");
      images.forEach((img, index) => {
        gsap.fromTo(
          img,
          { autoAlpha: 0, scale: 0.8, y: 50 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 1,
            delay: index * 0.15,
            ease: "power3.out",
          }
        );
      });
    });
  }, []);

  const handleImageClick = (src) => setFullscreenSrc(src);
  const closeFullscreen = () => setFullscreenSrc(null);

  const renderImage = (src, className) => (
    <img
      src={src}
      alt="photo"
      onClick={() => handleImageClick(src)}
      className={`${className} cursor-pointer transition duration-200 ease-in-out hover:scale-105 pointer-events-auto`}
    />
  );

  return (
    <section
      onMouseMove={manageMouseMove}
      className="relative overflow-hidden"
    >
      <div className="relative w-full h-[200vh] md:h-screen">
        <div ref={plane1} className="absolute inset-0 brightness-[0.7] z-10 pointer-events-none">
          {renderImage("https://picsum.photos/200/300?grayscale", "absolute md:left-[90%] md:top-[70%] left-[25%] top-[5%] w-[225px]")}
          {renderImage("https://picsum.photos/200/300?grayscale", "absolute shadow-md md:left-[5%] md:top-[65%] left-[30%] top-[25%] w-[250px]")}
          {renderImage("https://picsum.photos/200/300?grayscale", "absolute shadow-md md:left-[35%] md:top-[0%] left-[35%] top-[45%] w-[225px]")}
        </div>
        <div ref={plane2} className="absolute inset-0 brightness-[0.6] z-20 pointer-events-none">
          {renderImage("https://picsum.photos/200/300?grayscale", "absolute md:left-[5%] md:top-[10%] left-[25%] top-[60%] w-[150px]")}
          {renderImage("https://picsum.photos/200/300?grayscale", "absolute md:left-[80%] md:top-[5%] left-[30%] top-[75%] w-[200px]")}
          {renderImage("https://picsum.photos/200/300?grayscale", "absolute md:left-[60%] md:top-[60%] left-[35%] top-[90%] w-[250px]")}
        </div>
        <div ref={plane3} className="absolute inset-0 brightness-[0.5] z-30 pointer-events-none">
          {renderImage("https://picsum.photos/200/300?grayscale", "absolute md:left-[65%] md:top-[2.5%] left-[25%] top-[105%] w-[175px]")}
          {renderImage("https://picsum.photos/200/300?grayscale", "absolute md:left-[40%] md:top-[75%] left-[30%] top-[120%] w-[150px]")}
        </div>

        {fullscreenSrc && (
          <div
            onClick={closeFullscreen}
            className="fixed inset-0 bg-white/90 bg-opacity-20 z-50 flex items-center justify-center cursor-zoom-out"
          >
            <img src={fullscreenSrc} alt="fullscreen" className="w-auto h-auto md:h-[90vh] max-w-none object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}
