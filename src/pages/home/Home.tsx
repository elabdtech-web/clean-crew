import React from 'react'
import HeroCom from '../../components/home/HeroCom'
import WhatWeDo from '../../components/home/WhatWeDo'
import Features from '../../components/home/features/Features'
import AboutUs from '../../components/home/about/Aboutus'
import Projects from '../../components/home/Projects'
import FAQ from '../../components/home/faq/FAQ'
import GetApp from '../../components/home/GetApp'
import Navbar from '../../layouts/navbar/Navbar'
import Footer from '../../layouts/footer/Footer'

const Home: React.FC = () => {
    return (
        <>
            <div className='max-w-[1480px] mx-auto'>
                <Navbar />
            </div>
            <HeroCom />
            <div className='max-w-[1480px] mx-auto'>
                <WhatWeDo />
                <Features />
                <AboutUs />
                <Projects />
                <FAQ />
                <GetApp />
                <Footer />
            </div>
        </>
    )
}

export default Home
