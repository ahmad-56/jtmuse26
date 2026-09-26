import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./app.css";
import { useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";

export function meta() {
  return [
    { title: "JT Muse'26" },
    {
      name: "description",
      content:
        "The official website for the forth edition of LGS JT's premier arts olympiad.",
    },
  ];
}

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!isHome) {
      setShowStickyNavbar(true);
      return;
    }
    // Only observe on home page
    const hero = document.getElementById("hero-section");
    if (!hero) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowStickyNavbar(!entry.isIntersecting);
      },
      { threshold: 0.01 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="JronmGLPXm-xuey1Fwzh8Ty4o2PELLwRHkAeCYv7HbU"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/assets/images/favicon.ico" />
        {/* Preload priority for background images and use webp for faster loading times*/}
        <link
          rel="preload"
          as="image"
          href="/assets/images/bg.webp"
          media="(min-width: 801px)"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/bg-mobile.webp"
          media="(max-width: 800px)"
          type="image/webp"
        />
        <Meta />
        <Links />
      </head>
      <body className="overflow-x-hidden">
        {/* Global background layer with responsive images */}
        <picture>
          <source
            srcSet="/assets/images/bg.webp"
            type="image/webp"
            media="(min-width: 801px)"
          />
          <source
            srcSet="/assets/images/bg-mobile.webp"
            type="image/webp"
            media="(max-width: 800px)"
          />
          <img
            src="/assets/images/bg-mobile.webp"
            alt="Background"
            className="fixed inset-0 w-full min-h-screen bg-img-stable object-cover object-center bg-muted -z-10 select-none pointer-events-none"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: -1,
              height: "100dvh",
              minHeight: "100vh",
            }}
            loading="eager"
            fetchPriority="high"
            draggable="false"
            aria-hidden="true"
          />
        </picture>
        {/* Sticky Navbar that slides in after Hero */}
        {isHome && (
          <nav
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              width: "100vw",
              maxWidth: "100vw",
              margin: 0,
              zIndex: 100,
              transform: showStickyNavbar
                ? "translateY(0)"
                : "translateY(-120%)",
              transition: "transform 0.5s cubic-bezier(.77,0,.18,1)",
              padding: 0,
              boxSizing: "border-box",
              background: "transparent",
            }}
          >
            {showStickyNavbar && (
              <div
                style={{
                  width: "100vw",
                  maxWidth: "100vw",
                  margin: 0,
                  padding: 0,
                }}
              >
                <Navbar forceFullWidth />
              </div>
            )}
          </nav>
        )}
        {/* Normal Navbar for all other pages */}
        {!isHome && (
          <nav>
            <Navbar />
          </nav>
        )}
        {children}
        <section>
          <Footer />
        </section>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
