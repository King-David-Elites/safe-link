import React from 'react'
import { useRouter } from 'next/navigation'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

const ProfileVideo = () => {
    const router = useRouter()
  return (
    <div>
         <div className='my-5'>
      <h2 className="text-black text-[14px] leading-4 font-semibold tracking-wide">Description</h2>
      <p className="text-[10px] leading-4 text-[#444544] tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempor mattis turpis egestas quam cursus sit lobortis. Quam cursus bibendum im ut in quam et dis dui. Egestas egestas elementum proin purus. </p>
    </div>
    <div>
        <img src={'/video.png'} alt="" />
    </div>
    
    <div className="my-3">
      <button className=" bg-[#F2BE5C] w-full rounded text-white p-2">Add this item to your List</button>

      <div className="bg-[#B28E49] rounded-md p-2 my-3">
          <p className="text-[12px] leading-4 font-semibold text-white">Your List</p>
          <div className='bg-white p-1 flex items-center justify-between gap-3 my-2 rounded-md'>
            <img className='w-10 h-10' src={'/image2.jpg'} alt="" />
            <div className='flex-1'>
                <h3 className='text-[#F2BE5C] font-semibold text-[12px] leading-5'>Black and White Crop Top</h3>
                <small className='font-medium text-[12px] leading-5'>N2,500</small>
            </div>
            <div className='flex items-center gap-2'>
                <img src={'/remove.svg'} alt="" />
                <small>1</small>
                <img src={'/add.svg'} alt="" />
                <MdDelete className='text-[#DC1F1F]' size={20} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-1">
              <button className="text-white font-semibold text-[12px] leading-5 flex items-center gap-3 bg-[#4CAF50] p-2 rounded-md my-2 flex-1 text-nowrap">
                  <IoLogoWhatsapp size={25}/>
                  Share list to seller via Whatsapp
              </button>
              <button className="text-white font-semibold text-[12px] leading-5 flex items-center gap-3 bg-[#A70A0A] p-2 rounded-md my-2 text-nowrap">
                  <MdDelete size={25}/>
                 Clear list
              </button>
          </div>
      </div>
    </div>
    </div>
  )
}

export default ProfileVideo