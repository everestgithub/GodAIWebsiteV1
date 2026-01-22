"use client"

import Hero from "./Hero"
import WhoWeAre from "./WhoWeAre"
import Features from "./Features"
import TrustedBy from "./TrustedBy"
import WhyGodAI from "./WhyGodAI"
import Community from "./Community"
import HomeBlogs from "./HomeBlogs"
import Footer from "./Footer"

function Home({ theme, toggleTheme }) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div id="home">
        <Hero />
      </div>
      <div id="how-it-works">
        <WhoWeAre />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="tokens">
        <TrustedBy />
      </div>
      <div id="earn-chain">
        <Community />
      </div>
      <div id="why-chainai">
        <WhyGodAI />
      </div>
      <HomeBlogs />
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop Scrolling and Enjoy Optimized Entertainment?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Then get on board now!
          </p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            You're a single click away from never having to waste time doomscrolling again. ChainAI is your shortcut to a happier, less boring, and more organized life.
          </p>
          <p className="text-xl font-semibold mb-8 text-gray-200">
            Sounds good?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("how-it-works");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] hover:from-[#0a5dd4] hover:via-[#7a3fcc] hover:to-[#c42dd4] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[#0d71fe]/50 transition-all duration-300 transform hover:scale-105"
          >
            <span>Then Get ChainAI Now and Say Goodbye to Doom Scrolling Forever</span>
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home

