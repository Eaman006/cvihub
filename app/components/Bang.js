import React from 'react'
import Image from 'next/image'

const Bang = () => {
    return (
        <div className='relative'>
            {/* Center image */}
            <div className='flex justify-center items-center relative'>
                <div className='bg-[#0000005b] rounded-full px-7 py-7 relative z-10'>
                    <img src="/comp.gif" width={200} height={200} alt='computer' />
                </div>
            </div>
            {/* Horizontal connecting line */}
            <div className="absolute top-56 left-1/4 w-1/2 h-0.5 bg-gray-400"></div>

            {/* Vertical lines */}
            <div className="absolute top-52 left-1/4 w-0.5 h-24 bg-gray-400"></div>
            <div className="absolute top-28 left-1/2 w-0.5 h-64 bg-gray-400"></div>
            <div className="absolute top-52 left-3/4 w-0.5 h-24 bg-gray-400"></div>

            {/* Horizontal connecting line */}
            

            {/* Container for icons */}
            <div className='flex justify-evenly items-start px-2 pt-24 relative'>
                <div className='bg-[#0000005b] rounded-full p-5 relative z-10'>
                    <Image src="/aws.png" width={100} height={100} alt='aws' />
                </div>
                <div className='bg-[#0000005b] rounded-full p-5 relative z-10'>
                    <Image src="/git.png" width={60} height={60} alt='git' />
                </div>
                <div className='bg-[#0000005b] rounded-full p-5 relative z-10'>
                    <Image src="/gcp.png" width={60} height={60} alt='gcp' />
                </div>
            </div>
        </div>
    )
}

export default Bang
