"use client"
import React from 'react'
import { Zap, Heart, TrendingUp, Calendar } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "The Right Entertainment, Instantly",
      description: "Music, movies, or podcasts; ChainAI delivers the right pick in seconds, so you can press play and enjoy the moment."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Built Around Your Mood",
      description: "Whether you're just getting started for the day, taking a moment to settle your nerves, or you're winding down for the evening, ChainAI matches the moment."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Better Every Time You Use It",
      description: "The more you use ChainAI, the more it learns what hits for you, so the picks get better, faster, and more you."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Plus ChainAI Provides Everyday Support Too",
      description: "Need to stay on top of groceries or remember an important family event? ChainAI can stay on top of the groceries and your schedule without turning your life into a to-do list."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            ChainAI <span className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] inline-block">Fixes That</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Instead of more options, you get the right options, instantly. Music, movies, podcasts, all automatically lined up based on your mood, habits, and taste.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-2"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#0d71fe] via-[#954fff] to-[#ed37fb] flex items-center justify-center text-white shadow-lg">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features