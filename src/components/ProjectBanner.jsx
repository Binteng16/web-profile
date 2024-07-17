import React from 'react'
import { Card } from './Card'

export const ProjectBanner = () => {
  return (
    <div className="flex flex-col justify-center">
        <p className="text-[48px] text-[#86B9B0] font-bold font-primary text-center pb-[40px]">Projects</p>
        <div className="mx-[130px] flex justify-center">
        <div className="grid justify-center grid-cols-3 gap-3">
          <div className="w-[300px] flex justify-center">
            <Card
            title="N.A.F.A.S. (Natural Air Freshness Assessment System)"
            icons={['mdi:github', 'logos:figma']}
            />
          </div>
          <div className="w-[300px] flex justify-center">
            <Card
            title="YukHadir : Digital Invitation Application and System"
            icons={['mdi:github', 'logos:figma']}
            />
          </div>
          <div className="w-[300px] flex justify-center">
            <Card
            title="Search Engine : Applications of data mining using the extended Boolean model"
            icons={['mdi:github', 'logos:figma']}
            />
          </div>
          <div className="w-[300px] flex justify-center">
            <Card
            title="License Plate Recognition Program for License Plate Detection"
            icons={['mdi:github', 'logos:figma']}
            />
          </div>
          <div className="w-[300px] flex justify-center">
            <Card
            title="Sign For Help Detect Application Program for Sign For Help Detect Application"
            icons={['mdi:github', 'logos:figma']}
            />
          </div>
        </div>
        </div>
    </div>
  )
}
