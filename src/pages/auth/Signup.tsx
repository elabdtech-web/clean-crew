import React from 'react'
import { Formik, Form } from 'formik'
import InputField from './InputField'
import { signUpValidation } from '../../validation/userSchema'
import { LuLogIn } from 'react-icons/lu'

const initialValues = {
    email: '',
    phone: null,
    password: '',
    confirmPassword: '',
}

const SignUp: React.FC = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpValidation}
            onSubmit={() => console.log('submit')}
        >
            {({ isValid, dirty, isSubmitting }) => (
                <Form method='post' className='mt-6'>
                    <h1 className='text-3xl text-ter mb-2 font-medium'>
                        Sign Up
                    </h1>
                    <p className='text-secondary/90 text-[1rem] mb-8'>
                        Let's have create account with us.
                    </p>
                    <InputField
                        label='Email'
                        name='email'
                        placeholder='example@gmail.com'
                        type='email'
                    />
                    <InputField
                        label='Phone number'
                        name='phone'
                        placeholder='e.g., 0523-495-0603'
                        type='number'
                    />
                    <InputField
                        label='Password'
                        name='password'
                        placeholder='**************'
                        type='password'
                    />
                    <InputField
                        label='Confirm password'
                        name='confirmPassword'
                        placeholder='**************'
                        type='password'
                    />
                    <button
                        className='group w-full mt-4 bg-primary text-[1.1rem] rounded-lg text-white py-3 flex items-center justify-center gap-2 transition-all duration-200  hover:opacity-80 active:scale-95 disabled:opacity-50'
                        disabled={!!(!isValid || !dirty || isSubmitting)}
                    >
                        <span>Sign Up</span> <LuLogIn size={20} />
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default SignUp
