import { useContext, createContext, useState } from 'react'
import { FeaturedContextType } from '../types/types'

// Provide a default initial value
const initialValue: FeaturedContextType = {
    id: '',
    handleOnClick: () => {},
}

// Create the context
const FeaturedContext = createContext<FeaturedContextType>(initialValue)

const FeaturedContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [cardId, setCardId] = useState<string | null>(null)

    const handleOnClick = (id: string) => {
        setCardId(id)
    }
    return (
        <FeaturedContext.Provider value={{ id: cardId, handleOnClick }}>
            {children}
        </FeaturedContext.Provider>
    )
}

// global hooks
export const useFeaturedContext = () => useContext(FeaturedContext)

export default FeaturedContextProvider
