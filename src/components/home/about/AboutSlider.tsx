import React, { useRef, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import avatar from '/assets/avatar.png'

const carosualData = Array.from({ length: 5 }, (_, id) => ({
    id: id + 1,
    fullname: `John Smith${id + 1}`,
    desc: 'Excellent service! The cleaners were professional, and my house has never looked better. The app made booking so easy!',
    avatar: avatar,
}))

const AboutSlider: React.FC = () => {
    const [isEnd, setIsEnd] = useState(false)
    const [isBeginning, setIsBeginning] = useState(false)
    const swiperRef = useRef(null)

    const handleNext = () => {
        if (swiperRef.current) {
            ;(swiperRef.current as any).swiper.slideNext()
        }
    }

    const handlePrev = () => {
        if (swiperRef.current) {
            ;(swiperRef.current as any).swiper.slidePrev()
        }
    }
    const handleSwiperChange = () => {
        if (swiperRef.current) {
            const swiper = (swiperRef.current as any).swiper
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
        }
    }
    return (
        <>
            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={handleSwiperChange}
                modules={[Navigation]}
                breakpoints={{
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {carosualData.map((elem) => {
                    const { avatar, desc, fullname, id } = elem
                    return (
                        <SwiperSlide key={id}>
                            <div className='flex flex-col items-center justify-center h-auto lg:h-[450px] gap-3 '>
                                <div className='rounded-2xl px-12 py-8 shadow-card-shadow text-secondary mb-7 '>
                                    <div className='flex  justify-center gap-1 mb-5'>
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaRegStar className='text-yellow-500' />
                                    </div>
                                    <p className='prose-lg font-medium'>
                                        &#34;{desc}&#34;
                                    </p>
                                </div>
                                <div className='size-24 overflow-hidden rounded-full'>
                                    <img
                                        src={avatar}
                                        alt='avatar'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <h1 className='text-lg text-primary font-medium'>
                                    {fullname}
                                </h1>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className='z-30 absolute top-[55%]  left-0 px-8 flex w-full justify-between'>
                <button
                    className='swiper_custom_btn'
                    onClick={handlePrev}
                    disabled={isBeginning}
                >
                    <IoIosArrowBack />
                </button>

                <button
                    className='swiper_custom_btn'
                    disabled={isEnd}
                    onClick={handleNext}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </>
    )
}

export default AboutSlider
