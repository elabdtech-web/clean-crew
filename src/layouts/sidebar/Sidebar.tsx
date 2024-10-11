import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiHomeAlt2 } from 'react-icons/bi'
import { LuSettings } from 'react-icons/lu'
import { IoIosLogOut } from 'react-icons/io'
import logo from '/assets/logo.png'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { FaRegCreditCard } from 'react-icons/fa6'

const Sidebar: React.FC = () => {
    return (
        <>
            <section className='w-[320px] h-screen px-6 pt-5 shadow-sidebar-shadow'>
                <img src={logo} alt='sidebar-logo' width={70} />
                <ul className='flex flex-col gap-4 mt-10'>
                    <li>
                        <NavLink
                            to='/dashboard'
                            end
                            className='sidebar_nav_style '
                        >
                            <BiHomeAlt2 size={24} />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='./booking' className='sidebar_nav_style '>
                            <IoCalendarClearOutline size={24} />
                            <span>Bookings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='./payments' className='sidebar_nav_style '>
                            <FaRegCreditCard size={23} />
                            <span>Payments</span>
                        </NavLink>
                    </li>
                    {/* line */}
                    <hr className='my-3 w-full border-none outline-none h-[0.9px] bg-secondary/20 rounded-2xl' />

                    <li>
                        <NavLink to='./settings' className='sidebar_nav_style '>
                            <LuSettings size={24} />
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='./logout' className='sidebar_nav_style '>
                            <IoIosLogOut size={24} />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Sidebar
