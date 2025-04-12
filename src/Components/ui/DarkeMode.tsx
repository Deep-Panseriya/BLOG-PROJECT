import React, { useEffect, useState } from 'react'

export default function DarkeMode () {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('fake-dark-mode')
  }, [darkMode])
  return (
    <section>
      <button className="btn-fake-dark-mode" onClick={() => setDarkMode(darkMode => !darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </section>
  )
}
