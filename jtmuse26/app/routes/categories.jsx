import { useState, useEffect, useRef, use } from "react";

function Categories() {
  const [inView, setInView] = useState(false);
  const categoriesRef = useRef(null);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (categoriesRef.current) {
      observer.observe(categoriesRef.current);
    }
    return () => {
      if (categoriesRef.current) observer.unobserve(categoriesRef.current);
    };
  }, []);
  return (
    <div className="min-h-[100dvh]">
      <div className="sticky top-0 z-20 flex flex-row justify-center items-center gap-6 mb-12 sm:mb-13 "></div>
      <div className="absolute inset-0 -z-1 bg-gradient-to-br from-[#232323]/40 to-[#181818]/40 backdrop-blur border border-white/20" />
      <div ref={categoriesRef} className="pt-15 flex justify-center h-40">
        <h1
          className={`text-4xl sm:text-5xl font-extrabold italic bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out  ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "Montserrat, Inter, sans-serif" }}
        >
          Coming Soon
        </h1>
      </div>
    </div>
  );
}

export default Categories;
