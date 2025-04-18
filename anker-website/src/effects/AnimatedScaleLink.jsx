import { cloneElement } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const AnimatedScaleLink = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    const link = children.props.children; // Get <Link> inside h1
    const destination = link.props.to; // Extract "to" attribute from <Link>

    gsap.to(children, {
      scale: 1.5,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => navigate(destination),
    });
  };

  return cloneElement(children, { onClick: handleClick });
};

export default AnimatedScaleLink;
