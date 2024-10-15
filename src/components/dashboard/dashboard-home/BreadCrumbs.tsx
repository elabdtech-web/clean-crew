import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { TItems } from '../../../types/types'

const BreadCrumbs: React.FC<{ items: TItems[] }> = ({ items }) => {
    return (
        <div className='mb-6 flex items-center gap-2'>
            {items.map((elem, index) => {
                const { id, categories, link } = elem
                return (
                    <div
                        className='flex items-center gap-2 text-primary/90 font-medium'
                        key={id}
                    >
                        <Link to={link} className='prose-base '>
                            {categories}
                        </Link>
                        {index === items.length - 1 ? null : (
                            <IoIosArrowForward size={18} className='pt-1' />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default BreadCrumbs
