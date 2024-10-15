import React from 'react'
import { Formik, Form } from 'formik'
import InputField from '../../components/InputField'
import { loginValidation } from '../../validation/userSchema'
import { LuLogIn } from 'react-icons/lu'

const initialValues = {
    email: '',
    password: '',
}
const Login: React.FC = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={() => console.log('submit')}
        >
            {({ isValid, dirty, isSubmitting }) => (
                <Form method='post' className='mt-6'>
                    <h1 className='text-3xl text-ter mb-2 font-medium'>
                        Log In
                    </h1>
                    <p className='text-secondary/90 text-[1rem] mb-8'>
                        Please enter your details to continue.
                    </p>
                    <InputField
                        label='Email'
                        name='email'
                        placeholder='example@gmail.com'
                        type='email'
                    />
                    <InputField
                        label='Password'
                        name='password'
                        placeholder='**************'
                        type='password'
                    />
                    <button
                        className='group w-full mt-4 bg-primary text-[1.1rem] rounded-lg text-white py-3 flex items-center justify-center gap-2 transition-all duration-200  hover:opacity-80 active:scale-95 disabled:opacity-50'
                        disabled={!!(!isValid || !dirty || isSubmitting)}
                    >
                        <span>Login</span> <LuLogIn size={20} />
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default Login
