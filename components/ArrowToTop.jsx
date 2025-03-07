"use client";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
     // Update the URL path to remove the hash fragment
     window.history.pushState({}, "", window.location.origin);
  };

  return (
    <button 
      onClick={scrollToTop} 
      className="fixed bottom-6 right-6 p-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent-hover transition-all"
    >
      <BsArrowUpCircle size={30} />
    </button>
  );
};

export default ScrollToTopButton;
