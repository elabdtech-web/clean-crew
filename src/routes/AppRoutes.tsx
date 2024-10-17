import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContextProvider from '../context/MainContext'
import Loading from '../components/Loading'
const Home = lazy(() => import('../pages/home/Home'))
const AuthLayout = lazy(() => import('../pages/auth/AuthLayout'))
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'))
const DashHome = lazy(
    () => import('../components/dashboard/dashboard-home/DashHome')
)
const Booking = lazy(() => import('../components/dashboard/booking/Booking'))
const FeaturedDetail = lazy(
    () => import('../components/dashboard/dashboard-home/FeaturedDetail')
)
const CrewBooking = lazy(
    () => import('../components/dashboard/dashboard-home/CrewBooking')
)
const Payment = lazy(() => import('../components/dashboard/payments/Payment'))
const Settings = lazy(() => import('../components/dashboard/settings/Settings'))

const AppRoutes: React.FC = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
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
            </Suspense>
        </>
    )
}

export default AppRoutes
