import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


// app.js thi aa props laviya
const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

{/* apdi website nologo add kariyo webpage upar */}
        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

{/* badhi Links apde add karishu */}
        <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* apde ahiya 4 buttton create karva padshe jema thi khali 2 button j visible hase 1.] (singup & login){jo apde starting ma website kholiye tyare aa buttons visible hase} 2.] (logout & Dashboard){jyare apde singup/login kari lifhu hase tyare aa 2 button visible hse} */}
        {/* Login - SignUp - LogOut - Dashboard */}
        {/* apde ahiya "condition" mukvi padshe mate apde ahiya "{}" brakets no use karishu */}
        {/* login valu button tyare j visible hase jyare apde LOGIN nahi hoiye mate apde ahiya aa condition lagavi (!isLoggedIn)......jo aa condition sachi hase to j aa button visible thashe baki aa button visible nahi thay */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            {/* signup valu button tyare j visible hase jyare apde LOGIN nahi hoiye mate apde ahiya aa condition lagavi (!isLoggedIn)......jo aa condition sachi hase to j aa button visible thashe baki aa button visible nahi thay */}
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            {/* Logout valu button tyare j visible thashe jyare use a login thayelo hase ..mate apde te mujab condition lagavi didhi */}
            {/* logout kariya pachi apde direct HOME Page upar jaiye chiye mate mate apde <Link> tag ma ' to="/" ' kariyu j Home page no Path/route dekhade che  */}
            { isLoggedIn &&
                <Link to="/">
                {/* aa logout valu button ne click kariye to te login ne (IsLoggedIn) ne "false" mark kari de j che mate apde logout thai jaiye chiye  */}
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            {/* Dashboard valu button tyare j visible thashe jyare use a login thayelo hase ..mate apde te mujab condition lagavi didhi */}
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
