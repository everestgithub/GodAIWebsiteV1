"use client"
import React from 'react';
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const steps = [
    {
      number: "1",
      title: "Set the tone",
      description: "Tell ChainAI what you're doing or how you're feeling"
    },
    {
      number: "2",
      title: "Get the right pick instantly",
      description: "ChainAI lines up the right entertainment in seconds, so you can press play without second-guessing and enjoy the moment."
    },
    {
      number: "3",
      title: "It adapts over time",
      description: "The more you use ChainAI, the more it learns your taste, moods, and patterns. As time goes by, it gets better and more convenient."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling Has Killed the Fun Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Scrolling Has <span className="text-red-500">Killed the Fun</span>
          </motion.h2>
          
          <motion.div
            className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              There's probably nothing more boring than being 10 minutes into a scroll session, still looking for something good to watch.
            </p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Scrolling used to be fun.
            </p>
            <p>
              I remember a time, when it was awesome to look through YouTube and Netflix for shows that seemed genuinely interesting, when Spotify only recommended bangers, and a time when podcasters were a rare breed of people, with interesting and unique views.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Now it's just "safe", boring algorithm picks until you give up, rewatch something old, or keep scrolling out of habit.
            </p>
          </motion.div>
        </div>

        {/* How it Works Section */}
        <div className="mt-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How it <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb]">Works</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ChainAI is built to feel effortless, so there's no "figuring out what to type" or trying to remember the name of the show in that trailer you saw a couple weeks ago. It's all done for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0d71fe] via-[#954fff] to-[#ed37fb] text-white text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre