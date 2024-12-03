import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.webp';
import patern from '../../assets/images/pattern.webp';
import { MyContext } from '../../App';

import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import Button from '@mui/material/Button';

import { RiAdminFill } from "react-icons/ri";

const Login = () =>{

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setisShowPassword] = useState(false);
    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true);
    },[]); 

    const focusInput=(index)=>{
        setInputIndex(index);
    }

    return (
        <>
           <img src={patern} className="loginPatern"/>
            <section className="loginSection">
                <div className="loginBox">
                    <div className='logo text-center'>
                        <img src={logo} width="60px"/>
                        <h5 className='font-weight-bold'>Login to Ahiltech</h5>
                    </div>
                    <div className="wrapper mt-3 card border">
                        <form>
                            <div className={`form-group mb-3 position-relative ${inputIndex===0 && 'focus'}`}>
                                <span className="icon"><MdEmail/></span>
                                <input type="text" className='form-control' placeholder='enter your email' onBlur={()=>focusInput(null)} autoFocus/>
                            </div> 
                            <div className={`form-group mb-3 position-relative ${inputIndex===1 && 'focus'}`}>
                                <span className="icon"><RiLockPasswordFill/></span>
                                <input type={`${isShowPassword==true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password' onBlur={()=>focusInput(1)}/>
                                <span className="toggleShowPassword" onClick={()=>setisShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword===true ? <IoMdEyeOff/> : <IoMdEye/>
                                    }
                                    </span>
                            </div> 
                            <div className={`form-group mb-3 position-relative ${inputIndex===1 && 'focus'}`}>
                                <span className="icon"><RiAdminFill/></span>
                                <select class="form-control">
                                    <option value="">Select Roll</option>
                                    <option value="">Superadmin</option>
                                    <option value="">Admin</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <Button className="btn-blue btn-lg w-100 btn-big">Sign In</Button>
                            </div>
                            <div className="form-group text-center">
                                <Link to={'/forgot-password'} className="link">FORGOT PASSWORD</Link>
                            </div>
                            <div className="d-flex align-items-center justify-content-center or mt-3 mb-3"> 
                                <span className="line"></span>
                                <span className="text">or</span>
                                <span className="line"></span>
                            </div>     
                            {/* <Button variant="outlined" className="w-100 btn-big loginWithGoogle">Sign In with Google </Button> */}
                        </form> 
                    </div>
                </div>
            </section>        
        </>
    )
}
export default Login;