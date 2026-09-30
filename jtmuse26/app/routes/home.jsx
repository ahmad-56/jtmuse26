import Hero from "@/components/Hero";
import About from "@/components/About";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Categories from "@/components/Categories";

export function meta({}) {
  return [
    { title: "LGS JT Muse 2026 | Official Website" },
    {
      name: "description",
      content: "The Fourth Edition of LGS JT's Art Olympiad, hosted by the Arts Council. 9 • 10 • 11 October 2026",
    },
  ];
}

export default function Home() {
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

      <section className="w-full border-t border-[#c2c2c2]">
        <Contact />
      </section>
      {/*
      <section className="w-full max-w-5xl px-4 mt-12">
        <Sponsors id="sponsors" />
      </section>
      */}
    </div>
  );
}
