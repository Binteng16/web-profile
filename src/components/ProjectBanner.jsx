import React from 'react'
import { Card } from './Card'

export const ProjectBanner = () => {
  return (
    <div className="justify-item-center">
        <p className="text-[48px] text-[#86B9B0] font-bold font-primary text-center pb-[40px]">Projects</p>
        <div className="grid grid-cols-3 gap-3 mr-[138px] ml-[138px]">
            <Card
            title="N.A.F.A.S. (Natural Air Freshness Assessment System)"
            icons={['mdi:github', 'logos:figma']}
            />
            <Card
            title="YukHadir : Digital Invitation Application and System"
            icons={['mdi:github', 'logos:figma']}
            />
            <Card
            title="Search Engine : Applications of data mining using the extended Boolean model"
            icons={['mdi:github', 'logos:figma']}
            />
            <Card
            title="License Plate Recognition Program for License Plate Detection"
            icons={['mdi:github', 'logos:figma']}
            />
            <Card
            title="Sign For Help Detect Application Program for Sign For Help Detect Application"
            icons={['mdi:github', 'logos:figma']}
            />
        </div>
    </div>
  )
}
