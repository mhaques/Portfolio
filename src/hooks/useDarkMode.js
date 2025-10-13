import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const getInitial = () => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') return true
    if (stored === 'light') return false
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  }

  const [isDark, setIsDark] = useState(getInitial)
  const [userOverride, setUserOverride] = useState(() => {
    if (typeof window === 'undefined') return false
    const s = localStorage.getItem('theme')
    return s === 'dark' || s === 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    if (userOverride) {
      try { localStorage.setItem('theme', isDark ? 'dark' : 'light') } catch {}
    }
  }, [isDark, userOverride])

  useEffect(() => {
    if (!userOverride && typeof window !== 'undefined' && window.matchMedia) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const onChange = (e) => setIsDark(e.matches)
      try { mql.addEventListener('change', onChange) } catch { mql.addListener(onChange) }
      return () => { try { mql.removeEventListener('change', onChange) } catch { mql.removeListener(onChange) } }
    }
  }, [userOverride])

  const toggle = () => {
    setUserOverride(true)
    setIsDark((d) => !d)
  }

  const resetToSystem = () => {
    try { localStorage.removeItem('theme') } catch {}
    setUserOverride(false)
    const prefersDark = !!(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDark(prefersDark)
  }

  return [isDark, toggle, resetToSystem]
}
