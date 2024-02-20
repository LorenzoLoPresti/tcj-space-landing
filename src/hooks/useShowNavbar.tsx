import { useEffect, useState } from "react";

const useShowNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return { isVisible };
};

export default useShowNavbar;
