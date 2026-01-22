import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id) => {
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }

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

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getTextColor = () => {
    if (theme === "dark") return "text-white";
    if (location.pathname.startsWith('/blog/')) {
      return isScrolled ? "text-gray-900" : "text-gray-900";
    }
    if (location.pathname === '/blog') return "text-gray-900";
    return isScrolled ? "text-gray-900" : "text-white";
  };

  const getLogo = () => {
    // In dark theme, always use SVG with white text
    if (theme === "dark") {
      return "/vector SVG-01.svg";
    }
    // In light theme, when navbar is white (scrolled or on blog pages), use PNG with original gradient colors
    if (isScrolled || location.pathname === '/blog' || location.pathname.startsWith('/blog/')) {
      return "/transparent PNG-01.png";
    }
    // By default (light theme + transparent navbar), use SVG with white text
    return "/vector SVG-01.svg";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || location.pathname === '/blog'
            ? "bg-white/90 backdrop-blur-lg dark:bg-gray-900/90 shadow-lg"
            : "bg-transparent dark:bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="h-[40px] w-[70px] md:h-[50px] md:w-[90px] block">
                <img 
                  src={getLogo()} 
                  alt="Logo" 
                  className="h-full w-full object-contain transition-all duration-300" 
                />
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => handleNavigation("home")}
                className={`px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${getTextColor()}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("how-it-works")}
                className={`px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${getTextColor()}`}
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavigation("features")}
                className={`px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${getTextColor()}`}
              >
                Features
              </button>
              <button
                onClick={() => handleNavigation("tokens")}
                className={`px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${getTextColor()}`}
              >
                $CHAIN Token
              </button>
              <button
                onClick={() => handleNavigation("earn-chain")}
                className={`px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${getTextColor()}`}
              >
                Earn $CHAIN
              </button>
              <Link 
                to="/blog" 
                className={`px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${getTextColor()}`}
              >
                Blog
              </Link>
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ${getTextColor()}`}
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className={`h-5 w-5 ${getTextColor()}`} />
                ) : (
                  <Menu className={`h-5 w-5 ${getTextColor()}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex flex-col p-4 space-y-1">
              <button
                onClick={() => handleNavigation("home")}
                className="w-full px-4 py-2.5 text-left text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("how-it-works")}
                className="w-full px-4 py-2.5 text-left text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavigation("features")}
                className="w-full px-4 py-2.5 text-left text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Features
              </button>
              <button
                onClick={() => handleNavigation("tokens")}
                className="w-full px-4 py-2.5 text-left text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                $CHAIN Token
              </button>
              <button
                onClick={() => handleNavigation("earn-chain")}
                className="w-full px-4 py-2.5 text-left text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Earn $CHAIN
              </button>
              <Link 
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-4 py-2.5 text-left text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;