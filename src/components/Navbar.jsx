import React from 'react'

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#041421] border-b-2 border-[#86B9B0]">
    <div className="flex justify-between px-[50px] py-[21px] text-[#86B9B0] font-primary">
        <div className="text-[20px] font-bold">
        <p className="">BINTANG</p>
        </div>
        <div className="flex flex-row gap-4 text-[20px] font-bold">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Projects</p>
            <p className="cursor-pointer">Contacts</p>
        </div>
    </div>
    </div>
  )
}