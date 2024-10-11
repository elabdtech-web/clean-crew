import React from 'react'
import projcet_6 from '/assets/project_6.jpg'
import BookingLayout from './BookingLayout'

const upcomingData = Array.from({ length: 10 }, (_, id) => ({
    id: id + 1,
    label: `Standard Cleaning`,
    title: `Clean Sweep`,
    date: 'Wednesday 17 Sep, 2024',
    status: 'Upcoming',
    image: projcet_6,
}))
const canceledData = Array.from({ length: 10 }, (_, id) => ({
    id: id + 1,
    label: `Standard Cleaning`,
    title: `Clean Sweep`,
    date: 'Wednesday 17 Sep, 2024',
    status: 'Canceled',
    image: projcet_6,
}))
const completedData = Array.from({ length: 10 }, (_, id) => ({
    id: id + 1,
    label: `Standard Cleaning`,
    title: `Clean Sweep`,
    date: 'Wednesday 17 Sep, 2024',
    status: 'Completed',
    image: projcet_6,
}))

const Booking: React.FC = () => {
    return (
        <>
            <section className='mt-8'>
                {/* UPCOMING SECTION */}
                <BookingLayout mainTitle='Upcoming' data={upcomingData} />
                {/* CANCELED SECTION */}
                <BookingLayout mainTitle='Canceled' data={canceledData} />
                {/* COMPLETED SECTION */}
                <BookingLayout mainTitle='Completed' data={completedData} />
            </section>
        </>
    )
}

export default Booking
