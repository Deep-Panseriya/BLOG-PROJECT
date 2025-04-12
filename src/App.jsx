import { useEffect, useState } from 'react'
import Header from './Components/ui/Header.tsx'

import Main from './Components/pages/Main.tsx'
import { PostProvider } from './Components/context/PostContext.jsx'

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
        <PostProvider>
          <Header />
          <Main />
        </PostProvider>
        
      </section>
    </>
  )
}

export default App
