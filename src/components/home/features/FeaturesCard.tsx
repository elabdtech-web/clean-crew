import React from 'react'
import { IFeaturedCard } from '../../../types/types'

const FeaturesCard: React.FC<IFeaturedCard> = ({ Icon, para, id, title }) => {
    return (
        <>
            <Icon size={60} className='mx-auto' />
            <p className='prose-xl text-center '>&#34;{para}&#34;</p>
            <div className='flex gap-3 items-center max-sm:flex-wrap'>
                <p className='text-3xl font-medium'>0{id}</p>
                <h1 className='prose-xl font-medium'>{title}</h1>
            </div>
        </>
    )
}

export default FeaturesCard
