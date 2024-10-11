import React from 'react'
import heroimg from '/assets/hero.png'
import curved_img from '/assets/curved_img.png'
const HeroCom: React.FC = () => {
    return (
        <section className='mt-10 relative  flex flex-col justify-center items-center text-center bg-white mb-10'>
            {/* Content */}
            <div className='z-10'>
                <h1 className='text-5xl text-secondary font-normal mb-4'>
                    Spotless Spaces
                </h1>
                <p className='text-5xl font-semibold text-secondary mb-6'>
                    Anytime Anywhere
                </p>
                <button
                    className='mt-6 px-10 py-3 bg-primary text-white rounded-lg transition-all duration-200
                ease-linear hover:opacity-80 hover:shadow-2xl'
                >
                    Get Started
                </button>
            </div>

            {/* Center Image */}
            <div className='z-10 mt-8'>
                <img
                    src={heroimg}
                    alt='Cleaning Products'
                    className='w-64 h-auto'
                />
            </div>
            {/* curved shape */}
            <div className='absolute bottom-0 left-0 w-full max-w-[100vw] h-60'>
                <img
                    src={curved_img}
                    alt='curved image'
                    className='w-full h-full max-sm:hidden'
                />
            </div>
            {/* get services section */}
            <div className='z-30 w-fit gap-4 sm:absolute max-md:-bottom-24 -bottom-16 flex items-center  py-4 px-8 rounded-lg mx-auto bg-white shadow-lg max-md:flex-wrap'>
                <h1 className='text-xl text-primary/90 font-semibold'>
                    Get Our Services
                </h1>
                <div className='w-[0.10rem] h-[30px] rounded-xl bg-primary/30 block max-sm:hidden' />
                <select className='shadow-lg border-none bg-[#D0D0D01F] rounded-lg max-md:flex-1'>
                    <option>Standard Cleaning</option>
                    <option>Premium Cleaning</option>
                    <option>Deluxe Cleaning</option>
                </select>
                <input
                    type='date'
                    placeholder='Select Date'
                    className=' shadow-md border-none bg-[#D0D0D01F] rounded-lg max-md:flex-1'
                />
                <button className='bg-ter text-white py-3 px-8 rounded-xl transition-all hover:opacity-90'>
                    View details
                </button>
            </div>
        </section>
    )
}

export default HeroCom
