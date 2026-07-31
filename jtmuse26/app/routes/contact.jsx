import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
export default function ContactPage() {
  return (
    <>
      <div className="sticky top-0 z-20 flex flex-row justify-center items-center gap-6 mb-12 sm:mb-13 ">
        {/* This div is intentionally left blank to create space for the sticky navbar */}
      </div>
      <Contact />
    </>
  );
}
