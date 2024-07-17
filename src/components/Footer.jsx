import { Icon } from '@iconify/react'
import React from 'react'

export const Footer = () => {
  return (
    <div className="flex flex-col pl-[138px] pr-[138px] pb-[100px] pt-[100px] gap-5">
        <p className="text-[#86B9B0] font-primary font-bold text-[30px]">Contacts</p>
        <div className="flex flex-col gap-4">
            <a  href="https://github.com/Binteng16" target="_blank" className="flex gap-3">
                <Icon icon="mdi:github"  className="h-[30px] w-[30px]"/>
                <p className="font-primary font-bold text-[20px]">Binteng16</p>
            </a>
            <a href="https://www.linkedin.com/in/bintangghani/" target="_blank" className="flex gap-3">
                <Icon icon="mdi:linkedin"  className="h-[30px] w-[30px]"/>
                <p className="font-primary font-bold text-[20px]">Bintang Ghani</p>
            </a>
            <a href="https://www.instagram.com/bintangghanis/?hl=en" target="_blank" className="flex gap-3">
                <Icon icon="mdi:instagram" className="h-[30px] w-[30px]"/>
                <p className="font-primary font-bold text-[20px]">Bintangghanis</p>
            </a>
        </div>
    </div>
  )
}
