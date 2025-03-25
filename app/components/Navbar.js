import React from 'react'

const Navbar = () => {
  return (
    <div className=' p-2 bg-gray-800 flex justify-between'>
      <div className='font-extrabold text-2xl text-purple-700 '>
        CVI Hub
      </div>
      <div>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
