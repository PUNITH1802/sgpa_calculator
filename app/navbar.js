"use client"
import React from 'react'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const ref = useRef();
  
  const display=()=>{
    ref.current.style.display="block";
  }
  const hide=()=>{
    ref.current.style.display="none";
  }
  const github_punith=()=>{
    window.location.href="https://github.com/PUNITH1802";
  }
  const insta_punith=()=>{
    window.location.href="https://www.instagram.com/punithh_18?igsh=MWViemUxcjNzNWQ1Zg==";
  }
  const linkedin_punith=()=>{
    window.location.href="https://www.linkedin.com/in/punithkumar2003?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  }

  const refresh=()=>{
    window.location.reload();
  }
  return (
   <div >
    <div className='w-[98%] m-4   fixed top-0   justify-between text-black font-serif flex'>
       <div className='flex gap-4'><div className='text-5xl font-semibold '>SGPA</div>
       <div className='text-xl font-semibold  flex pt-5'>CALCULATOR</div>
       </div>
       <button onClick={display} className='fixed top-4 right-5 md:hidden p-5 '><IoMenu/></button> 
   <div className='sm:hidden md:block flex p-5'>
    <ul className='flex  gap-8  list-disc'>
        <li className='cursor-pointer hidden md:block'><button onClick={refresh}>Home</button></li>
        <li className='cursor-pointer hidden md:block'><Link href="https://drive.google.com/drive/folders/1--yy6YZDHZLS4IBTn5VVAWTy3ZqJTxXn">Question paper</Link></li>
        <li className='cursor-pointer hidden md:block'><Link href="https://drive.google.com/drive/folders/1KeULV3o_DqNCDdEMIfuucISjOR-RKsbF">Notes</Link></li>
        <li className='cursor-pointer hidden md:block'><Link href="https://uucms.karnataka.gov.in/Login/Index_Eng">UUCMS</Link></li>
        <li className='cursor-pointer hidden md:block'><Link href="https://uvce.ac.in/">UVCE Official</Link></li>
    </ul>
   </div>
    </div>
    <div ref={ref} className='sm:fixed  z-10 top-0 right-0 md:hidden hidden delay-1000 sm:bg-white sm:w-[70%] sm:h-[50%]  sm:justify-center sm:pt-12'>
      <button onClick={hide} className='text-black  sm:fixed top-5 right-5'><AiOutlineClose /></button>
    <ul className='flex flex-col' >
        <li className=' sm:text-md text-center p-4 font-serif w-full font-semibold text-black cursor-pointer border drop-shadow-md bg-white'><button onClick={refresh}>Home</button></li>
        <li className=' sm:text-md text-center p-4 font-serif  w-full font-semibold text-black cursor-pointer border drop-shadow-md bg-white'><Link href="https://drive.google.com/drive/folders/1--yy6YZDHZLS4IBTn5VVAWTy3ZqJTxXn">Question paper</Link></li>
        <li className=' sm:text-md text-center p-4 font-serif w-full font-semibold text-black cursor-pointer border drop-shadow-md bg-white'><Link href="https://drive.google.com/drive/folders/1KeULV3o_DqNCDdEMIfuucISjOR-RKsbF">Notes</Link></li>
        <li className=' sm:text-md text-center p-4 font-serif w-full font-semibold text-black cursor-pointer border drop-shadow-md bg-white'><Link href="https://uucms.karnataka.gov.in/Login/Index_Eng">UUCMS</Link></li>
        <li className=' sm:text-md text-center p-4 font-serif w-full font-semibold text-black cursor-pointer border drop-shadow-md bg-white'><Link href="https://uvce.ac.in/">UVCE Official</Link></li>
    </ul>
    <div className=' p-2 border drop-shadow-md bg-white text-black w-full '>
      <div className='text-[10px] font-serif font-semibold'>Devoloped by</div>
      <div className="flex justify-around p-1 bg-white text-black w-full">
      <div><button onClick={insta_punith}><FaInstagram /></button></div>
      <div><button onClick={linkedin_punith}><FaLinkedin /></button></div>
      <div><button onClick={github_punith}><FaGithub /></button></div></div>
    </div>
   
   </div>
  </div>
  )
}

export default Navbar