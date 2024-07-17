import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <div className="flex justify-between p-[138px]">
        <Image src="/Images/Profile.JPG" alt="alt" width={396} height={547} />
        <div className="flex flex-col pl-[100px] pr-[100px]">
        <div className="divide-y-2">
          <p className="text-[48px] text-[#86B9B0] font-bold font-primary">About Me</p>
            <p className="text-[18px] font-bold pt-4 font-primary">Hello! I'm Bintang, a UIUX and Frontend Developer based in Bandung, Indonesia. My strong interest in user interface (UI/UX) design and frontend development provides me with a holistic perspective in creating engaging and functional user experiences.
            </p>
        </div>
          <div className="">
            <ul className="grid grid-cols-3 gap-4 list-inside pt-[20px] list-image-icon_list font-primary">
                <li className="text-[20px] font-bold">Javascript</li>
                <li className="text-[20px] font-bold">NextJS</li>
                <li className="text-[20px] font-bold">ReactJS</li>
                <li className="text-[20px] font-bold">Tailwind</li>
                <li className="text-[20px] font-bold">Dart</li>
                <li className="text-[20px] font-bold">Flutter</li>
                <li className="text-[20px] font-bold">Figma</li>
            </ul>
          </div>
        </div>
    </div>
  )
}
