import React from 'react'
import Image from 'next/image'


function Hero() {
  return (
    <div>
        <h1>Meet new and interesting dogs nearby</h1>
        <button>Download</button>
        <button>Download</button>
        <Image src = '/images/iphone6.png' width = '100%' height = '100%' alt = 'iphone'/>
    </div>
  )
}

export default Hero