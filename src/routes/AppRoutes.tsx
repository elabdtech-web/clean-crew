import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import AuthLayout from '../pages/auth/AuthLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import DashHome from '../components/dashboard/dashboard-home/DashHome'
import Booking from '../components/dashboard/booking/Booking'
import FeaturedDetail from '../components/dashboard/dashboard-home/FeaturedDetail'
import CrewBooking from '../components/dashboard/dashboard-home/CrewBooking'
import Payment from '../components/dashboard/payments/Payment'
import Settings from '../components/dashboard/settings/Settings'
import MainContextProvider from '../context/MainContext'

const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<AuthLayout />} />
                <Route
                    path='/dashboard'
                    element={
                        <MainContextProvider>
                            <Dashboard />
                        </MainContextProvider>
                    }
                >
                    <Route index element={<DashHome />} />
                    <Route path=':id' element={<FeaturedDetail />} />
                    <Route path=':id/b' element={<CrewBooking />} />
                    <Route path='booking' element={<Booking />} />
                    <Route path='payments' element={<Payment />} />
                    <Route path='settings' element={<Settings />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes
