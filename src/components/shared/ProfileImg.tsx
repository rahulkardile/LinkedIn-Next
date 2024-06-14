import Image from 'next/image'
import React from 'react'

const ProfileImg = ({ src }: { src: string }) => {
    return (
        <Image src={src} width={1000} height={1000} alt="avatar" className='w-14 h-14 rounded-full' />
    )
}

export default ProfileImg