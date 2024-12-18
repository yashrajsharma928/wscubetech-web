import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Header() {
const[toggle,setToggle] =useState(false);
  return (
    
    <div className='bg-[#2699fb] p-4 '>
      <div className='max-w-[1240px] py-[11px] mx-auto flex justify-between items-center '>
        <div className='text-3xl font-bold'>Ws Cube Tech</div>
        {
        toggle?
              ( <IoClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />)
:
( <IoMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' /> )

      }
        {/* <IoMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
         <IoClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />  */}
        <ul className='  text-white gap-10 hidden md:flex'><li>home</li>
        <li>company</li>
        <li>resources</li>
        <li>about</li>
        <li>contect</li>
        </ul>
       {/* Responsive menu */}
<ul
  className={`text-white fixed duration-300 bg-black md:hidden w-full h-screen top-[92px] 
    ${toggle ? 'left-[0]' : 'left-[-100%]'}`}
>
  <li className='p-5'>home</li>
  <li className='p-5'>company</li>
  <li className='p-5'>resources</li>
  <li className='p-5'>about</li>
  <li className='p-5'>contact</li>
</ul>

        </div>
     </div>
    
  )
}

