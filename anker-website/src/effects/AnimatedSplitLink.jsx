import { cloneElement } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const AnimatedSplitLink = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    const link = children.props.children; // Get <Link> inside h1
    const destination = link.props.to; // Extract "to" attribute from <Link>
    const letters = document.querySelectorAll(".letter");

    gsap.to(letters, {
      y: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => navigate(destination),
    });
  };

  // Wrap only non-space characters in spans
  const wrappedChildren = cloneElement(children, {
    onClick: handleClick,
    children: children.props.children.props.children.split("").map((char, i) =>
      char === " " ? " " : ( // Preserve natural spaces
        <span key={i} className="letter inline-block">
          {char}
        </span>
      )
    ),
  });

  return wrappedChildren;
};

export default AnimatedSplitLink;
