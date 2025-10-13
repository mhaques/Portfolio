import React from 'react'

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-white">
        <div className="text-center mb-16">
          <p className="text-4xl md:text-5xl font-bold dark:text-white mb-6 text-gray-900">
            About <span className="text-blue-400 dark:text-blue-600">Me</span>
          </p>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blue-600 mx-auto animate-pulse" />
        </div>
        <div className="md:grid-cols-2 items-center grid gap-12">
          <div className="relative">
            <div className="bg-blue-500/20 dark:bg-blue-500/30 rounded-lg absolute inset-0 transform rotate-3 animate-pulse" />
            <img loading="lazy" decoding="async" alt="Mohammed Haque" src="https://placehold.co/500x600/374151/60A5FA" className="relative transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-2xl w-full" />
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed dark:text-white mb-6 text-black">
              Hello! I'm Mohammed Haque, a passionate developer with a keen eye for creating exceptional digital experiences. I specialise in building robust web applications and crafting intuitive user interfaces.
            </p>
            <p className="text-lg leading-relaxed dark:text-white mb-6 text-black">
              With expertise in modern web technologies, I enjoy turning complex problems into simple, beautiful and intuitive solutions. When I'm not coding, you'll find me exploring new technologies and contributing to open-source projects.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                {value: '0+', label: 'Projects Completed'},
                {value: '2', label: 'Years Experience'},
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-900 dark:bg-gray-100 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl font-bold text-blue-400 mb-2 dark:text-blue-600">{stat.value}</p>
                  <p className="text-sm text-white mb-6 dark:text-black">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['JavaScript','React','Node.js','Python','MongoDB','AWS'].map(s => (
                <span key={s} className="bg-blue-600/20 dark:bg-blue-600/30 text-blue-400 px-3 py-1 rounded-full text-sm dark:text-blue-600">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}