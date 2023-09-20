import { useEffect, useState } from "react";
import { FaRegHandPointer } from "react-icons/fa";


const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-3 right-3">
      <button
        type="button"
        onClick={scrollToTop}
        className={`    ${isVisible ? "opacity-100" : "opacity-0"}
          inline-flex items-center rounded-full bg-red-400 p-3 text-white shadow-sm transition duration-500 hover:bg-red-500 focus:outline-none drop-shadow-xl `}
      >
        <FaRegHandPointer className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
export default GoToTop;
