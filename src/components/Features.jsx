"use client"
import React from 'react'

const WhyGodToken = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Why <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 inline-block">
           $GOD Token

            </span>?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mx-auto"></div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Core of GodAI</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                $GOD Token powers the GodAI ecosystem. At its core, $GOD is how you unlock premium features on GodAI, but it’s more than this. $GOD token also serves as the reward token for loyal and active users of the GodAI and WebXV users.


                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm rounded-full font-medium">Utility Token</span>
                  <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm rounded-full font-medium">Ecosystem Rewards</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Premium Access</h4>
                    <p className="text-gray-600 dark:text-gray-400">Unlock advanced AI capabilities exclusively with $GOD.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Loyalty Rewards</h4>
                    <p className="text-gray-600 dark:text-gray-400">Earn tokens through active platform engagement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-8 pb-8 text-center">
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span>Learn About $GOD Token</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyGodToken