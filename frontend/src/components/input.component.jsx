import React, { useState } from 'react'
import eyeIcon from "../assets/userAuthFrom/eye.svg"
import eyeSlashIcon from "../assets/userAuthFrom/eyeSlash.svg"
export default function InputBox({ name, type, id, value, placeholder, icon }) {
    const [showPassword, setShowPassword] = useState(true)
    return (
        <div className='relative w-full mb-4'>
            <input
                type={type == "password" ? showPassword ? "text" : "password" : type}
                name={name}
                placeholder={placeholder}
                defaultValue={value}
                id={id}
                className='input-box'
            />
            <img src={icon} alt="" className='w-auto h-5  left-1.5 absolute top-1/2 -translate-y-1/2  translate-x-1/2' />

            {
                type === "password" ?

                    showPassword ?
                        <img src={eyeIcon} alt="" className='w-auto h-5  right-1.5 absolute top-1/2 -translate-y-1/2  -translate-x-1/2 cursor-pointer' onClick={() => { setShowPassword(c => !c); type = "text" }} />
                        :
                        <img src={eyeSlashIcon} alt="" className='w-auto h-5  right-1.5 absolute top-1/2 -translate-y-1/2  -translate-x-1/2 cursor-pointer' onClick={() => { setShowPassword(c => !c); type = "password" }} />
                    :
                    ""
            }
        </div>
    )
}
