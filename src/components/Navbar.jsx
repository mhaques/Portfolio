import React, { useState } from 'react'

const ThemeToggleButton = ({ className = '', isDark, toggle }) => (
  <button type="button" className={className} onClick={() => toggle(d => !d)} aria-label="Toggle theme">
    {!isDark ? (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
      </svg>
    ) : (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    )}
  </button>
)

export default function Navbar({ isDark, setIsDark, onNavClick }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900 fixed top-0 backdrop-blur-sm z-40 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="justify-between items-center py-4 flex">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 animate-pulse">
            <a href="#home" onClick={onNavClick('home')}>mhaques</a>
          </div>
          <div className="md:flex hidden items-center space-x-8">
            {['home','about','projects','contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={onNavClick(id)} className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <ThemeToggleButton
              isDark={isDark}
              toggle={setIsDark}
              className="p-2 transition-all duration-300 transform hover:scale-110 bg-blue-600 dark:bg-blue-950 hover:bg-blue-700 dark:hover:bg-blue-400 text-white rounded-full shadow-lg"
            />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggleButton
              isDark={isDark}
              toggle={setIsDark}
              className="p-2 transition-all duration-300 bg-blue-600 dark:bg-blue-950 hover:bg-blue-700 dark:hover:bg-blue-400 text-white rounded-full shadow-lg"
            />
            <button type="button" aria-label="Toggle menu" className="mobile-menu-button text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMobileOpen(v => !v)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="mobile-menu md:hidden pb-4">
            {['home','about','projects','contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={(e)=>{onNavClick(id)(e); setMobileOpen(false)}} className="block py-2 px-4 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}