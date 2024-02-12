import React from 'react'
import login_img from '../images/Login.png'
import './Signup.css'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/signup');
    }
 
return (
    <>
      <div className=' flex w-full '> 
        <div className='ml-40 w-1/2 h-screen flex items-center'>
          <div className='flex-col'>
          <h1 className="mb-10 text-blue-600 text-4xl font-bold font-['Open Sans']">Placement Predictor</h1>
          
          <div className='mt-16'>
            <div className='inpbox border w-full '>
              <h1 className=''>Email</h1>
              <input placeholder='Enter Email' className='' type="text" />
            </div>
            <div className='inpbox border w-full '>
              <h1 className=''>Password</h1>
              <input placeholder='Enter Password' className='' type="password" />
            </div>
          </div>
          <div className='mt-10 flex justify-start'>
            <Button className='w-20 h-10 mr-10 text-white bg-blue-600'>Login</Button>
            <Button onClick={handleClick} className='w-20 h-10 '>Sign Up</Button>
          </div>
          </div>
        </div>
        <div className='bg-neutral-200 w-1/2 h-screen items-center justify-center'>
           <img className="pt-20 pl-20" src={login_img} alt='' />
          </div>
      </div>
    </>
  )
}

export default Signup
