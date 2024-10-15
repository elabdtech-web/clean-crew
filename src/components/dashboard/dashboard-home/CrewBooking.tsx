import { useParams } from 'react-router-dom'
import NotFound from '../../NotFound'
import { TItems } from '../../../types/types'
import BreadCrumbs from './BreadCrumbs'
import { filteredData } from '../../../utils/filteredData'
import { GoDotFill } from 'react-icons/go'
import {
    allergies,
    bookingTiming,
    productPreference,
} from '../../../content/featuredData'
import { useState } from 'react'

const CrewBooking = () => {
    const [products, setProducts] = useState<string>('scentedProducts')
    const [chemicalsAllergies, setChemicalAllergies] =
        useState<string>('noAllergies')
    const { id } = useParams()
    const data = filteredData(id as string)
    // breadcrumbs items
    const breadCrumbsItems: TItems[] = [
        {
            id: 1,
            categories: 'Dashboard',
            link: '.././',
        },
        {
            id: 2,
            categories: 'Details',
            link: `../${id}`,
        },
        {
            id: 3,
            categories: 'Crew Booking',
            link: '.',
        },
    ]

    // on change handler
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setProducts(value)
    }
    const onChangeAllergies = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setChemicalAllergies(value)
    }
    return (
        <>
            <section className='mt-8'>
                <BreadCrumbs items={breadCrumbsItems} />
                {!data ? (
                    <NotFound />
                ) : (
                    <div className='flex gap-8 w-full max-sm:flex-col'>
                        {/* LEFT SIDE CONTENT */}
                        <div className='flex-1'>
                            <div className='mb-4'>
                                <label
                                    htmlFor='date'
                                    className='text-lg text-primary font-medium '
                                >
                                    Booking Data
                                </label>
                                <input
                                    name='data'
                                    type='date'
                                    className='w-full py-3 px-5 bg-qua mt-4 rounded-lg border-none text-primary'
                                />
                            </div>
                            <div className='w-full mt-10'>
                                <div className='w-full flex items-center justify-between'>
                                    <h1 className='text-lg text-primary font-medium '>
                                        Select time duration
                                    </h1>
                                    <p className='flex '>
                                        <span className='gap-1 text text-primary mr-2 flex items-center'>
                                            <GoDotFill
                                                size={18}
                                                className='text-gray'
                                            />{' '}
                                            Available
                                        </span>
                                        <span className='gap-1 text text-primary mr-2 flex items-center'>
                                            <GoDotFill
                                                size={18}
                                                className='text-red-600'
                                            />{' '}
                                            Booked
                                        </span>
                                    </p>
                                </div>
                                <div className='grid grid-cols-3 gap-4 mt-4'>
                                    {bookingTiming?.map((elem) => {
                                        const { available, id, timing } = elem
                                        return (
                                            <button
                                                key={id}
                                                className={`w-full min-h-14 flex justify-center
                                             items-center rounded-xl font-medium ${
                                                 available
                                                     ? 'text-black bg-qua'
                                                     : 'text-red-800 bg-red-500/15'
                                             }`}
                                            >
                                                <p>{timing}</p>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* RIGHT SIDE CONTENT */}
                        <div className='w-[55%] max-sm:w-full'>
                            <div className='mb-4'>
                                <label
                                    htmlFor='text'
                                    className='text-lg text-primary font-medium '
                                >
                                    Special instructions
                                </label>
                                <input
                                    name='text'
                                    placeholder='Write here...'
                                    type='text'
                                    className='w-full py-3 px-5 bg-qua mt-4 rounded-lg border-none text-primary'
                                />
                            </div>
                            {/* products section */}
                            <div className='mt-10'>
                                <h1 className='text-lg text-primary font-medium '>
                                    Product preference
                                </h1>
                                <div className='flex items-center justify-between flex-wrap mt-4'>
                                    {productPreference.map((elem) => {
                                        const { id, label, value } = elem
                                        return (
                                            <div
                                                className='flex gap-2 items-center '
                                                key={id}
                                            >
                                                <input
                                                    id={value}
                                                    value={value}
                                                    type='radio'
                                                    name={value}
                                                    checked={products === value}
                                                    onChange={onChangeHandler}
                                                    className='cursor-pointer'
                                                />
                                                <label
                                                    htmlFor={value}
                                                    className={`text-base cursor-pointer ${
                                                        products === value
                                                            ? 'text-primary'
                                                            : 'text-gray/60'
                                                    }`}
                                                >
                                                    {label}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* allergic section */}
                            <div className='mt-10'>
                                <h1 className='text-lg text-primary font-medium '>
                                    Allergies
                                </h1>
                                <div className=' mt-4'>
                                    {allergies.map((elem) => {
                                        const { id, label, value } = elem
                                        return (
                                            <div
                                                className='flex gap-2 items-center mb-2 last:mb-0'
                                                key={id}
                                            >
                                                <input
                                                    id={value}
                                                    value={value}
                                                    type='radio'
                                                    name={value}
                                                    checked={
                                                        chemicalsAllergies ===
                                                        value
                                                    }
                                                    onChange={onChangeAllergies}
                                                    className='cursor-pointer'
                                                />
                                                <label
                                                    htmlFor={value}
                                                    className={`text-base cursor-pointer ${
                                                        chemicalsAllergies ===
                                                        value
                                                            ? 'text-primary'
                                                            : 'text-gray/60'
                                                    }`}
                                                >
                                                    {label}
                                                </label>
                                            </div>
                                        )
                                    })}
                                    {/* show textarea if have allergies */}
                                    {chemicalsAllergies ===
                                    'specificAllergies' ? (
                                        <textarea
                                            rows={3}
                                            placeholder='What are you allergic to...'
                                            className='w-full p2 bg-qua mt-2 rounded-lg border-none text-primary resize-y'
                                        ></textarea>
                                    ) : null}
                                </div>
                            </div>

                            <div className='w-full flex justify-between items-center my-8'>
                                <h1 className='text-xl text-secondary/80'>
                                    Total Charge :{' '}
                                    <span className='text-2xl text-ter'>
                                        ${data.price}.00
                                    </span>
                                </h1>
                                <hr className='max-sm:hidden w-[0.15rem] h-full border-none outline-none bg-secondary/20' />
                                <button className='py-4 h-fit px-8 my-auto rounded-xl bg-primary text-white transition-all duration-200 ease-linear  hover:opacity-80 hover:shadow-2xl shadow-bla'>
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default CrewBooking
