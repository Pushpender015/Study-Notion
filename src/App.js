import "./App.css";
import { Route , Routes } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import About from "./pages/About";
import Contact from "./pages/Contect";
import Footer from "./pages/Footer";
import LeetCode from "./pages/LeetCode";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col"> 
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/login" 
            element={
              <Login setIsLoggedIn={setIsLoggedIn} />
            } 
          />
          
          <Route path="/signup" 
            element={
              <Signup setIsLoggedIn={setIsLoggedIn} />
            } 
          />
          
          <Route path="/about" element={<About />}/>
          
          <Route path="/contact" element={<Contact />}/>

          <Route path="/dashboard" element={<Dashboard/>} />

          <Route path="/leetcode" element={<LeetCode/>} />

        </Routes>

        <Footer />

    </div>
    
  )
}

export default App;
