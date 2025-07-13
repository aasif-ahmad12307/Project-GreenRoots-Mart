import { useState } from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BrowseProduct from './pages/BrowseProduct'
import AboutUs from './pages/AboutUs'
import Logout from './Logout'
import LoggedInNavbar from './components/LoggedInNavbar'
//import Logout from './Logout'


function App() {
   // State to track if the user is logged in
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
     <>
       {/* Conditionally render Navbar or LoggedInNavbar */}
       {isLoggedIn ? <LoggedInNavbar /> : <Navbar />}

   
    
    <Routes>
    <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
    {/*  <Route Path="/LoggedinNavbar" element={<LoggedInNavbar/>}></Route> */}
      <Route path="/login" element={<LoginPage/>} ></Route>
      <Route path="/register" element={<RegisterPage/>} ></Route>
      <Route path="/browseProducts" element={<BrowseProduct/>} ></Route>
      <Route path="/aboutUs" element={<AboutUs/>} ></Route>
      <Route path="/" element={<HomePage/>} ></Route>
      <Route path="/home" element={<HomePage/>} ></Route>
      {/* <Route path="/home" element={<HomePage/>} ></Route> */}
      <Route path="/logout" element={<Logout/>} ></Route>
      
    </Routes>
   
    <Footer/>
      
    </>
  )
}

export default App
