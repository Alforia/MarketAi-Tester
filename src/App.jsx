import './App.css'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import Explore from './Pages/Explore'
import LoginPage from './Pages/LoginPage';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import ContactPage from './Pages/ContactPage';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin=()=>{
    setLoggedIn(true)
    console.log("logged in");
  }

  const handleLogout=()=>{
    setLoggedIn(false)
  }

  return (
    <Router>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage handleLogin={handleLogin} />}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
    </Router>

  //   <>
  //     <ContactPage/>
  //   </>
  )
}

export default App
