import React, { useState } from 'react'
import logo from '/assets/logo.png'
import { Link } from 'react-router-dom'
import { CiLogin, CiMenuFries } from 'react-icons/ci'
import { CgClose } from 'react-icons/cg'

const Navbar: React.FC = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false)

    // toggle navbar
    const openMenu = () => {
        setToggleNavbar(true)
    }
    const closeMenu = () => {
        setToggleNavbar(false)
    }
    return (
        <>
            <nav className='px-base py-4 flex justify-between relative max-sm:px-mobile-base'>
                <img src={logo} alt='logo' width={80} />
                <ul
                    className={`flex items-center gap-8 text-secondary font-medium max-lg:flex-col max-lg:fixed max-lg:top-0 ${
                        toggleNavbar ? 'right-0' : '-right-full'
                    } max-lg:justify-center max-lg:gap-4  max-lg:bg-white z-50 max-lg:py-5 max-lg:px-8 max-lg:prose-lg max-lg:h-screen max-lg:w-[30%] max-md:w-[70%] transition-all duration-300 ease-linear`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={logo}
                        alt='logo'
                        width={60}
                        className='max-lg:block hidden'
                    />
                    <li onClick={closeMenu}>
                        <Link to='#'>Why us?</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link to='#'>About</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link to='#'>Privacy</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link to='#'>Contact</Link>
                    </li>
                    <li onClick={closeMenu} className='lg:hidden'>
                        <Link to='#'>Login</Link>
                    </li>
                    <li onClick={closeMenu} className='lg:hidden'>
                        <Link to='#'>Sign Up</Link>
                    </li>
                    <li
                        className='max-lg:block hidden absolute top-2 right-10 text-2xl '
                        onClick={closeMenu}
                    >
                        <CgClose />
                    </li>
                </ul>
                <div className='flex items-center gap-6'>
                    <button className='text-primary text-base font-semibold max-lg:hidden'>
                        Sign Up
                    </button>
                    <button className='bg-primary text-white py-[0.65rem] px-6 rounded-full flex items-center gap-2 font-normal text-base max-lg:hidden'>
                        <CiLogin size={23} className='' />
                        <span className='text-base '>Login</span>
                    </button>
                    <CiMenuFries
                        size={25}
                        className='max-lg:block hidden cursor-pointer'
                        onClick={openMenu}
                    />
                </div>
            </nav>
        </>
    )
}

export default Navbar
