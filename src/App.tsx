import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import AuthLayout from './pages/auth/AuthLayout'
import Dashboard from './pages/dashboard/Dashboard'
import DashHome from './components/dashboard/dashboard-home/DashHome'
import Booking from './components/dashboard/booking/Booking'

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<AuthLayout />} />
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route index element={<DashHome />} />
                    <Route path='booking' element={<Booking />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
