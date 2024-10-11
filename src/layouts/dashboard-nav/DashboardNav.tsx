import React from 'react'
import { GoHeart } from 'react-icons/go'
import { IoNotificationsOutline } from 'react-icons/io5'
import avatar from '/assets/avatar.png'
const DashboardNav: React.FC = () => {
    return (
        <>
            <nav className='w-full py-3 px-5 rounded-2xl flex items-center justify-between shadow-dashboard-nav-shadow'>
                <div>
                    <p className='text-secondary text-base '>Hello Admin,</p>
                    <h1 className='text-xl text-primary '>
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
