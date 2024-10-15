import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../layouts/sidebar/Sidebar'
import DashboardNav from '../../layouts/dashboard-nav/DashboardNav'
import { useMainContext } from '../../context/MainContext'
const Dashboard: React.FC = () => {
    const { closedSidebar } = useMainContext()
    return (
        <>
            <section className='flex' onClick={() => closedSidebar()}>
                <Sidebar />
                <div className='w-full px-base max-lg:px-mobile-base pt-4 h-screen overflow-y-auto'>
                    <DashboardNav />
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default Dashboard
