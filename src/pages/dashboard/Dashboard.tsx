import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../layouts/sidebar/Sidebar'
import DashboardNav from '../../layouts/dashboard-nav/DashboardNav'
const Dashboard: React.FC = () => {
    return (
        <>
            <section className='flex'>
                <Sidebar />
                <div className='w-full px-base pt-4 h-screen overflow-y-auto'>
                    <DashboardNav />
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default Dashboard
