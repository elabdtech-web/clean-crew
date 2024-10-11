import React from 'react'

import { LiaBroomSolid } from 'react-icons/lia'
import { FaAirbnb } from 'react-icons/fa6'
import { HiOutlineHome } from 'react-icons/hi2'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'

//  static data
const data = [
    {
        id: 1,
        title: 'Standard Cleaning',
        Icon: LiaBroomSolid,
    },
    {
        id: 2,
        title: 'Deep Cleaning',
        Icon: HiOutlineHome,
    },
    {
        id: 3,
        title: 'Airbnb Host Cleaning',
        Icon: FaAirbnb,
    },
    {
        id: 4,
        title: 'Office Cleaning',
        Icon: HiOutlineOfficeBuilding,
    },
]

const WhatWeDo: React.FC = () => {
    return (
        <>
            <section className='px-base mt-32 flex justify-between max-md:flex-col max-sm:px-mobile-base'>
                <div className='flex-[3]'>
                    <h1 className='text-secondary text-5xl mb-5 '>
                        What we{' '}
                        <span className='font-semibold block mt-1'>
                            Do for you!
                        </span>
                    </h1>
                    <p className='mb-10 prose-xl w-[90%]'>
                        Experience a full range of professional cleaning
                        services tailored to meet your home's unique needs.
                    </p>
                    <button className='py-3 px-12 rounded-full bg-primary text-white transition-all hover:shadow-2xl'>
                        Book Now
                    </button>
                </div>
                <div className='flex-[5] grid grid-cols-1 sm:grid-cols-2 gap-4 max-md:mt-5'>
                    {data?.map((elem) => {
                        const { Icon, title, id } = elem
                        return (
                            <div
                                className='w-full h-[250px] flex flex-col items-center justify-center gap-5 rounded-xl shadow-card-shadow text-primary bg-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white'
                                key={id}
                            >
                                <Icon size={60} />
                                <h2 className='font-normal text-xl'>{title}</h2>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default WhatWeDo
