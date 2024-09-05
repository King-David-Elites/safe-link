'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import ProfilePhotos from '@/components/ProfilePhotos';
import ProfileVideo from '@/components/ProfileVideo';

const page = () => {
    const router = useRouter()
    const [type, setType] = useState<"photos" | "video">("photos");
  return (
    <section className="px-[4%]">
          <header className="flex items-center justify-between py-5">
        <div onClick={() => {
            router.back()
        }}>
          <FaArrowLeft size={20} />
        </div>
        <div className="flex-1 flex items-center justify-center gap-3">
          <button onClick={() => setType('photos')} className={` ${type === "photos" ? 'bg-[#0D0D0D] text-[#F2F2F2]' : 'bg-[#A6A6A633] text-[#252625CC] '} p-3  text-[12px] leading-4 capitalize rounded-md focus:outline-none`}>photos</button>
          <button onClick={() => setType('video')} className={`${type === "video" ? 'bg-[#0D0D0D] text-[#F2F2F2]' : 'bg-[#A6A6A633] text-[#252625CC] '} p-3 text-[12px] leading-4 capitalize rounded-md focus:outline-none`}>video</button>
        </div>
      </header>
      <div>
        {type === 'photos' ? (
            <ProfilePhotos/>
        ) : (
            <ProfileVideo/>
        )}
      </div>
    </section>
  )
}

export default page