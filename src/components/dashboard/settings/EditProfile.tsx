import { Formik, Form } from 'formik'
import avatar_png from '/assets/avatar.png'
import { editProfileSchema } from '../../../validation/userSchema'
import InputField from '../../InputField'

const initialValues = {
    name: '',
    email: '',
    phone: null,
    password: '',
    confirmPassword: '',
    currentPassword: '',
}
const EditProfile = () => {
    return (
        <>
            <section className='flex mt-8 w-full gap-10 max-md:flex-col'>
                <div className='size-40 rounded-full overflow-hidden'>
                    <img
                        src={avatar_png}
                        alt='avatar'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='flex-1'>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={() => {}}
                        validationSchema={editProfileSchema}
                    >
                        {({ isValid, dirty, isSubmitting }) => (
                            <Form
                                method='post'
                                className='grid grid-cols-2 gap-4 w-full max-sm:grid-cols-1'
                            >
                                <div>
                                    <InputField
                                        type='text'
                                        label='Your name'
                                        name='name'
                                        placeholder='Fullname'
                                    />
                                </div>
                                <div>
                                    <InputField
                                        label='Phone number'
                                        name='phone'
                                        placeholder='Phone'
                                        type='number'
                                    />
                                </div>
                                <div>
                                    <InputField
                                        label='Email'
                                        name='email'
                                        placeholder='Email'
                                        type='email'
                                    />
                                </div>
                                <div>
                                    <InputField
                                        label='Current Password'
                                        name='currentPassword'
                                        placeholder='Current Password'
                                        type='password'
                                    />
                                </div>
                                <div>
                                    <InputField
                                        label='New Password'
                                        name='newPassword'
                                        placeholder='New Password'
                                        type='password'
                                    />
                                </div>
                                <div>
                                    <InputField
                                        label='Confirm Password'
                                        name='confirmPassword'
                                        placeholder='Confirm Password'
                                        type='password'
                                    />
                                </div>
                                <button
                                    className=' py-3 px-16  w-fit   rounded-xl bg-primary text-white transition-all duration-200 ease-linear  hover:opacity-80 hover:shadow-2xl shadow-black disabled:opacity-50 disabled:cursor-default'
                                    disabled={
                                        !!(!isValid || !dirty || isSubmitting)
                                    }
                                >
                                    Update
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    )
}

export default EditProfile
