import React, { useState } from 'react'
import { IFAQ } from '../../../types/types'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const FAQSec: React.FC<IFAQ> = ({ answer, id, question }) => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    //
    const onClickHandler = (index: number) => {
        setActiveIndex((pre) => (pre === index ? null : index))
    }
    return (
        <>
            <div className='mx-auto max-md:w-[100%] max-lg:w-[70%] w-[50%] border-b border-secondary/40 py-5 px-4 '>
                <div
                    className='flex justify-between items-center'
                    onClick={() => onClickHandler(id)}
                >
                    <h1 className='flex-1 text-primary prose-xl cursor-pointer'>
                        {question}
                    </h1>
                    {activeIndex === id ? (
                        <IoIosArrowUp size={22} className='text-secondary/90' />
                    ) : (
                        <IoIosArrowDown
                            size={22}
                            className='text-secondary/90'
                        />
                    )}
                </div>

                <p
                    className={`${
                        activeIndex === id ? 'h-auto pt-4' : 'h-0'
                    } text-secondary prose-lg transition-all  duration-200 ease-linear w-full overflow-hidden`}
                >
                    {answer}
                </p>
            </div>
        </>
    )
}

export default FAQSec
