import { Search, User, Sparkles } from "lucide-react"

const WhyGodAI = () => {
  const differences = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "No more endless searching",
      description: "You'll never need 15 open tabs and a debate over what to watch. ChainAI optimizes your entertainment experience automatically."
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Personalized to Match your Needs",
      description: "You're not getting the same recycled recommendations as your friends, or even your partner. ChainAI learns your patterns and taste over time, and delivers better and better entertainment."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Simple, Clean, and Zero effort required",
      description: "All you need to do is set the mood, and ChainAI will handle the rest."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What's Different About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb]">ChainAI</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ChainAI is built with one goal: To get you to the right entertainment fast, then get out of your way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differences.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0d71fe] via-[#954fff] to-[#ed37fb] text-white mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById("tokens");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] hover:from-[#0a5dd4] hover:via-[#7a3fcc] hover:to-[#c42dd4] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get ChainAI
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyGodAI