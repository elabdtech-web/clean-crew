import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BreadCrumbs from './BreadCrumbs'
import { TItems } from '../../../types/types'
import { SlLocationPin } from 'react-icons/sl'
import { FaStar } from 'react-icons/fa6'
import NotFound from '../../NotFound'
import { filteredFeaturedData } from '../../../utils/filteredData'
// breadcrumbs items
const breadCrumbsItems: TItems[] = [
    {
        id: 1,
        categories: 'Dashboard',
        link: '../',
    },
    {
        id: 2,
        categories: 'Details',
        link: ' ',
    },
]
const FeaturedDetail: React.FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const filteredData = filteredFeaturedData(id as string)
    // handle on clicked
    const handleOnClick = () => {
        navigate(`./b`)
    }
    return (
        <>
            <section className='mt-8'>
                <BreadCrumbs items={breadCrumbsItems} />
                {!filteredData ? (
                    <NotFound />
                ) : (
                    <>
                        <div className='w-full h-[280px] bg-secondary/50 rounded-2xl overflow-hidden'>
                            <img
                                src={filteredData?.image}
                                alt='details image'
                                loading='lazy'
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='flex justify-between mt-8 max-sm:flex-col gap-4'>
                            <div>
                                <h1 className='text-2xl text-primary font-medium'>
                                    {filteredData?.title}{' '}
                                    <span className='text-lg ml-1 font-normal'>
                                        ({filteredData?.label})
                                    </span>
                                </h1>
                                <p className='mt-2 text-base text-secondary/70 flex gap-2 items-center'>
                                    <SlLocationPin />
                                    {filteredData?.location}
                                </p>
                            </div>

                            <div className='flex gap-6 '>
                                <div>
                                    <h1 className='text-2xl text-ter font-medium'>
                                        ${filteredData?.price}.00{' '}
                                        <span className='text-secondary/60 text-lg ml-1 font-normal max-xxsm:block'>
                                            (per hour)
                                        </span>
                                    </h1>
                                    <p className='flex items-center mt-2'>
                                        <FaStar
                                            size={17}
                                            className='text-yellow-300'
                                        />
                                        <span className='ml-2 text-sm text-muted-foreground'>
                                            ({filteredData?.rating} reviews)
                                        </span>
                                    </p>
                                </div>
                                <hr className='max-sm:hidden w-[0.15rem] h-full border-none outline-none bg-secondary/20' />
                                <button
                                    onClick={handleOnClick}
                                    className='py-3 h-fit px-8 my-auto rounded-xl bg-primary text-white transition-all duration-200 ease-linear  hover:opacity-80 hover:shadow-2xl shadow-bla'
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                        {/* about */}
                        <div className='my-6'>
                            <h1 className='text-xl text-primary mb-1 font-medium'>
                                About Us
                            </h1>
                            <p className='text-secondary/70 prose-base'>
                                {filteredData?.about}
                            </p>
                        </div>
                    </>
                )}
            </section>
        </>
    )
}

export default FeaturedDetail
