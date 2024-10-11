import React, { useState } from 'react'
import { useField } from 'formik'
import { twMerge } from 'tailwind-merge'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import { IAuthTypes } from '../../types/types'

const InputField: React.FC<IAuthTypes> = ({ label, type, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [field, meta] = useField(props)
    return (
        <>
            <label
                htmlFor={props.name}
                className='text-secondary/50  text-[1rem] font-medium '
            >
                {label}
            </label>
            <span className='relative w-full'>
                <input
                    {...field} // Use the "field" here from useField hook
                    type={showPassword ? 'text' : type}
                    {...props}
                    className={twMerge(
                        `w-full mb-4 py-3 px-5 rounded-lg bg-qua text-secondary border border-[rgba(0,0,0,0)] outline-none mt-2 ${
                            meta.touched && meta.error ? 'border-red-500' : ''
                        }`
                    )}
                />
                {type === 'password' && (
                    <span className='absolute right-5 text-secondary top-1/2 -translate-y-1/2 cursor-pointer'>
                        {!showPassword ? (
                            <HiOutlineEyeOff
                                size={24}
                                onClick={() => setShowPassword(true)}
                            />
                        ) : (
                            <HiOutlineEye
                                size={24}
                                onClick={() => setShowPassword(false)}
                            />
                        )}
                    </span>
                )}
            </span>
            {meta.touched && meta.error ? (
                <p className='text-red-500 text-sm -mt-3 mb-2 font-normal'>
                    {meta.error}
                </p>
            ) : null}
        </>
    )
}

export default InputField
