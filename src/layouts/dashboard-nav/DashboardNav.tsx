import React from 'react'
import { GoHeart } from 'react-icons/go'
import { IoNotificationsOutline } from 'react-icons/io5'
import { CgMenuLeft } from 'react-icons/cg'
import avatar from '/assets/avatar.png'
import { useMainContext } from '../../context/MainContext'
const DashboardNav: React.FC = () => {
    const { showSidebar } = useMainContext()

    return (
        <>
            <nav
                className='w-full py-3 px-5 rounded-2xl flex items-center justify-between shadow-dashboard-nav-shadow'
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <p className='text-secondary text-base '>Hello Admin,</p>
                    <h1 className='text-xl text-primary max-sm:hidden'>
                        What services do you need today!
                    </h1>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='size-10 rounded-full shadow-card-shadow grid place-items-center'>
                        <GoHeart size={21} />
                    </p>
                    <p className='size-10 rounded-full shadow-card-shadow grid place-items-center'>
                        <IoNotificationsOutline size={21} />
                    </p>
                    <button
                        className='text-ter  size-10 rounded-full shadow-card-shadow max-lg:grid max-lg:place-items-center hidden'
                        onClick={() => showSidebar()}
                    >
                        <CgMenuLeft size={21.5} />
                    </button>
                    <div className='size-12 rounded-full overflow-hidden'>
                        <img
                            src={avatar}
                            alt='profile'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DashboardNav
