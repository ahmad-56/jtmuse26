export default function Data({
  category,
  president,
  vicePresident,
  index,
  inView,
}) {
  return (
    <div
      className={`bg-white/10 border border-[#dfc797]/20 rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-700 ease-out transform hover:scale-[1.03] hover:shadow-2xl hover:border-[#dfc797]/60 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: inView ? `${400 + index * 80}ms` : "0ms",
      }}
    >
      <p
        className="font-extrabold text-xl sm:text-2xl mb-3 text-[#dfc797] tracking-wide text-center"
        style={{ fontFamily: "Nexa, Arial, sans-serif" }}
      >
        {category}
      </p>
      <div className="space-y-3">
        <div className="text-center">
          <p
            className="text-sm sm:text-base text-[#fff2d6] font-semibold mb-1"
            style={{ fontFamily: "Nexa, Arial sans-serif" }}
          >
            {category !== "Registrations"
              ? "President"
              : "Director Registration"}
          </p>
          <p
            className="font-bold text-base sm:text-lg text-[#dfc797]"
            style={{ fontFamily: "Nexa, Arial, sans-serif" }}
          >
            {president.name}
          </p>
          <a
            href={`tel:${president.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center gap-2 text-[#232323] bg-[#dfc797]/80 hover:bg-[#fff2d6] px-4 py-2 rounded-full font-bold shadow transition-colors duration-150 text-sm mt-2"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                fill="#232323"
                d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
              />
            </svg>
            {president.phone}
          </a>
        </div>
        <div className="pt-2 border-t border-[#dfc797]/20 text-center">
          <p
            className="text-sm sm:text-base text-[#fff2d6] font-semibold mb-1"
            style={{ fontFamily: "Nexa, Arial, sans-serif" }}
          >
            {category !== "Registrations"
              ? "Vice President"
              : "Director Registration"}
          </p>
          <p
            className="font-bold text-base sm:text-lg text-[#dfc797]"
            style={{ fontFamily: "Nexa, Arial, sans-serif" }}
          >
            {vicePresident.name}
          </p>
          <a
            href={`tel:${vicePresident.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center gap-2 text-[#232323] bg-[#dfc797]/80 hover:bg-[#fff2d6] px-4 py-2 rounded-full font-bold shadow transition-colors duration-150 text-sm mt-2"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                fill="#232323"
                d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
              />
            </svg>
            {vicePresident.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
