import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Header from './Components/Header'
import Dashboard from './pages/Dashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    console.log({isLoggedIn}) 
  },[isLoggedIn])

  return (
    <>
      <Header/>
      {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn}/>:
      <Dashboard/>}
      
    </>
  )
}

export default App
