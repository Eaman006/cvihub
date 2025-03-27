import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=' p-2 bg-gray-800 flex justify-between'>
      <div className='font-extrabold text-3xl text-purple-400 flex items-center'>
        <img src="/comp.gif" width={70} height={40} alt='top logo' />
        <div>
        CVI Hub
        </div>
      </div>
      <div>
        

      </div>
    </div>
  )
}

export default Navbar
