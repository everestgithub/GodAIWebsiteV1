import React from 'react'
import { FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Community = () => {
  return (
    <div>
        <section className="pb-20 bg-gray-50 dark:bg-[#0B101E] relative overflow-hidden">
         <div className="mt-16 text-center">
                  <p className="text-lg mb-5 text-gray-800 dark:text-gray-200 font-medium">Join our thriving community:</p>
                  <div className="flex justify-center space-x-8">
                    <a 
                      href="https://t.me/GodAI_Portal" 
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors text-lg"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                        <FaTelegramPlane className="w-6 h-6" /> {/* Telegram Icon */}
                      </div>
                      <span className="font-medium">Telegram</span>
                    </a>
                    <a 
                      href="https://x.com/GodAI_Agent" 
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors text-lg"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                        <FaXTwitter className="w-6 h-6" /> {/* X Icon */}
                      </div>
                      <span className="font-medium">X</span>
                    </a>
                  </div>
                </div>
                </section>
    </div>
  )
}

export default Community