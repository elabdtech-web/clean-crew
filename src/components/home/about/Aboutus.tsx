import React from 'react'
import AboutSlider from './AboutSlider'
const AboutUs: React.FC = () => {
    return (
        <>
            <section className='px-base mt-32 relative max-sm:px-mobile-base'>
                <div className='text-center mb-12'>
                    <h1 className='text-secondary text-5xl mb-6'>
                        What They{' '}
                        <span className='font-semibold block mt-1'>
                            Say About us
                        </span>
                    </h1>
                    <p className='mb-10 prose-xl'>
                        Our customer’s review and ratings
                    </p>
                </div>
                <AboutSlider />
            </section>
        </>
    )
}

export default AboutUs
