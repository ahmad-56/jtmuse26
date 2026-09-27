import { useEffect, useRef, useState } from "react";
import Location from "./Location";
import SocialLinks from "./SocialLinks";
import Data from "./Data";
import contacts from "../ContactInfo";

function Contact() {
  const [inView, setInView] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div
      id="contact"
      ref={contactRef}
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-x-hidden bg-gradient-to-br from-[#232323]/10 to-[#181818]/10 backdrop-blur border border-white/20  shadow-2xl mx-auto"
    >
      {/* Subtle artsy background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#232323]/40 to-[#181818]/40 backdrop-blur border border-white/20" />

      {/* Section Heading */}
      <section className="w-full max-w-7xl mx-auto flex flex-col items-center mb-10">
        <h1
          className={`text-4xl sm:text-5xl font-extrabold text-brand-gold mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily: "Montserrat, Inter, sans-serif",
            transitionDelay: inView ? "100ms" : "0ms",
          }}
        >
          Contact Us
        </h1>
        <p
          className={`text-[#fff2d6] text-center max-w-2xl mb-6 font-medium text-base sm:text-lg transition-all duration-700 ease-out transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily: "Inter, sans-serif",
            transitionDelay: inView ? "200ms" : "0ms",
          }}
        >
          Reach out to our Arts Council for any queries or assistance. Tap a
          number to call directly.
        </p>
        <div
          className={`mb-8 transition-all duration-700 ease-out transform ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{ transitionDelay: inView ? "300ms" : "0ms" }}
        >
          <SocialLinks showLocation />
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="w-full max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
          {contacts.map((contact, index) => (
            <Data
              key={index}
              index={index}
              category={contact.category}
              president={contact.president}
              vicePresident={contact.vicePresident}
              inView={inView}
            />
          ))}
          <div></div>
        </div>
      </section>

      {/*Pasing props here for transitions*/}
      <Location contacts={contacts} directors={[]} />
    </div>
  );
}

export default Contact;
