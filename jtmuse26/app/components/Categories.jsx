import CategoriesBtn from "./CategoriesBtn";
import { useState, useEffect, useRef } from "react";
const btnDetails = [
  {
    href: "/category/Arts",
    imgSrc: "/assets/categories/ArtsIcon.webp",
    label: "Art",
  },
  {
    href: "/category/Media",
    imgSrc: "/assets/categories/MediaIcon.webp",
    label: "Media",
  },
  {
    href: "/category/Literature",
    imgSrc: "/assets/categories/LitIcon.webp",
    label: "Literature",
  },
  {
    href: "/category/Music",
    imgSrc: "/assets/categories/MusicIcon.webp",
    label: "Music",
  },
  {
    href: "/category/Drama",
    imgSrc: "/assets/categories/DramaIcon.webp",
    label: "Drama",
  },
  {
    href: "/category/Miscellaneous",
    imgSrc: "/assets/categories/MiscIcon.webp",
    label: "Misc",
  },
];

function Categories() {
  const [inView, setInView] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: [0.1, 1] }
    );
    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }
    return () => {
      if (categoryRef.current) observer.unobserve(categoryRef.current);
    };
  }, []);
  return (
    <article
      ref={categoryRef}
      className="z-10 relative bg-gradient-to-br from-[#232323]/80 to-[#181818]/80 backdrop-blur py-15 sm:py-14 px-6 lg:px-10 border-t border-white/20"
      id="categories"
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl pb-1.5 font-extrabold bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        Categories
      </h2>
      <div
        className={`w-16 h-1 bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] rounded-full mb-4 mx-auto transition-all duration-700 delay-200 ease-in-out ${inView ? "scale-x-100 opacity-100 translate-y-0" : "scale-x-0 opacity-0 translate-y-4"}`}
      ></div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 my-14 justify-center items-center justify-items-center mx-auto max-w-2xl md:max-w-5xl transition-all duration-1000 delay-200 ease-in-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {btnDetails.map((btn, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <a
              href={btn.href}
              className="inline-flex justify-center items-center animated-bg z-10 relative text-white cursor-pointer min-w-[120px] max-w-[180px] w-[40vw] h-[40vw] min-h-[120px] max-h-[180px] md:min-w-[160px] md:max-w-[220px] md:min-h-[160px] md:max-h-[220px] rounded-2xl overflow-hidden border border-[#dfc797]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-gradient-to-br from-[#232323]/70 to-[#181818]/70 backdrop-blur-md"
              style={{
                backgroundImage: 'url("/assets/categories/btnBg.webp")',
                backgroundSize: "400% 400%",
                backgroundPosition: "center right",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-white/10 z-9 backdrop-blur-[3px]" />
              <img
                className="z-10 relative scale-125"
                src={btn.imgSrc}
                alt={btn.label}
              />
            </a>
            <span className="mt-4 text-lg md:text-xl font-nexa-regular text-[#dfc797] drop-shadow-md tracking-wide text-center select-none">
              {btn.label}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Categories;
