import { v4 as uuidv4 } from 'uuid'

import project_6 from '/assets/projects/project_6.jpg'
import project_4 from '/assets/projects/project_4.jpg'
import project_5 from '/assets/projects/project_5.jpg'
import project_3 from '/assets/projects/project_3.png'
export const featuredData = [
    {
        id: uuidv4(),
        label: `Standard Cleaning`,
        title: `Clean Sweep`,
        price: 4.0,
        rating: 81,
        about: 'At Standard Cleaners we are committed to delivering top-notch cleaning services that exceed your expectations. With a team of highly trained professionals and a passion for detail, we ensure that every corner of your home or office shines.',
        location: 'St 90, Uk Birmingham',
        image: project_6,
    },
    {
        id: uuidv4(),
        label: `Standard Cleaning`,
        title: `Clean Sweep`,
        price: 8,
        rating: 5,
        about: 'At Standard Cleaners we are committed to delivering top-notch cleaning services that exceed your expectations. With a team of highly trained professionals and a passion for detail, we ensure that every corner of your home or office shines.',
        location: 'St 90, Uk Birmingham',
        image: project_4,
    },
    {
        id: uuidv4(),
        label: `Deep Cleaning`,
        title: `Clean Sweep`,
        price: 10,
        rating: 81,
        about: 'At Standard Cleaners we are committed to delivering top-notch cleaning services that exceed your expectations. With a team of highly trained professionals and a passion for detail, we ensure that every corner of your home or office shines.',
        location: 'St 90, Uk Birmingham',
        image: project_5,
    },
    {
        id: uuidv4(),
        label: `Office Cleaning`,
        title: `Clean Sweep`,
        price: 5,
        rating: 100,
        about: 'At Standard Cleaners we are committed to delivering top-notch cleaning services that exceed your expectations. With a team of highly trained professionals and a passion for detail, we ensure that every corner of your home or office shines.',
        location: 'St 90, Uk Birmingham',
        image: project_6,
    },
    {
        id: uuidv4(),
        label: `Airbnb Cleaning`,
        title: `Clean Sweep`,
        price: 6,
        rating: 90,
        about: 'At Standard Cleaners we are committed to delivering top-notch cleaning services that exceed your expectations. With a team of highly trained professionals and a passion for detail, we ensure that every corner of your home or office shines.',
        location: 'St 90, Uk Birmingham',
        image: project_3,
    },
    {
        id: uuidv4(),
        label: `Standard Cleaning`,
        title: `Clean Sweep`,
        price: 10,
        rating: 81,
        about: 'At Standard Cleaners we are committed to delivering top-notch cleaning services that exceed your expectations. With a team of highly trained professionals and a passion for detail, we ensure that every corner of your home or office shines.',
        location: 'St 90, Uk Birmingham',
        image: project_6,
    },
]

export const bookingTiming = [
    {
        id: 1,
        timing: '12.00 AM',
        available: false,
    },
    {
        id: 2,
        timing: '1.00 AM',
        available: false,
    },
    {
        id: 3,
        timing: '2.00 AM',
        available: false,
    },
    {
        id: 4,
        timing: '3.00 AM',
        available: true,
    },
    {
        id: 5,
        timing: '4.00 AM',
        available: true,
    },
    {
        id: 6,
        timing: '5.00 AM',
        available: true,
    },
    {
        id: 7,
        timing: '6.00 AM',
        available: false,
    },
    {
        id: 8,
        timing: '7.00 AM',
        available: true,
    },
]

export const productPreference = [
    {
        id: 1,
        label: 'Scented Products',
        value: 'scentedProducts',
    },
    {
        id: 2,
        label: 'Non-scented Products',
        value: 'nonScentedProducts',
    },
    {
        id: 3,
        label: 'Eco-friendly Products',
        value: 'ecoProducts',
    },
]
export const allergies = [
    {
        id: 22,
        label: 'No Allergies',
        value: 'noAllergies',
    },
    {
        id: 55,
        label: 'Allergic to Specific Chemicals',
        value: 'specificAllergies',
    },
    {
        id: 66,
        label: 'Unsure/Prefer to Avoid Harsh Chemicals',
        value: 'avoidChemicals',
    },
]
