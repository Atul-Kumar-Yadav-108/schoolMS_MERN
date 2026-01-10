import React from 'react'
import { FaSchool } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
        <div className="navbar text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu text-white font-semibold menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow-xl">
                    <li><a>Home</a></li>
                    <li><a>Courses</a></li>
                    <li><a>Services</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Sign up</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl felx"><FaSchool /> Grukul Gyan</a>
            </div>
            <div className="navbar-center gap-5 hidden md:flex">
                <a href="" className='font-semibold text-lg'>Home</a>
                <a href="" className='font-semibold text-lg'>Courses</a>
                <a href="" className='font-semibold text-lg'>Services</a>
                <a href="" className='font-semibold text-lg'>Contact</a>
            </div>
            <div className="navbar-end font-semibold">
                <button className='cursor-pointer active:scale-95 hidden md:block'>Sign up</button>
                <button className='flex items-center gap-3 md:pe-20 md:ms-10 bg-yellow-300 py-2 px-4 text-indigo-800 rounded-s-3xl cursor-pointer'><span className='active:scale-105 flex items-center gap-3'><span className='text-3xl'><FaUserCircle /></span> Log in</span></button>
            </div>
        </div>
    </>
  )
}

export default Navbar