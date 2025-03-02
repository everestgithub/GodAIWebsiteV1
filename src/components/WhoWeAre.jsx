"use client"
import React from 'react';
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1
      }
    }}
    whileHover={{ 
      y: -8,
      borderColor: "rgb(59, 130, 246, 0.5)",
      transition: { duration: 0.3 }
    }}
    viewport={{ once: true }}
  >
    {/* Accent element */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 dark:from-blue-500/20 to-transparent rounded-bl-3xl"></div>
    
    <div className="flex flex-col h-full relative z-10">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600 text-white text-2xl mr-4 shadow-md">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
        <a href="https://t.me/GodAI_Portal" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm font-medium inline-flex items-center group cursor-pointer">
          Get GodAI
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
)

const StatCounter = ({ value, label, suffix = "", delay = 0 }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div 
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {value}{suffix}
      </motion.div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
    </motion.div>
  );
};

const WhyGodAI = () => {
  const features = [
    {
      icon: "🎭",
      title: "Entertainment",
      description: "The right entertainment is all you need to get you going. Whether you're excited and need the right music to keep you engaged, or feeling down and need the right movie to get your mood up, GodAI will give you the right entertainment. From movies to songs, games and puzzles, GodAI knows just what is right for you. ",
    },
    {
      icon: "🛒",
      title: "Grocery",
      description: "GodAI helps you keep track of your groceries by tracking what items you have and monitoring the time it would take you before you need a refill. ",
    },
    {
      icon: "🔔",
      title: "Reminders",
      description: "GodAI can help you set reminders for important life events you do not want to miss. From family gatherings to birthday parties or when placing that call is the big difference in your fledgling relationship, GodAI will keep you up to date.",
    },
    {
      icon: "🪙",
      title: "Earn $GOD Tokens",
      description: "GodAI is powered by $GOD token. Users of GodAI App can earn $GOD tokens by engaging in rewarding activities like inviting friends and family to the AI App, sharing GodAI on social media, joining and creating a WebXV account.",
    },
  ];


  return (
    <section className="pb-16 pt-6 bg-gray-50 dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center justify-center px-4 py-1.5 mb-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white text-sm font-medium">Companion AI</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Why <span className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 inline-block">
              GodAI
            </span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           GodAI is the first-ever AI Assistant that connects with you on a human-level, providing not only entertainment, but companionship and engagement. 
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
        
       
      </div>
    </section>
  )
}

export default WhyGodAI