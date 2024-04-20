import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
const BtnBack = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`btn-back ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp className="IoIosArrowUp" />
    </button>
  );
};

export default BtnBack;
