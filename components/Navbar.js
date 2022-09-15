import React,{useState} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    
  const [nav,setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='fixed top-0 left-0 w-full z-10 ease-in duration-300 mb-10'>
        <div className='flex justify-between items-center p-4 text-white max-w-[1240px] m-auto'>
        <h1 className= "font-ubuntu font-bold text-4xl"><Link href="/">tindog</Link></h1>
        
            <ul className='hidden md:flex '>
                <li className='p-3'>
                    <Link href="/contacts">Contacts</Link>
                </li>
                <li className='p-3'>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li className='p-3'>
                    <Link href="/downloads">Downloads</Link>
                </li>
            </ul>
       

       {/*Mobile button*/}
       <div onClick = {handleNav} className='block md:hidden z-10'>
       {nav? <AiOutlineClose size ={20}/> :<AiOutlineMenu size={20}/> }
        
       </div>


       {/*Mobile menu*/}
       <div className={nav? 'md:hidden absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen bg-black ease-in duration-300' : 'md:hidden absolute top-0 bottom-0 left-[100%] right-0 flex items-center justify-center w-full h-screen bg-black ease-in duration-300'}>
       <ul className = "text-xl">
                <li onClick={handleNav} className='my-2 hover:text-grey-500'>
                    <Link href="/contacts">Contacts</Link>
                </li>
                <li onClick = {handleNav} className='my-2 hover:text-grey-500'>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li onClick = {handleNav} className='my-2 hover:text-grey-500'>
                    <Link href="/downloads">Downloads</Link>
                </li>
            </ul>
       </div>

       </div>
    </div>
  )
}

export default Navbar