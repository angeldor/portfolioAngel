import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div>
      <AiOutlineMenu  className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex-col justify-center items-center z-20'>
                <a href="#home" className='w-[75%] flex justify-center'>
                    <AiOutlineHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
            </div>
        ): (
            <div></div>
          )
      } 
    </div>
  )
}

export default Sidenav
