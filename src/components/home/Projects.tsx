import React from 'react'
import { twMerge } from 'tailwind-merge'
import project_4 from '/assets/projects/project_4.jpg'
import project_5 from '/assets/projects/project_5.jpg'
import project_6 from '/assets/projects/project_6.jpg'
const items = [
    { id: 1, colSpan: 'col-span-1', img: project_4 },
    { id: 2, colSpan: 'col-span-1', img: project_5 },
    { id: 3, colSpan: 'col-span-2', img: project_6 },
    { id: 4, colSpan: 'col-span-2', img: project_5 },
    { id: 5, colSpan: 'col-span-1', img: project_6 },
    { id: 6, colSpan: 'col-span-1', img: project_4 },
]
const Projects: React.FC = () => {
    return (
        <>
            <section className='mt-32 px-base max-sm:px-mobile-base'>
                <div className='flex gap-4 mb-10 md:items-center max-md:flex-col'>
                    <h1 className='text-secondary text-5xl mb-5 '>
                        Our Projects{' '}
                        <span className='font-semibold block mt-1'>
                            Your Clean Spaces
                        </span>
                    </h1>
                    <p className='mb-10 prose-xl'>
                        Innovative Solutions for a Cleaner Tomorrow.
                    </p>
                </div>
                <div className='grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-4 mb-8'>
                    {items.map((elem) => {
                        const { colSpan, id, img } = elem
                        return (
                            <div
                                className={twMerge(
                                    `max-lg:col-span-1 ${colSpan} h-[220px] w-full rounded-xl overflow-hidden`
                                )}
                                key={id}
                            >
                                <img
                                    src={img}
                                    alt={`image-${id}`}
                                    className='w-full h-full object-cover bg-cover'
                                />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Projects
