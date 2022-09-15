import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import Link from 'next/link';

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className='flex flex-col items-center justify-center py-[7%]'>
        <div className='flex py-4'>
            <i className='mx-4'><FaFacebookF size={25}/></i>
            <i className='mx-4'><FaTwitter size={25}/></i>
            <i className='mx-4'><FaInstagram size={25}/></i>
            <i className='mx-4'><Link href="/contacts"><GrMail size={25}/></Link>
            </i>
        </div>
        <h3 className='text-base'>Copyright@{currentYear}</h3>
    </div>
  )
}

export default Footer