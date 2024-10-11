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
