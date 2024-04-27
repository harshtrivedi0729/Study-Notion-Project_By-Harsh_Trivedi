import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";


function App() {

  // apde state variable banaviyu.......use login che k nahi te check karva mate ........and starting ma use a login nathi(false) tevu set karishu
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    // ahiya "w-screen h-screen" no matlab che k hiegth and width a 100vh che
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    {/* apde <Navbar></Navbar> ni andeer aa state variable ne pass kariyu j thi apde aa variable no use kari shakiye navbar ma  */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        {/* apde dashboard ne protected banavavu padshe kem k jya sudhi apde login na thaiye tya sudhi apde dashboard upar java na joiye,and in-case koi direct dash-board upar java no try kare che to apde te ne login vala page upar j lai jaishu....ane kaishu k bhai pahela tu login kar pachi tane dashbpard dekhadish */}
        {/* ahiya <PtivateRoute></PtivateRoute> a PARENT che and <Dashboard></Dashboard> a  CHILDEREN che  */}
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
       
        } />

      </Routes>

    </div>
    )
}

export default App;
