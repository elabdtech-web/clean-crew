import React, { useState } from 'react'
import logo from '/assets/logo.png'
import { Link } from 'react-router-dom'
import Login from './Login'
import SignUp from './Signup'
import Footer from '../../layouts/footer/Footer'

const AuthLayout: React.FC = () => {
    const [isLoginCom, setIsLoginCom] = useState(true)

    return (
        <>
            <section className='max-w-[1480px] mx-auto px-base pt-6 max-sm:px-mobile-base'>
                <Link to='/'>
                    <img src={logo} alt='logo-auth' width={60} />
                </Link>
                <div className='mt-12 w-2/5 max-lg:w-[60%] max-md:w-[80%] max-sm:w-[100%] h-auto mx-auto px-8 py-5 shadow-card-shadow rounded-3xl bg-white overflow-hidden'>
                    <div className='relative flex items-center justify-between w-[160px] mb-4 bg-black/9 rounded-md font-medium shadow-inner shadow-gray/96 overflow-hidden'>
                        {/* Background for active button */}
                        <div
                            className={`absolute top-0 left-0 h-full w-1/2 bg-black rounded-md transition-transform duration-300 ${
                                isLoginCom
                                    ? 'translate-x-0'
                                    : 'translate-x-full'
                            }`}
                        ></div>

                        {/* Buttons */}
                        <button
                            className={`relative z-10 w-1/2 py-1 px-2 text-sm text-center ${
                                isLoginCom ? 'text-white' : 'text-[#878787]'
                            }`}
                            onClick={() => setIsLoginCom(true)}
                        >
                            Log In
                        </button>
                        <button
                            className={`relative z-10 w-1/2 py-1 px-2 text-sm text-center ${
                                isLoginCom ? 'text-[#878787]' : 'text-white'
                            }`}
                            onClick={() => setIsLoginCom(false)}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* login and sign up components */}
                    {isLoginCom ? <Login /> : <SignUp />}
                </div>
            </section>
            <div className='max-w-[1480px] mx-auto'>
                <Footer />
            </div>
        </>
    )
}

export default AuthLayout
