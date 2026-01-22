"use client"
import { Lock, Gift, TrendingUp } from "lucide-react"

const TrustedBy = () => {
  const benefits = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Unlock premium features and advanced experiences",
      description: "Access exclusive ChainAI capabilities with $CHAIN tokens"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Earn rewards for engagement and referrals",
      description: "Get rewarded for being an active part of the ChainAI community"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Participate in the ChainAI ecosystem as it grows",
      description: "Be part of the future of entertainment-on-demand"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            $CHAIN Token <span className="text-gray-500 dark:text-gray-400 text-2xl md:text-3xl font-normal">(Optional, but Powerful)</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            If you're just after entertainment, you're already covered. But ChainAI is also building an ecosystem, where the people who use it, share it, and help it grow can earn rewards for doing so.
          </p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
            That's what $CHAIN is for.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 p-8 md:p-10 mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            $CHAIN powers premium access inside ChainAI and unlocks deeper experiences as the platform expands. It also gives the community a way to earn value back, just by being active.
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#0d71fe] via-[#954fff] to-[#ed37fb] flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
          
        <div className="text-center">
          <button 
            onClick={() => {
              const element = document.getElementById("earn-chain");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] hover:from-[#0a5dd4] hover:via-[#7a3fcc] hover:to-[#c42dd4] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Learn About $CHAIN</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy