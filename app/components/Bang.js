import React from 'react'
import Image from 'next/image'

const Bang = () => {
    return (
        <div className=''>
            <div>
                
            </div>
            <div className='flex justify-evenly'>
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
