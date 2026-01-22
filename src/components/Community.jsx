import React from 'react'
import { UserPlus, Share2, Activity, Star, Coins } from "lucide-react"

const Community = () => {
  const earnMethods = [
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Invite friends to ChainAI",
      description: "Earn rewards when people you refer join and get active."
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Share ChainAI on social media",
      description: "Post your experience, your results, or your favorite picks."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Stay active in the app",
      description: "The more you engage, the more you can earn over time."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Leave feedback and ratings",
      description: "Help improve the product and get rewarded for it."
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Purchase $CHAIN for premium access",
      description: "Unlock premium experiences instantly by holding $CHAIN."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            How to Earn <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb]">$CHAIN</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            You don't need to be "crypto bro" to earn rewards here.
          </p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Just use ChainAI and help other people discover it, to earn $CHAIN.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {earnMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0d71fe] via-[#954fff] to-[#ed37fb] text-white mb-4 mx-auto">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {method.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              const element = document.getElementById("tokens");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] hover:from-[#0a5dd4] hover:via-[#7a3fcc] hover:to-[#c42dd4] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Start Earning $CHAIN</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Community