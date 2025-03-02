"use client"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

const EarnMethod = ({ icon, method, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-white dark:bg-[#1A2234] p-8 rounded-lg shadow-md flex flex-col items-center text-center h-full border border-transparent transition-all duration-300 ${
        isHovered ? "border-blue-400 dark:border-blue-500 shadow-lg" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`text-5xl mb-6 transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}>{icon}</div>
      <div className="w-10 h-1 bg-blue-500 mb-5 rounded-full"></div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        {method}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}

const EarnGodToken = () => {
  const earnMethods = [
    {
      icon: "👥",
      method: "Invite Friends to GodAI",
      description: "Bring your friends to GodAI and earn tokens for each successful referral. The more friends join, the more you earn.",
    },
    {
      icon: "📱",
      method: "Write about GodAI on Social Media",
      description: "Share your GodAI experience on social platforms and get rewarded for spreading the word.",
    },
    {
      icon: "🏃‍♂️",
      method: "Get active on the GodAI App",
      description: "The more you interact with GodAI, the more tokens you can earn. Daily usage builds your rewards.",
    },
    {
      icon: "⭐",
      method: "Rate GodAI on app store or online",
      description: "Provide valuable feedback and earn tokens for your insights that help improve the platform.",
    },
    {
      icon: "💰",
      method: "Purchase the $GOD token",
      description: "Invest in $GOD tokens directly to access premium features instantly and join our ecosystem.",
    },
    {
      icon: "🤝",
      method: "Join and engage with the GodAI community",
      description: "Earn $GOD tokens by engaging with our community, provide support and contribute to the development of GodAI.",
    },
  ]

  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const goToSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index)
    }
  }

  return (
    <section className="pt-20 bg-gray-50 dark:bg-[#0B101E] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            How to Earn <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 inline-block">
              $God Token
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Multiple ways to earn rewards while being part of the revolutionary GodAI ecosystem
          </p>
        </div>

        <div className="relative px-4 md:px-8">
          {/* Custom Nav Buttons - Professional Style with light/dark support */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 z-10 transform -translate-y-1/2 px-2 md:px-4">
            <button 
              onClick={() => swiper && swiper.slidePrev()} 
              className="w-10 h-10 flex items-center justify-center bg-gray-200/70 dark:bg-blue-500/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-300/80 dark:hover:bg-blue-500/30 transition-colors duration-300 border border-gray-300/50 dark:border-blue-500/30 focus:outline-none"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => swiper && swiper.slideNext()} 
              className="w-10 h-10 flex items-center justify-center bg-gray-200/70 dark:bg-blue-500/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-300/80 dark:hover:bg-blue-500/30 transition-colors duration-300 border border-gray-300/50 dark:border-blue-500/30 focus:outline-none"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isMobile ? 1 : "auto"}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            className="mySwiper py-10"
          >
            {earnMethods.map((method, index) => (
              <SwiperSlide key={index} style={{ width: "300px", height: "340px" }}>
                <EarnMethod {...method} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Professional Custom Indicator with light/dark support */}
        <div className="flex justify-center items-center gap-2 mt-4 mb-10">
          {earnMethods.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentSlide 
                  ? 'w-8 bg-blue-500' 
                  : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-6 mb-16">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-800 dark:to-black text-gray-800 dark:text-white font-semibold text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-px"
          >
            <span>Start Earning $GOD Tokens Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default EarnGodToken