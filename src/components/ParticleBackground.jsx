"use client"

import { useEffect, useState } from "react"

const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 80; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()

    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
          x: (particle.x + (Math.random() - 0.5) * 0.1) % 100,
          opacity: (Math.sin(Date.now() / 2000 + particle.id) + 1) * 0.3 + 0.1,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background gradient - works in both light and dark modes */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

      {/* Animated particles for network effect */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-500"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 3}px rgba(59, 130, 246, 0.5)`,
          }}
        />
      ))}

      {/* Connecting lines simulation */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {particles
          .slice(0, 30)
          .map((particle, i) =>
            particles
              .slice(i + 1, i + 4)
              .map((p2, j) => (
                <line
                  key={`line-${i}-${j}`}
                  x1={`${particle.x}%`}
                  y1={`${particle.y}%`}
                  x2={`${p2.x}%`}
                  y2={`${p2.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  opacity={(1 - Math.hypot(particle.x - p2.x, particle.y - p2.y) / 30) * 0.5}
                />
              )),
          )}
      </svg>
    </div>
  )
}

export default ParticleBackground