import * as Yup from 'yup'

export const loginValidation = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string().required('Password is required'),
})
export const signUpValidation = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .max(200, 'Email address too large')
        .required('Email is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .min(10, 'Phone number must be at least 11 characters')
        .max(15, 'Phone number too large'),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/,
            'Password must include capitals, small letters, numbers, and symbols'
        )
        .length(10, 'Password too short')
        .required('Password is required'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password')],
        'Passwords must match'
    ),
})
export const editProfileSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .max(200, 'Email address too large')
        .required('Email is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .min(10, 'Phone number must be at least 11 characters')
        .max(15, 'Phone number too large'),
    currentPassword: Yup.string().required('Current password is required'),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/,
            'Password must include capitals, small letters, numbers, and symbols'
        )
        .length(10, 'Password too short')
        .required('Password is required'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password')],
        'Passwords must match'
    ),
})
