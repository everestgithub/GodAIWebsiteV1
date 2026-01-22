import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from "./components/Loading";
import Home from "./components/Home";
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import Navbar from './components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', theme);
    
    // Apply theme class
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        {isLoading && <Loading onComplete={handleLoadingComplete} />}
        {!isLoading && (
          <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
              <Route path="/blog" element={<BlogList theme={theme} toggleTheme={toggleTheme} />} />
              <Route path="/blog/:slug" element={<BlogDetail theme={theme} toggleTheme={toggleTheme} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;