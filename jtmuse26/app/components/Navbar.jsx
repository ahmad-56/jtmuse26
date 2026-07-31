import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import NavbarIcon from "./NavbarIcon";

function Navbar({ forceFullWidth = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);
  const navbarRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(null); // 'home' | 'info' | null
  const location = useLocation();
  const navigate = useNavigate();

  // Remove all the complex tab positioning logic cause it was causing a lot of issue (sorry Farjad)
  const links = [
    { name: "home", path: "/" },
    { name: "info", path: "/#about" },
    { name: "categories", path: "/#categories" },
    { name: "register", path: "/register" },
    { name: "contact", path: "/contact" },
  ];


  const handleInfoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleCategoriesClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const categoriesSection = document.getElementById("categories");
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleContactClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setScrollActive("home");
    }
  }, []); // Run only on mount

  useEffect(() => {
    const handleClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Control navlinks visibility for smooth collapse
  useEffect(() => {
    if (isExpanded) {
      setShowNavLinks(true);
    } else {
      // Wait for background transition (300ms) before hiding navlinks
      const timeout = setTimeout(() => setShowNavLinks(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isExpanded]);

  useEffect(() => {
    if (location.pathname === "/") {
      const hero = document.getElementById("hero-section");
      const about = document.getElementById("about");
      if (!hero || !about) return;

      const observer = new window.IntersectionObserver(
        (entries) => {
          // Sort entries by intersection ratio to prioritize the most visible section
          const sortedEntries = entries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

          for (const entry of sortedEntries) {
            if (entry.isIntersecting) {
              if (entry.target.id === "about") {
                setScrollActive("info");
                break;
              } else if (entry.target.id === "hero-section") {
                setScrollActive("home");
                break;
              }
            }
          }
        },
        {
          threshold: [0, 0.1, 0.5, 1],
          rootMargin: "-10% 0px -10% 0px",
        }
      );
      observer.observe(hero);
      observer.observe(about);
      return () => {
        observer.disconnect();
      };
    } else {
      setScrollActive(null);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setScrollActive(null);
    }
  }, [location]);

  const isHome = location.pathname === "/";
  return (
    <nav
      ref={navbarRef}
      className={`${forceFullWidth || !isHome ? "fixed top-0 left-0 right-0 w-[100vw] max-w-none" : "fixed top-0 left-1/2 -translate-x-1/2 w-[90vw] sm:w-fit"} px-4 sm:px-8 py-3 z-50 border-b border-white/10 text-slate-50 bg-black/10 rounded-xl min-w-[220px] ${isExpanded ? "pb-3" : ""}`}
      style={
        forceFullWidth
          ? { margin: 0, padding: "1rem", width: "100vw", maxWidth: "100vw" }
          : {}
      }
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-40 rounded-xl" />

      <div className="relative z-48 flex flex-col justify-between items-center sm:flex-row">
        <div className="flex items-center justify-between gap-x-2 w-full sm:w-auto">
          <div className="flex items-center sm:hidden">
            <h2 className="text-lg font-medium whitespace-nowrap">
              JTMUSE
              <span className="text-[10px] text-yellow-500 animate-pulse inline-block ml-[2px]">
                '26
              </span>
            </h2>
            <div className="inline-block w-8 h-px ml-1 bg-gradient-to-r from-yellow-500 to-transparent" />
          </div>

          <NavbarIcon
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            label={
              location.pathname === "/"
                ? "home"
                : location.pathname.includes("/category/")
                  ? location.pathname.replace("/category/", " ")
                  : location.pathname.replace("/", " ")
            }
          />
        </div>

        <ul
          id="nav-list"
          className={`w-full text-center text-sm md:text-base uppercase flex flex-col items-center sm:flex-row sm:justify-center transition-all duration-300 ease-in-out sm:transition-none overflow-visible font-bold
            ${isExpanded && showNavLinks ? "opacity-100 visible static pt-2 pointer-events-auto" : !isExpanded && showNavLinks ? "opacity-0 visible static pt-0 pointer-events-none" : "opacity-0 invisible absolute pt-0 pointer-events-none sm:pt-0 sm:opacity-100 sm:visible sm:static sm:pointer-events-auto"}`}
          style={{ transitionProperty: "opacity, transform, visibility" }}
        >
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`w-full sm:w-auto mb-1 sm:mb-0 transition-all duration-300 ${
                isExpanded
                  ? "opacity-100 transform translate-y-0 visible"
                  : "opacity-0 transform -translate-y-2 invisible sm:opacity-100 sm:transform sm:translate-y-0 sm:visible"
              }`}
              style={{
                transitionTimingFunction:
                  "cubic-bezier(0.750, -0.015, 0.565, 1.055)",
                transitionDelay: isExpanded ? `${idx * 0.055}s` : "0.2s",
              }}
            >
              <NavLink
                data-text={link.name}
                to={link.path}
                onClick={
                  link.name === "info"
                    ? handleInfoClick
                    : link.name === "categories"
                      ? handleCategoriesClick
                      : undefined
                }
                className={({ isActive }) => {
                  let active = isActive;
                  if (location.pathname === "/") {
                    if (link.name === "home" && scrollActive === "home")
                      active = true;
                    else if (link.name === "info" && scrollActive === "info")
                      active = true;
                    else if (link.name === "home" && scrollActive === "info")
                      active = false;
                    else if (link.name === "info" && scrollActive === "home")
                      active = false;
                    else active = false;
                  }

                  // Call to action style for register
                  if (link.name === "register") {
                    const baseClasses =
                      "relative px-3 py-1 md:px-4 rounded-xl sm:py-2 inline-block w-full sm:w-auto text-center font-bold uppercase transition-all duration-300 ease-out transform bg-gradient-to-r from-[#f4c860] via-[#dfc797] to-[#fff2d6] text-[#232323] shadow-lg hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-[#ffe9b0] hover:via-[#fff2d6] hover:to-[#ffe9b0]";
                    const activeClasses = "ring-2 ring-[#f4c860] scale-105";
                    return `${baseClasses} ${active ? activeClasses : ""}`;
                  }

                  const baseClasses =
                    "relative px-3 py-1 md:px-4 rounded-xl sm:py-2 inline-block w-full sm:w-auto text-center font-bold uppercase transition-all duration-300 ease-out transform";
                  const activeClasses = "text-white scale-105";
                  const inactiveClasses =
                    "text-slate-300 hover:text-white hover:bg-white/10 hover:scale-105";
                  return `${baseClasses} ${active ? activeClasses : inactiveClasses}`;
                }}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
