import React from 'react'
import FAQSec from './FAQSec'

const faqData = [
    {
        id: 1,
        question: 'What types of cleaning services do you offer?',
        answer: 'We offer a wide range of cleaning services, including residential cleaning, commercial cleaning, deep cleaning, and specialized services like carpet and upholstery cleaning. Our team is trained to handle various tasks, ensuring your space is spotless and well-maintained according to your needs.',
    },
    {
        id: 2,
        question: 'How do I book a cleaning service?',
        answer: 'Booking a cleaning service is easy! You can either call our customer service team directly or use our online booking system available on our website. Just select your preferred date and time, and we will confirm your appointment promptly. Payment can be made online or in-person.',
    },
    {
        id: 3,
        question: 'What should I do to prepare for a cleaning appointment?',
        answer: 'To prepare for your cleaning appointment, we recommend that you secure any valuables and remove personal items from the areas to be cleaned. If you have specific instructions or areas that require special attention, please inform our team in advance to ensure a smooth cleaning experience.',
    },
    {
        id: 4,
        question: 'Are your cleaning products safe and eco-friendly?',
        answer: 'Absolutely! We prioritize the health of our clients and the environment. That’s why we use eco-friendly cleaning products that are safe for children, pets, and individuals with allergies. Our cleaning solutions are effective yet gentle, ensuring a thorough clean without harmful chemicals.',
    },
    {
        id: 5,
        question:
            'What if I need to cancel or reschedule my cleaning appointment?',
        answer: 'If you need to cancel or reschedule your cleaning appointment, please contact us at least 24 hours in advance. We understand that plans can change, and we aim to accommodate our clients’ needs. Our flexible scheduling allows you to adjust your appointment easily without any cancellation fees.',
    },
]
const FAQ: React.FC = () => {
    return (
        <>
            <section className='px-base mt-32 max-sm:px-mobile-base'>
                <h1 className='text-center text-secondary text-5xl mb-8'>
                    Most Frequently{' '}
                    <span className='font-semibold block mt-1'>
                        Ask Questions
                    </span>
                </h1>
                <div className='flex flex-col justify-center'>
                    {faqData.map((elem) => {
                        const { answer, id, question } = elem
                        return (
                            <span key={id}>
                                <FAQSec
                                    answer={answer}
                                    id={id}
                                    question={question}
                                />
                            </span>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default FAQ
