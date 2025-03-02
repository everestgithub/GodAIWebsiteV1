import React, { useState, useEffect } from "react";
import lightLogo from "/logow.png"; // Black logo for light mode
import darkLogo from "/logo.png";   // White logo for dark mode
import whiteLogo from "/logow.png"; // Default white logo
import Hero from "./Hero"; 
import TrustedBy from "./TrustedBy";
import WhoWeAre from "./WhoWeAre";
import Footer from "./Footer";
import WhyGodAI from "./WhyGodAI";
import Features from "./Features";
import Community from "./Community";

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Improved navigation function
  const handleNavigation = (id) => {
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with id "${id}" not found`);
      }
    }, 100);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Determine which logo to display
  const logo = scrolled ? (theme === "dark" ? lightLogo : darkLogo) : whiteLogo;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-lg mx-4 md:mx-auto md:max-w-lg mt-2 rounded-full px-4 py-2"
            : "bg-transparent px-4 py-4 md:px-8 lg:px-28"
        }`}
      >
        <div
          className={`flex justify-between items-center ${
            scrolled && theme === "light" ? "text-gray-900" : "text-white"
          } dark:text-gray-300`}
        >
          {/* Logo with theme-based switching */}
          <div className="flex items-center">
            <div className="h-[40px] w-[70px] md:h-[60px] md:w-[100px] rounded-full">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => handleNavigation("home")}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("tokens")}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              $GOD Tokens
            </button>
            <button
              onClick={() => handleNavigation("choose-us")}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              GodAI
            </button>
            <button
              onClick={() => handleNavigation("community")}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Join us
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1 md:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide from bottom instead of side */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 md:hidden flex flex-col items-center justify-center space-y-6 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 text-white text-center w-full px-6">
          <button
            onClick={() => handleNavigation("home")}
            className="text-xl py-3 border-b border-gray-800 w-full hover:text-blue-400"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("tokens")}
            className="text-xl py-3 border-b border-gray-800 w-full hover:text-blue-400"
          >
            $GOD Tokens
          </button>
          <button
            onClick={() => handleNavigation("choose-us")}
            className="text-xl py-3 border-b border-gray-800 w-full hover:text-blue-400"
          >
            GodAI
          </button>
          <button
            onClick={() => handleNavigation("community")}
            className="text-xl py-3 border-b border-gray-800 w-full hover:text-blue-400"
          >
            Join-us
          </button>

          <button 
            onClick={() => handleNavigation("home")}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105 w-full"
          >
            Get Started Now
          </button>
          
          <button className="mt-2 text-gray-400" onClick={toggleMenu}>
            Close Menu
          </button>
        </div>
      </div>

      {/* Components with IDs for navigation */}
      <div id="home">
        <Hero />
      </div>
      <div id="choose-us">
        <WhoWeAre />
      </div>
      <Features />
      <div id="tokens">
        <TrustedBy />
      </div>
      <div id="community">
      <Community/>
      </div>
      <WhyGodAI />
      <Footer />
    </>
  );
};

export default Navbar;