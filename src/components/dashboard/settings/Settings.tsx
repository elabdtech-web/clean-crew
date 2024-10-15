import React, { useState } from 'react'
import EditProfile from './EditProfile'

const Settings: React.FC = () => {
    const [activeSetting, setActiveSetting] = useState('profile')
    return (
        <>
            <section className='mt-3 px-5 py-5 shadow-card-shadow rounded-lg'>
                <nav className='flex items-center w-full gap-5 relative'>
                    <button
                        className={`px-5 pb-4 ${
                            activeSetting === 'profile'
                                ? 'text-primary border-b border-primary'
                                : 'text-gray/70 '
                        }`}
                        onClick={() => setActiveSetting('profile')}
                    >
                        Edt Profile
                    </button>
                    {/* <button
                        className={`px-5 pb-4  ${
                            activeSetting === 'general'
                                ? 'text-primary border-b border-primary'
                                : 'text-gray/70 '
                        }`}
                        onClick={() => setActiveSetting('general')}
                    >
                        General settings
                    </button> */}
                    <hr className='outline-none bg-transparent border-t-0 border-b pb-4 border-primary/10 w-full absolute bottom-0' />
                </nav>
                <EditProfile />
            </section>
        </>
    )
}

export default Settings
