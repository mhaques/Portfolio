import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="md:flex-row justify-between items-center flex flex-col">
          <div className="text-center md:text-left md:mb-0 mb-4">
            <p className="text-gray-400 dark:text-gray-600">© 2025 Mohammed Haque. All rights reserved.</p>
          </div>
          <div className="flex space-x-10">
            {['Privacy','Terms','Contact'].map(i => (
              <a key={i} href="#" className="text-gray-400 dark:text-gray-600 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300">{i}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}