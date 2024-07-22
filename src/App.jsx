import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import Explore from './Pages/Explore'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
