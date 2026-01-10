import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='absolute bottom-0 bg-purple-700 w-full h-15 text-white'>
        <div className="absolute end-0 w-[75%] h-full bg-indigo-400 flex justify-center itm">
             <div className="flex text-3xl justify-center items-center gap-5 text-fuchsia-900">
                <button className='cursor-pointer'><SlSocialInstagram /></button> <button className='cursor-pointer'><SlSocialFacebook /> </button>
                <button className='cursor-pointer'><SlSocialTwitter /></button> 
                <button className='cursor-pointer'><FaWhatsapp /></button>
                </div>   
        </div>
    </div>
  )
}

export default Footer