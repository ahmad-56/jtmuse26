import { useEffect, useRef, useState } from "react";
import Location from "./Location";
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
          className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out transform ${
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
          className={`flex flex-row justify-center items-center gap-6 px-8 py-3 rounded-2xl shadow-xl bg-white/20 backdrop-blur-md border border-[#dfc797]/20 mb-8 transition-all duration-700 ease-out transform ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{
            boxShadow: "0 8px 32px 0 rgba(31,38,135,0.12)",
            transitionDelay: inView ? "300ms" : "0ms",
          }}
        >
          <a
            href="https://lgsjtmuse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dfc797] transition-colors"
            aria-label="Website"
          >
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <path
                fill="#dfc797"
                d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v12h12V6H6Zm2 2h8v2H8V8Zm0 4h8v2H8v-2Zm0 4h5v2H8v-2Z"
              />
            </svg>
          </a>
          <a
            href="mailto:lgsjtmuse@gmail.com"
            className="hover:text-[#dfc797] transition-colors"
            aria-label="Email"
          >
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <path
                fill="#dfc797"
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4Z"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/lgsjt.muse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dfc797] transition-colors"
            aria-label="Instagram"
          >
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <path
                fill="#dfc797"
                d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm5.25-2.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="w-full max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
