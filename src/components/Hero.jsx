import { ArrowRight } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { useEffect, useRef } from "react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Staggered animation for text elements
    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;
    const paragraph = paragraphRef.current;
    const buttons = buttonsRef.current;

    if (heading && subHeading && paragraph && buttons) {
      // Reset opacity
      heading.style.opacity = "0";
      subHeading.style.opacity = "0";
      paragraph.style.opacity = "0";
      buttons.style.opacity = "0";

      // Animate elements with staggered timing
      setTimeout(() => {
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
      }, 300);

      setTimeout(() => {
        subHeading.style.opacity = "1";
        subHeading.style.transform = "translateY(0)";
      }, 600);

      setTimeout(() => {
        paragraph.style.opacity = "1";
        paragraph.style.transform = "translateY(0)";
      }, 900);

      setTimeout(() => {
        buttons.style.opacity = "1";
        buttons.style.transform = "translateY(0)";
      }, 1200);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-gray-900">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={headingRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white transition-all duration-700 ease-out opacity-0"
            style={{ transform: "translateY(20px)" }}
          >
            <span className="block">An Entertainment-on-Demand AI so Powerful,</span>
            <span className="block mt-2">You&apos;ll Never Have to Scroll Again.</span>
          </h1>

          <div
            ref={subHeadingRef}
            className="transition-all duration-700 ease-out delay-100 opacity-0"
            style={{ transform: "translateY(20px)" }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] inline-block">
              ChainAI
            </span>
          </div>

          <p
            ref={paragraphRef}
            className="text-base sm:text-lg md:text-xl text-gray-300 mt-8 mb-8 max-w-3xl mx-auto transition-all duration-700 ease-out opacity-0"
            style={{ transform: "translateY(20px)" }}
          >
            Whether it&apos;s the perfect workout music, a &quot;pick-me-up&quot; movie, or a podcast to wind down before bed, ChainAI delivers the right pick instantly based on your mood and taste.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out opacity-0"
            style={{ transform: "translateY(20px)" }}
          >
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] hover:from-[#0a5dd4] hover:via-[#7a3fcc] hover:to-[#c42dd4] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg w-full sm:w-auto relative overflow-hidden group"
            >
              <span className="relative z-10">Get Chain AI</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-800 dark:to-black text-gray-800 dark:text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto group"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
