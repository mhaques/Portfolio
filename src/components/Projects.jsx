import React from 'react'

export default function Projects() {
  const cards = [
    {img: 'https://placehold.co/400x250/374151/60A5FA', tags: ['React','Node.js']},
    {img: 'https://placehold.co/400x250/374151/3B82F6', tags: ['Vue.js','Express']},
    {img: 'https://placehold.co/400x250/374151/1D4ED8', tags: ['Python','Django']},
  ]
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="projects">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-4xl md:text-5xl font-bold dark:text-white mb-6 text-gray-900">
            My <span className="text-blue-400 dark:text-blue-600">Projects</span>
          </p>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blue-600 mx-auto animate-pulse" />
          <p className="text-xl text-gray-400 mt-6 dark:text-gray-600">Here's where I'll showcase my latest work</p>
        </div>
        <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-gray-800 dark:bg-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img loading="lazy" decoding="async" alt="Project placeholder" src={card.img} className="object-cover transform hover:scale-110 transition-transform duration-300 w-full h-48" />
                <div className="bg-blue-600/20 dark:bg-blue-600/30 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-2 dark:text-gray-900">Project Title</p>
                <p className="text-gray-400 mb-4 dark:text-gray-600">Project description will go here...</p>
                <div className="justify-between items-center flex">
                  <div className="flex space-x-2">
                    {card.tags.map(t => (
                      <span key={t} className="bg-blue-600/20 dark:bg-blue-600/30 text-blue-400 px-2 py-1 text-xs dark:text-blue-600 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-blue-400 dark:text-blue-600 hover:text-blue-300 dark:hover:text-blue-700" aria-label="GitHub">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="#" className="text-blue-400 dark:text-blue-600 hover:text-blue-300 dark:hover:text-blue-700" aria-label="External link">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="items-center justify-center w-16 h-16 bg-blue-600/20 dark:bg-blue-600/30 rounded-full mb-4 inline-flex animate-pulse">
            <svg className="w-8 h-8 text-blue-400 dark:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          </div>
          <p className="text-lg text-gray-400 dark:text-gray-600">More projects coming soon...</p>
        </div>
      </div>
    </section>
  )
}