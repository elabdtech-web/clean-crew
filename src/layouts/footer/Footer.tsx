import React from 'react'
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6'
import logo from '/assets/logo.png'
import { Link } from 'react-router-dom'
import { TbSend2 } from 'react-icons/tb'
const Footer: React.FC = () => {
    return (
        <footer className='mt-40 w-full flex gap-4 px-base pb-16 max-lg:flex-wrap max-sm:px-mobile-base'>
            <div className='flex-1'>
                <img alt='footer-logo' src={logo} width={70} />
                <div className='mt-8 flex gap-4 items-center text-xl'>
                    <Link to='http://instagram.com' target='_blank'>
                        <FaInstagram />
                    </Link>
                    <Link to='http://facebook.com' target='_blank'>
                        <FaFacebook />
                    </Link>
                    <Link to='http://x.com' target='_blank'>
                        <FaXTwitter />
                    </Link>
                </div>
            </div>
            {/* about section */}
            <div className='flex-1'>
                <h1 className='prose-xl text-primary font-medium'>About</h1>
                <ul className='mt-3 text-secondary text-[1rem] '>
                    <li className='mb-2'>
                        <Link to='#'>About Us</Link>
                    </li>
                    <li>
                        <Link to='#'>FAQ</Link>
                    </li>
                </ul>
            </div>
            {/* Company section */}
            <div className='w-auto'>
                <h1 className='prose-xl text-primary font-medium'>Company</h1>
                <ul className='mt-3 text-secondary text-[1rem] '>
                    <li className='mb-1'>
                        <Link to='#'>Why us?</Link>
                    </li>
                    <li className='mb-1'>
                        <Link to='#'>Privacy policy</Link>
                    </li>
                    <li>
                        <Link to='#'>Terms & Conditions</Link>
                    </li>
                </ul>
            </div>
            {/* contact section */}
            <div className='flex-1'>
                <h1 className='prose-xl text-primary font-medium'>Support</h1>
                <ul className='mt-3'>
                    <li>
                        <Link to='#'>Contact us</Link>
                    </li>
                </ul>
            </div>
            {/* get in touch section */}
            <div className='w-auto'>
                <h1 className='prose-xl text-primary font-medium'>
                    Get in Touch
                </h1>
                <p className='mt-3 text-primary'>Question or feedback?</p>
                <p className='mt-1 text-primary text-[1rem]'>
                    We’d love to hear from you
                </p>
                <div className='flex items-center gap-2 mt-6 relative'>
                    <input
                        required
                        name='email'
                        type='email'
                        className='w-full rounded-full border  py-2 pl-4 pr-10 text-primary'
                        placeholder='Email Address'
                    />
                    <TbSend2
                        size={25}
                        className='text-ter cursor-pointer absolute right-5'
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer
