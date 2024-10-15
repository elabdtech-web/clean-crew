import React, { useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { IBookingLayout } from '../../../types/types'

const breakingPoints = {
    '778': {
        spaceBetween: 10,
        slidesPerView: 2,
    },
    '570': {
        spaceBetween: 8,
        slidesPerView: 1.4,
    },
}
const BookingLayout: React.FC<IBookingLayout> = ({ data, mainTitle }) => {
    const [isEnd, setIsEnd] = useState(false)
    const [isStart, setIsStart] = useState(false)
    const swiperRef = useRef<SwiperRef>(null)
    //
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev()
        }
    }
    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext()
        }
    }
    //
    const handleSlideChange = () => {
        if (swiperRef.current) {
            setIsStart(swiperRef.current.swiper.isBeginning)
            setIsEnd(swiperRef.current.swiper.isEnd)
        }
    }
    return (
        <>
            <div className='flex items-center justify-between mt-4'>
                <h1 className='text-2xl font-medium mb-2'>{mainTitle}</h1>

                <div className='flex items-center gap-5'>
                    <button
                        className='swiper_custom_btn size-8 shadow-card-shadow'
                        onClick={handlePrev}
                        disabled={isStart}
                    >
                        <IoIosArrowBack />
                    </button>

                    <button
                        className='swiper_custom_btn size-8 shadow-card-shadow'
                        disabled={isEnd}
                        onClick={handleNext}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>

            {/* SLIDER SECTION */}
            <Swiper
                ref={swiperRef}
                spaceBetween={8}
                slidesPerView={1}
                modules={[Navigation]}
                breakpoints={breakingPoints}
                onSlideChange={handleSlideChange}
                className='py-3 px-3 bg-white shadow-none'
            >
                {data.map((value) => {
                    const { id, image, label, date, title, status } = value
                    return (
                        <SwiperSlide key={id}>
                            <div className='flex w-full max-xxsm:flex-col items-center h-auto xxsm:h-[140px] rounded-xl p-3 shadow-card-shadow2 gap-5 '>
                                <div className='w-[40%] max-xxsm:w-full h-full '>
                                    <img
                                        src={image}
                                        alt='Cleaning Service'
                                        className='w-full h-full object-cover rounded-md'
                                    />
                                </div>

                                {/* Right side - Content */}
                                <div className='flex-1 flex flex-col max-xxsm:w-full'>
                                    <p className='text-sm text-gray2'>
                                        {label}
                                    </p>

                                    <h2 className='text-xl text-secondary font-bold mb-2'>
                                        {title}
                                    </h2>

                                    <p className='text-base font-normal mb-1 text-ter'>
                                        {date}
                                    </p>
                                    <div className='mt-1 flex  items-center justify-between'>
                                        <p
                                            className={`text-[0.9rem] text-white py-1 px-7 max-sm:px-3 rounded-full ${
                                                status === 'Upcoming'
                                                    ? 'bg-yellow-400'
                                                    : status === 'Completed'
                                                    ? 'bg-green-400'
                                                    : 'bg-red-500'
                                            }`}
                                        >
                                            {status}
                                        </p>
                                        <Link
                                            to='#'
                                            className='text-ter font-medium prose-base'
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default BookingLayout
