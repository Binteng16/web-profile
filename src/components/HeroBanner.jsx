import React from 'react'

export const HeroBanner = () => {
  return (
    <div className="flex flex-col gap-16 py-[200px] px-10 sm:pl-[140px]">
        <h1 className="text-[#86B9B0] font-bold font-primary text-[30px] text-center sm:text-start sm:text-[40px]">Hello!</h1>
        <div className="font-primary">
          <div className="w-fit">
            <h1 className="overflow-hidden font-bold sm:border-r-4 sm:animate-typing whitespace-nowrap border-r-white text-[30px] text-center sm:text-[48px] sm:text-start">
                I'am <span className="text-[#86B9B0]">Bintang Ghani</span>
            </h1>
          </div>
            <h1 className=" text-[30px] sm:text-start text-center font-bold sm:text-[40px]">UI/UX & Frontend Developer</h1>
        </div>
    </div>
  )
}
