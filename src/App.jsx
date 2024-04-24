import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './components/Login'
import Chat from './components/Chat'

function App() {

  const [logged, setLogged] = useState(sessionStorage.getItem("logged") === "true")
  const [popupVisible, setPopupVisible] = useState(false)
  const showPopup = () => {
    console.log("show popup")
    setPopupVisible(true)

    setTimeout(() => {
      setPopupVisible(false)
    }, 2000)
  }

  if(!logged)
    return(
  
      <Login onLogin={() => {
        setLogged(true)
        sessionStorage.setItem("logged", true)
      }
      }/>
    )

  return (
    <>
      
        <div className={"popup " + (popupVisible ? "show" : "vanish")}>Copied to clipboard</div>
      
      <main>
        <Chat showPopup={showPopup}/>
      </main>
    </>
  )
}

export default App
