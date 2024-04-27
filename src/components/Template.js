import React from 'react'
// apde kyay thi sodhvi hoy file to apde "../" no use kariye chiye
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"


// aa Template valu componet a sing-up and login vala page mathi j pan common vastu che te dekahde ch emare apde code ni re-useability vadhari shakiye
const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    // console.log("ye rha mera form type");
    // console.log(formtype)
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

        <div className='w-11/12 max-w-[450px]' >
            <h1
            className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' 
            >
                {title}
            </h1>

            <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {/* ternory operation apde banaviyu......jo  formtype === "signup" hoy to apde Sing-Up form ne render karishu and jo formtype === "signup" nathi hoy {formtype !== "signup"} to tyare apde Login page ne render karishu */}
            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
 

            {/* j OR vali line che te darshava mate apde niche mujab kaam karishu */}
            <div className='flex w-full items-center my-4 gap-x-2'>
            {/* line banava mate aa <div></div> banaviyo */}
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
            {/* line banava mate aa <div></div> banaviyo */}
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>

        </div>

        {/* apde j images che tene apde add kari */}
        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>

            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute -top-4 right-4'
                />    
        </div>

    </div>
  )
}

export default Template
