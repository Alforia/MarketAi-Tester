import './App.css'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import Explore from './Pages/Explore'
import LoginPage from './Pages/LoginPage';

function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
    </Router>
  )
}

export default App
