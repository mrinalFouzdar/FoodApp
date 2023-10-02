import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 lg:h-24 px-4 lg:px-20 text-red-500 flex justify-between text-center  uppercase'>
      <Link href='/' className='font-bold text-xl'>Food House</Link>
      <p>ALL RIGHT RESERVED</p> 
    </div>
  )
}

export default Footer
