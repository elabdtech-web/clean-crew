import { IconType } from 'react-icons'

export interface IFeaturedCard {
    Icon: IconType
    para: string
    id: number
    title: string
}
export interface IFAQ {
    answer: string
    id: number
    question: string
}

export interface IAuthTypes {
    name: string
    placeholder: string
    label: string
    type: string
}

export interface IBookingLayout {
    data: any[]
    mainTitle: string
}
export interface FeaturedContextType {
    id: string | null
    handleOnClick: (id: string) => void
}

export type TItems = {
    id: number
    categories: string
    link: string
}

//  MAIN CONTEXT TYPES
export interface IMainContext {
    toggleSidebar: boolean
    showSidebar: () => void
    closedSidebar: () => void
}
