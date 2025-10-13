import React from 'react'
import useDarkMode from './hooks/useDarkMode'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isDark, toggleTheme /*, resetToSystem*/] = useDarkMode()
  const scrollTo = (id) => () => {
    const el = document.querySelector(`#${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div>
      <Navbar isDark={isDark} onToggle={toggleTheme} onNavClick={(id)=> (e)=>{ e.preventDefault(); scrollTo(id)(); }} />
      <Hero onViewWork={scrollTo('projects')} onContact={scrollTo('contact')} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
