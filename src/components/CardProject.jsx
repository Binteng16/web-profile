import { Icon } from '@iconify/react'
import React from 'react'

export const Card = ({title, icons}) => {
  return (
    <div className="relative w-fit h-[200px] sm:h-[313px] bg-[#042630] rounded-[30px]">
        <div className="font-bold font-primary p-[21px]">
            <p className="">{title}</p>
        </div>
        <div className="absolute bottom-0 right-0 flex pr-[24px] pb-[24px] gap-4">
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} className="h-[35px] w-[35px]" />
            ))}
        </div>
    </div>
  )
}
