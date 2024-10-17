import { ImSpinner2 } from 'react-icons/im'

export default function Loading() {
    return (
        <div className='w-full h-screen flex flex-col justify-center  bg-white z-[100]'>
            <ImSpinner2 className='text-ter animate-spin mx-auto' size={64} />
        </div>
    )
}
