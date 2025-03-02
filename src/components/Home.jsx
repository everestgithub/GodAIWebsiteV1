"use client"

import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"

import WhoWeAre from "./WhoWeAre"
import Features from "./Features"
import TrustedBy from "./TrustedBy"
// import Testimonials from "./Testimonials"
import WhyGodAI from "./WhyGodAI"
// import Insights from "./Insights"
// import CTA from "./CTA"
import Footer from "./Footer"

function Home() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {/* <Hero id="home" />
      <WhoWeAre id="choose-us"/>
      <Features />
      
        <TrustedBy id="tokens" />
     
      {/* <Testimonials /> */}
     
      {/* <Insights /> */}
      {/* <CTA /> */}
      
    </div>
  )
}

export default Home

