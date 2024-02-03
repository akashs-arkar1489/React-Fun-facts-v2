import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [theme,setTheme] = useState(true)
  
  return (
    <div className='container'>
      <Navbar themeMode={theme} updateThemeMode={setTheme} />
      <Main themeMode={theme}/>
    </div>
  )
}

export default App
