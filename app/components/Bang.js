import React from 'react'
import Image from 'next/image'

const Bang = () => {
    return (
        <div className=''>
            <div className='flex justify-center items-center'>
            <div className='bg-[#0000005b] rounded-full px-7 py-7'>
                <Image src="/comp.gif" width={200} height={200} alt='aws' />
            </div>
            
            </div>
            <div className='flex justify-evenly m-2 p-2'>
                <div className='bg-[#0000005b] rounded-full px-2 py-7'>
                    <Image src="/aws.png" width={100} height={100} alt='aws' />
                </div>
                <div className='bg-[#0000005b] rounded-full px-7 py-7 '>
                    <Image src="/git.png" width={60} height={60} alt='aws' />
                </div>
                <div className='bg-[#0000005b] rounded-full px-7 py-7 '>
                    <Image src="/gcp.png" width={60} height={60} alt='aws' />
                </div>             


            </div>
        </div>
    )
}

export default Bang
