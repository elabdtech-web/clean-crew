import React from 'react'
import dashboard_banner from '/assets/dashboard/dashboard_banner.jpeg'
import FeaturedSec from './FeaturedSec'

const servicesTags = [
    'Standard cleaning',
    'Deep cleaning',
    'Kitchen cleaning',
    'Bathroom cleaning',
    'Drainage cleaning',
    'Roof cleaning',
    'Garden cleaning',
]
const DashHome: React.FC = () => {
    return (
        <>
            <div className='mt-4'>
                {/* BANNER SECTION */}
                <div className='w-full h-[200px] rounded-2xl overflow-hidden relative'>
                    <img
                        src={dashboard_banner}
                        alt='dashboard-banner'
                        className='w-full h-full absolute top-0 left-0 object-cover -z-20'
                    />
                    <div className='h-full flex justify-center flex-col float-right pr-3'>
                        <h1 className='prose-2xl text-primary font-medium w-[60%]'>
                            Get Discount Upto{' '}
                            <span className='text-ter'>25%</span>
                        </h1>
                        <p className='mt-3 prose-base text-primary font-medium'>
                            On this month
                        </p>
                    </div>
                </div>

                {/* OUR SERVICES TAGS */}
                <div className='mt-7'>
                    <h1 className='text-2xl font-medium mb-6'> Our Services</h1>
                    <div className='flex items-center gap-3 flex-wrap '>
                        {servicesTags.map((elem, index) => {
                            return (
                                <button
                                    key={index}
                                    className='shadow-dashboard-nav-shadow text-sm rounded-full py-2 px-5 border-none outline-none text-gray2'
                                >
                                    {elem}
                                </button>
                            )
                        })}
                    </div>
                </div>
                {/* OUR FEATURED SECTIONS */}
                <FeaturedSec />
            </div>
        </>
    )
}

export default DashHome
