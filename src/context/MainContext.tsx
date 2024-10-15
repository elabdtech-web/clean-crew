import React, { useContext, createContext, useState } from 'react'
import { IMainContext } from '../types/types'
const initialValues = {
    toggleSidebar: false,
    showSidebar: () => {},
    closedSidebar: () => {},
}
const MainContext = createContext<IMainContext>(initialValues)
const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false)
    // toggle sidebar
    const showSidebar = () => {
        setToggleSidebar(true)
    }
    const closedSidebar = () => {
        setToggleSidebar(false)
    }
    return (
        <MainContext.Provider
            value={{ toggleSidebar, closedSidebar, showSidebar }}
        >
            {children}
        </MainContext.Provider>
    )
}

// global hook
export const useMainContext = () => useContext(MainContext)
//
export default MainContextProvider
