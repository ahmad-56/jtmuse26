import { useEffect, useRef, useState } from "react";

const Location = ({ contacts = [], directors = [], headingColor }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: [0.2, 1] }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full max-w-3xl mx-auto mt-12 px-4 sm:px-8 md:px-12 text-center transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: inView ? "300ms" : "0ms",
      }}
    >
      <h2
        className="text-3xl sm:text-4xl md:text-5xl pb-1.5 font-extrabold bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out transform"
        style={{
          fontFamily: "Nexa, Arial, sans-serif",
          color: headingColor,
        }}
      >
        Location
      </h2>
      <div
        className={`w-16 h-1 bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] rounded-full mb-4 mx-auto transition-all duration-700 delay-200 ease-in-out ${inView ? "scale-x-100 opacity-100 translate-y-0" : "scale-x-0 opacity-0 translate-y-4"}`}
      />
      <div className="flex justify-center mb-6 mt-8 animate-[fadeIn_2s_ease-in-out]">
        <div className="relative group w-full max-w-2xl mx-auto">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#dfc797]/30 via-[#fff2d6]/20 to-[#dfc797]/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          <div className="relative rounded-2xl overflow-hidden border border-[#dfc797]/30 backdrop-blur-md bg-black/40 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12602.049475408632!2d74.27454330050205!3d31.46684539008887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e0fc887323%3A0xab96115d544c1796!2sLahore%20Grammar%20School%20for%20Boys%20(LGS%20JT)!5e1!3m2!1sen!2s!4v1725424124783!5m2!1sen!2s"
              width="100%"
              height="340"
              className="rounded-2xl filter brightness-95 hover:brightness-100 transition duration-300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LGS JT Map"
            ></iframe>
          </div>
          <p
            className="text-[#fff2d6] max-w-2xl mx-auto font-medium tracking-wide text-base sm:text-lg my-8"
            style={{ fontFamily: "Nexa, Arial, sans-serif" }}
          >
            364-E/1, M. A. Block E 1 Phase 1 Johar Town, Lahore, Punjab 54700
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
