import { useState, useEffect, useRef } from "react";
import subCategoryData from "@/subCategoryData";

export async function loader({ params }) {}

function subCategory({ params }) {
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
  const { Category } = params;
  const CategoryData = subCategoryData.find(
    (item) => item.category === Category
  );
  if (!CategoryData) {
    return (
      <div className="pt-20 min-h-[100vh]">
        <h1
          className={`text-4xl sm:text-5xl pb-1 font-extrabold italic bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out `}
          style={{ fontFamily: "Montserrat, Inter, sans-serif" }}
        >
          Not Found
        </h1>
      </div>
    );
  }
  const subCategories = CategoryData.subCategories;

  return (
    <article
      ref={categoryRef}
      className="py-10 min-h-[100dvh]  bg-gradient-to-br from-[#232323]/10 to-[#181818]/10 backdrop-blur border border-white/20 shadow-2xl "
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#232323]/40 to-[#181818]/40 backdrop-blur border border-white/20" />

      <div className="sticky top-0 z-20 flex flex-row justify-center items-center gap-6 mb-12 sm:mb-13 "></div>
      <h1
        className={`text-4xl sm:text-5xl pb-1 font-extrabold bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out  ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ fontFamily: "Montserrat, Inter, sans-serif" }}
      >
        {Category}
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-2 sm:px-10 justify-center items-center">
        {subCategories.map((subCat, index) => (
          <a
            target="_blank"
            href={subCat.path}
            key={index}
            className="group relative flex flex-col items-center justify-center p-6 min-h-[120px] sm:min-h-[140px] w-full sm:w-[90%] lg:w-[80%] mx-auto rounded-2xl bg-gradient-to-br from-[#232323]/60 to-[#181818]/60 border border-[#dfc797]/30 shadow-xl hover:shadow-2xl hover:border-[#dfc797]/60 transition-all duration-300 ease-in-out overflow-hidden backdrop-blur-md"
            style={{}}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl z-0" />
            <span className="relative z-10 text-[#dfc797] font-nexa-regular text-xl sm:text-2xl font-bold drop-shadow-lg mb-2 text-center tracking-wide break-words whitespace-normal break-all hyphens-auto">
              {subCat.name}
            </span>
            <span className="relative z-10 text-[#fff2d6] text-base sm:text-lg font-medium text-center mt-1 break-words whitespace-normal break-all hyphens-auto">
              {subCat.description || "Click to view details"}
            </span>
          </a>
        ))}
      </div>
    </article>
  );
}

export default subCategory;
