import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightMode = () => {
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark")
  }


  //actual  change in  theme (all  work of  classic  javascript)
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark') //jha jha classlist me "light" and "dark" likha  h bo  remove  ho jaye
    document.querySelector('html').classList.add(themeMode)
  }
  , [themeMode])


  return (
    <ThemeProvider value={{
      themeMode,
      darkMode,
      lightMode
    }}>
      {/* 1. hmare pass methods ka  toh access h  but inki  functionality  abhi  define nhi h. 
  2. what we  do in  this  situation , we take these method name  as  it  is  and define theres  functionality here, esa  krne se same name method  ki  functionality in methods  me  aae  jayegi */}

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
