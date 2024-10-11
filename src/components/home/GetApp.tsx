import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import banner from '/assets/banner.png'
const GetApp: React.FC = () => {
    return (
        <section className='mt-32 px-base mb-8 max-sm:px-mobile-base'>
            <div className='py-4 pl-5 sm:pl-20 rounded-3xl bg-linear-gradient h-auto md:h-[470px] overflow-hidden  flex max-md:items-center relative max-md:flex-col'>
                <div className='h-full flex flex-col justify-center gap-6 '>
                    <h1 className='text-white text-3xl sm:text-5xl mb-6'>
                        Get a Cleaner{' '}
                        <span className='font-semibold block mt-2'>
                            On Demand
                        </span>
                    </h1>
                    <p className='prose-lg w-[90%] md:w-[80%] text-white'>
                        Download The Clean Crew App for Easy Booking and
                        Real-Time Tracking
                    </p>
                    <button className='w-fit flex items-center gap-3 text-lg font-medium max-sm:py-2 py-3 px-6 rounded-full text-primary bg-white  group'>
                        <span>Get the app now</span>
                        <FaArrowRightLong
                            size={20}
                            className='mt-1 transition-transform duration-200 ease-in-out group-hover:translate-x-2'
                        />
                    </button>
                    <div className='flex items-center gap-10'>
                        <div>
                            <h1 className='text-4xl text-white font-semibold'>
                                4.8
                            </h1>
                            <span className='text-[1rem] mt-1 text-white/70'>
                                Rating on App Store
                            </span>
                        </div>
                        <div>
                            <h1 className='text-4xl text-white font-semibold'>
                                700K+
                            </h1>
                            <span className='text-[1rem] mt-1 text-white/70'>
                                Active Users
                            </span>
                        </div>
                    </div>
                </div>
                {/* banner  */}
                <img
                    src={banner}
                    alt='banner'
                    className='md:absolute right-0 bottom-0 w-[450px] max-lg:w-[350px] mt-2 max-md:translate-y-5'
                />
            </div>
        </section>
    )
}

export default GetApp
