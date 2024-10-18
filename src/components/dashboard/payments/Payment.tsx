import React from 'react'
import transitionHistory from '../../../content/transitionHistory.json'
import { MdDeleteOutline } from 'react-icons/md'
const Payment: React.FC = () => {
    return (
        <div className='w-full'>
            <h1 className='text-2xl font-medium mb-2 mt-4'>
                Transaction history
            </h1>
            <table className='w-full border-collapse mt-6'>
                <thead>
                    <tr className='bg-primary text-white rounded-lg font-normal'>
                        <th className='p-4 text-left  font-normal rounded-tl-lg'>
                            Services
                        </th>
                        <th className='py-4 text-left  font-normal'>
                            Cleaners
                        </th>
                        <th className='py-4 text-left max-md:hidden font-normal '>
                            Date
                        </th>
                        <th className='py-4 text-left  font-normal max-sm:hidden'>
                            Payment method
                        </th>
                        <th className='py-4 text-left  font-normal'>
                            Charges per hour
                        </th>
                        <th className='py-4 text-left  font-normal max-xxsm:hidden'>
                            Amount
                        </th>
                        <th className='py-4 text-left  font-normal rounded-tr-lg'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {transitionHistory.transitionHistory.map((row, index) => (
                        <tr
                            key={index}
                            className='border-b border-primary/30 text-primary'
                        >
                            <td className='py-3 border-none'>{row.service}</td>
                            <td className='py-3'>{row.cleanersData}</td>
                            <td className='py-3 max-md:hidden'>{row.date}</td>
                            <td className='py-3 max-sm:hidden'>
                                {row.paymentMethod}
                            </td>
                            <td className='py-3 text-ter max-sm:text-center'>
                                {row.chargePerHour}.00
                            </td>
                            <td className='py-3  max-xxsm:hidden'>
                                {row.amount}.00
                            </td>
                            <td className='py-3'>
                                <button className='bg-red-500/30 text-red-600 hover:bg-red-400/30    py-1 px-2 rounded-md'>
                                    <MdDeleteOutline size={21} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Payment
