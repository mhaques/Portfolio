import React from 'react'

export default function Hero({ onViewWork, onContact }) {
  return (
    <section id="home" className="items-center justify-center pt-20 min-h-screen flex relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl relative z-10">
        <div className="animate-fade-in-up">
          <p className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-300">Mohammed</span>
            <span className="text-blue-400 dark:text-blue-600 animate-pulse">Haque</span>
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-400 dark:text-gray-600 animate-fade-in-up animation-delay-300">Aspiring Developer</p>
          <div className="sm:flex-row justify-center flex flex-col gap-4 animate-fade-in-up animation-delay-600">
            <button type="button" onClick={onViewWork} className="hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold">View My Work</button>
            <button type="button" onClick={onContact} className="border-2 border-blue-600 dark:border-blue-500 dark:text-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-blue-400 px-8 py-3 rounded-lg font-semibold">Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}