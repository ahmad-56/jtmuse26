import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import contacts from "@/ContactInfo";
import Data from "@/components/Data";
import Location from "@/components/Location";
import Categories from "@/components/Categories";
import { useState, useEffect, useRef } from "react";

const regiInfo = contacts.find((item) => item.category === "Registrations");

export function meta({}) {
  return [
    { title: "JT Muse'26" },
    {
      name: "description",
      content: "The forth edition of Lgs Jt's Premier Art Olympiad",
    },
  ];
}

export default function Home() {
  const [inView, setInView] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: [0.1, 1] }
    );
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-transparent overflow-x-hidden">
      <section className="w-full max-w-5xl px-0 sm:px-4">
        <Hero />
      </section>
      <section>
        <About id="about" />
      </section>

      <section className="w-full">
        <Categories id="Categories" />
        {/* Updated id to "Categories"  since the navbar was scrolling to #Categories and not #categories*/}
      </section>

      {/* registratons */}
      <section className="w-full border-t border-[#c2c2c2] ">
        <div className="bg-gradient-to-br from-[#232323]/80 to-[#181818]/80 backdrop-blur pt-15 pb-10 sm:pt-14 px-6 lg:px-10">
          <div ref={contactRef} className="mx-auto">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl pb-1.5 font-extrabold text-brand-gold mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Registrations
            </h2>
            <div
              className={`w-16 h-1 bg-gradient-to-r from-[#ffc664] via-[#fff2d6] to-[#ffc664] rounded-full mb-4 mx-auto transition-all duration-700 delay-200 ease-in-out ${inView ? "scale-x-100 opacity-100 translate-y-0" : "scale-x-0 opacity-0 translate-y-4"}`}
            ></div>

            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-8 justify-center mb-15 w-full">
                  {/* card 1 */}
                  <div
                    className={`contact-card bg-white/10 border border-[#ffc664]/20 rounded-2xl flex-1 p-4 sm:p-6 shadow-lg ease-out transform hover:scale-[1.02] hover:border-[#ffc664]/60 text-center ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  >
                    <div
                      className="text-sm sm:text-base text-[#fff2d6] font-semibold mb-1"
                      style={{ fontFamily: "Nexa, Arial, sans-serif" }}
                    >
                      Director Registrations
                    </div>

                    <div
                      className="font-bold text-base sm:text-lg text-brand-gold"
                      style={{ fontFamily: "Nexa, Arial, sans-serif" }}
                    >
                      {regiInfo.president.name}
                    </div>
                    <a
                      href={`tel:${regiInfo.president.phone}`}
                      className="inline-flex items-center justify-center gap-2 text-[#232323] bg-[#ffc664]/80 hover:bg-[#fff2d6] px-4 py-2 rounded-full font-bold shadow transition-colors duration-150 text-sm mt-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#232323"
                          d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
                        />
                      </svg>
                      <div>{regiInfo.president.phone}</div>
                    </a>
                  </div>

                  {/* card 2 */}
                  <div
                    className={`contact-card bg-white/10 border border-[#ffc664]/20 rounded-2xl flex-1 p-4 sm:p-6 shadow-lg ease-out transform hover:scale-[1.02] hover:border-[#ffc664]/60 text-center ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  >
                    <div
                      className="text-sm sm:text-base text-[#fff2d6] font-semibold mb-1"
                      style={{ fontFamily: "Nexa, Arial sans-serif" }}
                    >
                      Director Registrations
                    </div>
                    <div
                      className="font-bold text-base sm:text-lg text-brand-gold"
                      style={{ fontFamily: "Nexa, Arial sans-serif" }}
                    >
                      {regiInfo.vicePresident.name}
                    </div>
                    <a
                      href={`tel:${regiInfo.vicePresident.phone}`}
                      className="inline-flex items-center justify-center gap-2 text-[#232323] bg-[#ffc664]/80 hover:bg-[#fff2d6] px-4 py-2 rounded-full font-bold shadow transition-colors duration-150 text-sm mt-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#232323"
                          d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
                        />
                      </svg>
                      <div>{regiInfo.vicePresident.phone}</div>
                    </a>
                  </div>
                </div>
              </div>
              <Location />
            </div>
          </div>
        </div>
      </section>
      {/*
      <section className="w-full max-w-5xl px-4 mt-12">
        <Sponsors id="sponsors" />
      </section>
      */}
    </div>
  );
}
