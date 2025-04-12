import { useEffect, useState } from 'react'
import './App.css'
import DarkeMode from './Components/ui/DarkeMode'
import Header from './Components/ui/Header'

function App () {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('fake-dark-mode')
  }, [darkMode])    
  return (
    <>
      <section>
        <button
          className='btn-fake-dark-mode'
          onClick={() => setDarkMode(darkMode => !darkMode)}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      <Header />
      </section>
    </>
  )
}

export default App
