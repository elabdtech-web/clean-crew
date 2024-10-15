import React, { useRef, useState } from 'react'
import {
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosHeartEmpty,
} from 'react-icons/io'
import { SwiperSlide, Swiper, SwiperRef } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FaStar } from 'react-icons/fa6'
import { featuredData } from '../../../content/featuredData'
import 'swiper/css'
import { Link } from 'react-router-dom'

const sliderBreakPoints = {
    '1175': {
        spaceBetween: 10,
        slidesPerView: 2.7,
    },
    '920': {
        spaceBetween: 6,
        slidesPerView: 2.3,
    },
    '628': {
        spaceBetween: 6,
        slidesPerView: 2,
    },
}
const FeaturedSec: React.FC = () => {
    const [isEnd, setIsEnd] = useState(false)
    const [isStart, setIsStart] = useState(false)
    const swiperRef = useRef<SwiperRef>(null)

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
            const activeIndex = swiperRef.current.swiper.activeIndex
            const calculateLength = Math.round(
                swiperRef.current.swiper.slides.length - 2.7
            )
            setIsStart(swiperRef.current.swiper.isBeginning)
            setIsEnd(activeIndex >= calculateLength)
        }
    }
    return (
        <>
            <section className='w-full mt-12 flex justify-between items-center flex-wrap gap-4'>
                <div className='flex gap-14 max-lg:flex-col max-lg:gap-2'>
                    <h1 className='text-2xl font-medium mb-2'>
                        Featured Cleaners
                    </h1>
                    <div className='flex items-center gap-6'>
                        <p className='text-[0.95rem] text-primary font-medium'>
                            All
                        </p>
                        <p className='text-[0.95rem] text-gray'>Trending</p>
                        <p className='text-[0.95rem] text-gray'>Top Rated</p>
                        <p className='text-[0.95rem] text-gray'>Near Me</p>
                    </div>
                </div>
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
            </section>

            {/* SLIDER SECTION */}
            <Swiper
                ref={swiperRef}
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation]}
                onSlideChange={handleSlideChange}
                breakpoints={sliderBreakPoints}
                className='py-10'
            >
                {featuredData.map((value) => {
                    const { id, image, label, price, rating, title } = value
                    return (
                        <SwiperSlide key={id}>
                            <Link
                                to={`./${id}`}
                                className='flex w-full items-center h-[120px] rounded-xl p-1 shadow-card-shadow2 gap-5 '
                            >
                                <div className='w-[45%] h-full '>
                                    <img
                                        src={image}
                                        alt='Cleaning Service'
                                        className='w-full h-full object-cover rounded-md'
                                    />
                                </div>

                                {/* Right side - Content */}
                                <div className='flex-1 flex flex-col relative'>
                                    <IoIosHeartEmpty
                                        size={21}
                                        className='text-ter mb-2 absolute right-1 top-0'
                                    />
                                    <p className='text-sm text-gray2'>
                                        {label}
                                    </p>

                                    <h2 className='text-xl text-secondary font-bold mb-2'>
                                        {title}
                                    </h2>

                                    <p className='text-lg font-medium mb-1 text-ter'>
                                        ${price}.00 (per hour)
                                    </p>
                                    <div className='mt-auto flex items-center'>
                                        <FaStar
                                            size={17}
                                            className='text-yellow-300'
                                        />
                                        <span className='ml-2 text-sm text-muted-foreground'>
                                            ({rating} reviews)
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default FeaturedSec
