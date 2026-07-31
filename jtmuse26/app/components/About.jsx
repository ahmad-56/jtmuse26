import { useEffect, useRef, useState } from "react";
import Button from './Button';

function About() {
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: [0.1, 1] }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className="about-section mt-15 py-17 sm:py-16  relative lg:px-10 bg-gradient-to-br from-[#232323]/80 to-[#181818]/80 backdrop-blur border border-white/20  p-6 shadow-2xl mx-auto min-h-0  "
    >
      <div className="flex flex-col items-center text-center">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl pb-1.5 font-extrabold bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "100ms" : "0ms" }}
        >
          What is JT Muse???
        </h2>
        <div
          className={`w-16 h-1 bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] rounded-full mb-4 transition-all duration-700 ease-out transform ${
            inView
              ? "opacity-100 translate-y-0 scale-x-100"
              : "opacity-0 translate-y-8 scale-x-0"
          }`}
          style={{ transitionDelay: inView ? "200ms" : "0ms" }}
        />
        <div
          className={`flex flex-col gap-2 w-full max-w-3xl mx-auto transition-all duration-700 ease-out transform font-nexa-regular ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "300ms" : "0ms" }}
        >
          <p className="text-[#f7f6f4] leading-relaxed text-lg sm:text-xl px-2 sm:px-8 text-justify">
            Organized by the Arts Council of LGS Johar Town, 
            JT Muse returns for its fourth iteration.
            Refined over the course of four years, 
            JT Muse brings together five forms of creation: 
            Art, Literature, Drama, Media and Music 
            through a carefully curated set of categories.
            JT Muse puts forward the stage for artists to channel 
            their creativity into meaningful work that represents 
            their most authentic selves. Muse, where talent finds 
            its voice and creativity finds its purpose.
          </p>
          {/*<span className="font-bold text-[#dfc797]">if they want to make anything bold later on</span>*/}
        </div>
        <div
          className={`w-full flex justify-center mt-6 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: inView ? "400ms" : "0ms" }}
        >
          <a href="/assets/pdf/invite.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              text="View Event Invite"
              color="#dfc797"
              textColor="#232323"
              glowColor="#fff2d6"
            />
          </a>
        </div>
        <div
          className={`w-full flex flex-col sm:flex-row gap-6 mt-10 transition-all duration-700 ease-out transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "500ms" : "0ms" }}
        >
          <div className="flex-1 bg-white/5 rounded-2xl p-6 border border-[#dfc797]/10 shadow-lg min-h-0">
            <h3 className="text-xl font-bold text-[#dfc797] mb-2">
              Muse x Empresario
            </h3>
            <p className="text-[#f7f6f4] text-base sm:text-lg text-justify font-nexa-regular">
              This year, like the previous one, Muse and Empresario, two of JT's
              most awaited events, are being held together. Though they will
              have different registrations and will operate as separate
              olympiads, they will play out on the same dates. Teams can perform
              in both Muse and Empresario to their liking. However, the award
              system for both events will be separate and delegates who only
              registered for one event can not participate in the other.
            </p>
          </div>
          <div className="flex-1 bg-white/5 rounded-2xl p-6 border border-[#dfc797]/10 shadow-lg min-h-0">
            <h3 className="text-xl font-bold text-[#dfc797] mb-2">
              Muse + Artography
            </h3>
            <p className="text-[#f7f6f4] text-base sm:text-lg text-justify font-nexa-regular">
              JT Artography, hosted since 2016, has had a long-standing legacy.
              We at Muse are proud to carry forward this torch as it burns
              ever-brighter into the future. With categories that truly embrace
              the essence of one's art, we now have more to offer for the
              average event-goer. This Muse will outlast others in its creative
              liberties to make the unimaginable imaginable; dreams, reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
