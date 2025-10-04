/* eslint-disable no-unused-vars */
import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Login from './pages/Login'
import Services from "./pages/Services"
import MemberShip from "./pages/MemberShip"
import MemberShipJoin from "./pages/MemberShipJoin"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute.jsx"

function App() {
 
 return(
 <>
       <Navbar />
      <Toaster position="top-right" reverseOrder={false}/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/services' element={<Services/>}  />
        <Route path='/membership' element={<MemberShip/>}  />
        <Route path='/membershipjoin' element={<ProtectedRoute><MemberShipJoin/></ProtectedRoute>} />
        <Route path='/login' element={<Login/>}  />
      </Routes>
      <Services/>
      <MemberShip/>
      <Footer/>
    </>

 )
   
  
}

export default App
