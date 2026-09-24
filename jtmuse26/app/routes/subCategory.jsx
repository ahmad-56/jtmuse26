import { useState, useEffect, useRef } from "react";
import subCategoryData from "@/subCategoryData";

export async function loader({ params }) {}

function SubCategory({ params }) {
  const [inView, setInView] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState("");
  const categoryRef = useRef(null);
  const comingSoonRef = useRef(null);

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
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  const { Category } = params;

  const CategoryData = subCategoryData.find(
    (item) => item.category === Category
  );

  if (!CategoryData) {
    return (
      <div className="min-h-[100vh] pt-20">
        <h1
          className="mb-2 pb-1 text-center text-4xl font-extrabold italic tracking-tight text-[#ffc664] drop-shadow-lg sm:text-5xl"
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
      className="relative min-h-[100dvh] border border-white/20 bg-gradient-to-br from-[#232323]/10 to-[#181818]/10 py-10 shadow-2xl backdrop-blur"
    >
      <div className="absolute inset-0 -z-10 border border-white/20 bg-gradient-to-br from-[#232323]/40 to-[#181818]/40 backdrop-blur" />
      
       <a
        href="/#categories"
        className="absolute lg:left-28 top-24 z-50 font-nexa-regular text-sm text-[#fff2d6]/70 transition-colors duration-200 hover:text-[#ffc664] sm:left-8"
      >
        ← Back To Categories
      </a>
      
      <div className="h-20" />
      <h1
        className={`mb-2 pb-1 text-center text-4xl font-extrabold tracking-tight text-[#ffc664] drop-shadow-lg transition-all duration-700 ease-out sm:text-5xl ${
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
        style={{ fontFamily: "Montserrat, Inter, sans-serif" }}
      >
        {Category}
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 items-center justify-center gap-8 px-2 sm:grid-cols-2 sm:px-10 lg:grid-cols-2">
        {subCategories.map((subCat, index) => (
          <button
            key={index}
            type="button"
            aria-haspopup="dialog"
            onClick={() => {
              // Temporarily show availability while the study guides are prepared.
              setSelectedGuide(subCat.name);
              comingSoonRef.current.showModal();
            }}
            className="group relative mx-auto flex min-h-[120px] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#ffc664]/30 bg-gradient-to-br from-[#232323]/60 to-[#181818]/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 ease-in-out hover:border-[#ffc664]/60 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffc664] sm:min-h-[140px] sm:w-[90%] lg:w-[80%]"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[125%]" />
            
            <span className="absolute inset-0 z-0 rounded-2xl bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
            
            <span className="relative z-10 mb-2 whitespace-normal break-words text-center font-nexa-regular text-xl font-bold tracking-wide text-[#ffc664] drop-shadow-lg sm:text-2xl">
              {subCat.name}
            </span>
            <span className="relative z-10 mt-1 whitespace-normal break-words text-center text-base font-medium text-[#fff2d6] sm:text-lg">
              {subCat.description || "View study guide"}
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={comingSoonRef}
        aria-labelledby="study-guide-title"
        aria-describedby="study-guide-message"
        className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border border-[#ffc664]/30 bg-[#232323] p-6 text-center shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm sm:p-8"
      >
        <h2 id="study-guide-title" className="mb-3 text-3xl font-bold text-[#ffc664]">
          Coming Soon
        </h2>
        <p id="study-guide-message" className="mb-6 text-base text-[#fff2d6]">
          The study guide for {selectedGuide} will be available soon. Check back for updates!
        </p>
        <form method="dialog">
          <button
            type="submit"
            className="cursor-pointer rounded-full bg-[#ffc664] px-6 py-2 font-bold text-[#232323] transition-colors duration-150 hover:bg-[#fff2d6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffc664]"
          >
            Close
          </button>
        </form>
      </dialog>
    </article>
  );
}

export default SubCategory;
