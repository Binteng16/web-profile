import React from 'react'

export const HeroBanner = () => {
  return (
    <div className="flex flex-col gap-16 pl-[140px] pr-[740px] py-[200px]">
        <h1 className="text-[#86B9B0] text-[40px] font-bold font-primary">Hello!</h1>
        <div className="font-primary">
          <div className="w-[570px]">
            <h1 className="overflow-hidden border-r-4 animate-typing whitespace-nowrap border-r-white text-[48px] font-bold">
                I'am <span className="text-[#86B9B0]">Bintang Ghani</span>
            </h1>
          </div>
            <h1 className=" text-[40px] font-bold">UI/UX & Frontend Developer</h1>
        </div>
    </div>
  )
}
