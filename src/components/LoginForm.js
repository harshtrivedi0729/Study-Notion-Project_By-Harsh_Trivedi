import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    // multiple state(vastu) hoy to tene handle karva ni 1st rite a che k apde alag alag single variable banavi ne handle karo badha stated ne jem apde upar "changeFirstNameHandler" and "changelastNameHandler" banavi ne aa bane states ne alag alag handle karela che tem.....and 2nd and most effective method a che k apde aek OBJECT banavi ne badha states ne handle karo
    // apde ahiya "formData" naam no object banaviyo....and tene niche mujab initialise karavi didhu
    // state variable banaviyo..........and useState ni ander Object banaviyo
    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    // apde state variable banaviyo password mate ......and starting ma apde password nathi dekhadvo mate apde FLASE karelu che 
    const[showPassword, setShowPassword] = useState(false);

    // OBJECT vala case ma apde khali aek j handler banavi ne akha object ne handle karishu
    // apde aa function ni aa badha j state ni value ne handle(update) karishu 
    // khali event.target thi j pan element[changeHandler,submitHandler...etc...tuk ma kayo tag <input> , <textarea></textarea>,<check></check>..j pan tag che teni akhi value api deshe ] che tene apde dekhadi shakiye chiye...and event.target.value ma apde te element ni value ne dekhadi shakiye chiye
    // event.target a j element upar click kariye te element ni badhi j properties(name, value, checked, type) ni values ape che 
    // apde aa set kariye data tyare apde pase juni values(old-data) to hase j ( ...prevFormData) j(old-data ne) aana va-de apde leshu and jode j value set karvi che te hase........ahiya apde Old-data atle laishu kem k apda OBJECT ma j bija fild k element no data che te apde pase tem no tem rahe jem hato ...for example apdi pase firstName="Harsh" che and lastName="Trivedi" che have apde email="abc@gmail.com" hato tene change kari ne navo email="xyz@gmail.com" karvu che to apde aa email ni value set kariye tyare j juno data(old-data) firstName and lastName che te apdi pase tem no tem rahe te mate apde juno data ne jode lakhiye chiye and te juna data ne access karva mate apde ...prevFormData no use kariye chiye
    // pan apde to OBJECT banayo che tema apde aekk j handler banaviyu che to data kai fild(firstName, lastNam, email, comments) no change thayo che te k v rite khabar padshe??? kem k badhi fild ne aek j handler hndle kare che mate data kai fild ma update/change thayo che te khabar padva mate apde "name" attribute no use kariye chiye and aa name attribute ne generally apde j easyly khabar pade tevu naam apiye chiye
    // [event.target.name]:event.target.value             //aapde 'FORM' ni ander property access karvi hoy to apde square bracket[] ma lakhvi pade..............normal case ma apde value(event.target.value) thi apde j pan perticulour element no data nikadi shakiye chiye ....tem aa buttons(check button/redio button) na case ma apde value(event.target.value) ni jagiyaye a "checked" naam ni filed no use kari ne data ne access/nikadi shakiye chiye(atle k perticulor button a checked[selected] che k nathi te jani shakay che)
    
    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    // MMMMMMMIIIIIIMMMMPPPP
    // CONTROLL-COMPONENTS ==> MAINTAIN STATE/STATES INSIDE COMPONENTS ===> ano matalab che k apde darek component ni state maintain kari rakheli che ===> have mano k apdi pase 3 input element che , to aa 3 input element ni states pan aa loko ne(CONTROLL-COMPONETS ne) khabar hashe......apdo akho data/whole-state track thay che j ma badho j data che ....akha form no data a "formData" varible ma track thay che .......have CONTROLL-COMPONENT ma apdo darek(dar-aek) element ni ander ,te element ni state track thashe...........apdi pase mano k 3 <inpout1></inpout1>  <input2></input2> and <input3></input3> input element che to aa 3ney element ni state a aa 3ney element ni ander oan track thashe ............and avu element ni ander state ne track karva mate apde "VALUE" attribute no use karishu


    function submitHandler(event) {
        // default behaviour browser no j hoy che tene apde prevent kariye chiye
        event.preventDefault();
        // have apde j vu form submit kariye sing-in button dabavi ne tevu tarat j apde aa setIsLoggedIn(true); ne true mark karishu j thi sing-in thai jay
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        // apde j vu sing-in kariye atle APDE SIDHA DASHBOARD VALA PAGE UPAR JATA RAHIYE CHIYE TE MATE NAVIGAYE NO USE KARI TEMA APDE DASH BOARD NI LINK PASS KARI DIDHI CHE 
        navigate("/dashboard");
    }

  return (
    // apde aa form submit thay atle u karvu te mate submitHandler banavi didhu che 
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">

{/* apde <lable></lable> ni ander jo <input> tag banaviye to te auto-matic link thai jshe...j thi apde "htmlfor" attribute no use karva ni jarur nahi thay  */}
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            {/* apde aa input filed ne compolsory required kari didhi mate tema compolsory koik ne koik data nakhvo j padshe */}
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            {/* have jo apde Password ni type="password" apiye to apde password ma shu nakhiyu che te na joi shakiye atle k password HIDE rahe che pan apde to bane vastu rakhvu che bane option rakhva che k apde password ne HIDE pankari shakiye and password ne jovo hoy(SHOW) to joi pan shakiye ........have avu karva mate apde aana mate apde aek variable uparr aa Password ni type ne depend karavi didhu j tena type mujab password ne SHOW k Password ne HIDE karava nu kaam karshe */}
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            {/* apde j password vali fild che tema icon che HIDE-PASSWORD nu and SHOW-PASSWORD nu te apde add karishu.....aa icon a show passPassword ni value upar depand kare che .....jo showPasswrd true kidhu hoy to apde SHOW-PASSWORD no Icon use karishu jo ShowPassword ni value false hoy to HIDE-PASSWORD no icon use karishu */}
            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            // ahiya onclick function banavavu padshe j aa icon ne click kariye tyare shu kaam karvu ne te dekhad she ....ahiya j previous-data hoy(Show-password) hoy to click kariye to HIDE-Password kari daishu and jo hide-password hoy to show-password karishu
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm
