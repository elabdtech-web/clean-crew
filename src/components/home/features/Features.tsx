import React from 'react'
import { BsBox, BsCalendar2Date } from 'react-icons/bs'
import { FiLock } from 'react-icons/fi'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { IoMdCloudOutline } from 'react-icons/io'
import { SlGraph } from 'react-icons/sl'
import { BsBuilding } from 'react-icons/bs'
import { TbInvoice } from 'react-icons/tb'
import { AiOutlineMessage } from 'react-icons/ai'
import FeaturesCard from './FeaturesCard'
const features = [
    {
        id: 1,
        title: 'Separate Login Portal',
        para: 'Access a personalized portal designed for easy bookings and management.',
        Icon: FiLock,
        bgWhite: true,
    },
    {
        id: 2,
        title: 'Custom Booking Interface',
        para: 'Manage cleaning services tailored to your needs with a user-friendly booking system.',
        Icon: BsCalendar2Date,
        bgWhite: true,
    },
    {
        id: 3,
        title: 'Multi-Property Management',
        para: 'Seamlessly control bookings across different properties from a single dashboard.',
        Icon: BsBuilding,
        bgWhite: true,
    },
    {
        id: 4,
        title: 'Request & Customization',
        para: 'Include special instructions and personalize services for each property.',
        Icon: HiOutlineAdjustmentsHorizontal,
        bgWhite: false,
    },
    {
        id: 5,
        title: 'Inventory Management',
        para: 'Automated tracking for linens, towels, and cleaning supplies.',
        Icon: BsBox,
        bgWhite: false,
    },
    {
        id: 6,
        title: 'Automated Billing and Payment',
        para: 'Hassle-free billing with multiple payment options and invoice history.',
        Icon: TbInvoice,
        bgWhite: false,
    },
    {
        id: 7,
        title: 'Analytics and Reporting',
        para: 'Get insights on service usage, costs, and trends with detailed reports.',
        Icon: SlGraph,
        bgWhite: true,
    },
    {
        id: 8,
        title: 'Direct Communication Tools',
        para: 'Message the admin team directly through built-in tools for seamless communication.',
        Icon: AiOutlineMessage,
        bgWhite: true,
    },
    {
        id: 9,
        title: 'Integration & Hosting Platforms',
        para: 'Connect your hosting platforms for automated cleaning schedules and notifications.',
        Icon: IoMdCloudOutline,
        bgWhite: true,
    },
]
const Features: React.FC = () => {
    return (
        <>
            <section className='mt-32 px-base max-sm:px-mobile-base'>
                <div className='flex gap-4 mb-8 md:items-center max-md:flex-col'>
                    <h1 className='text-secondary text-5xl mb-5 '>
                        What Features{' '}
                        <span className='font-semibold block mt-1'>
                            We have provide
                        </span>
                    </h1>
                    <p className='mb-10 prose-xl'>
                        Comprehensive Features Designed Just for You
                    </p>
                </div>
                <div className='grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-6'>
                    {features.map((elem) => {
                        const { Icon, bgWhite, id, para, title } = elem
                        return (
                            <div
                                key={id}
                                className={`w-full max-xl:h-auto h-[300px] px-6 py-6 rounded-xl shadow-card-shadow flex justify-between flex-col  gap-7 ${
                                    bgWhite
                                        ? 'bg-white text-secondary'
                                        : 'bg-primary text-white'
                                }`}
                            >
                                <FeaturesCard
                                    title={title}
                                    para={para}
                                    id={id}
                                    Icon={Icon}
                                />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Features
