import React from 'react'
import './Home.css'
import profile from '../images/Propic.jpg'
function home() {
  return (
    <>
      
      <div className='menu'>
        <h1 className=" logo mb-10 text-blue-600 text-3xl font-bold font-['Open Sans']">Placement Predictor</h1>
        <button className='menu-item'>Profile</button>
        <button className='menu-item'>Courses</button>
      </div>
      <div className='profile'>
        <h1 className="title">Profile</h1>
        <img className='profile-img' src={profile} alt='profile img'/>
        <p className='para-value'>Ihjazul Aslam A T</p>
        
        <p className='para'>Date of Birth</p>
        <p className='para-value'>24/09/2000</p>
        <p className='para'>Gender</p>
        <p className="para-value">Male</p>
       
        
        <p className='para'>Department</p>
        <p className="para-value">Information Technology</p>
        <p className='para'>CGPA</p>
        <p className="para-value">7.8</p>
        <p className='para'>Linked In</p>
        <a className='link' href='https://www.linkedin.com/in/ihjazul-aslam-at'>www.linkedin.com/in/ihjazul-aslam-at</a>
       </div>
       <div className='profile-btn'>
        <button className='btn-1'>Take Aptitude Test</button>
        <button className='btn-2'>Take Communication Assessment</button>
       </div>
    </>
  )
}

export default home
