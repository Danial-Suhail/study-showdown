import React from 'react'

const Button = (props) => {
    return (
        <button className="font-custom px-10 py-6 rounded-2xl bg-black md:text-xl hover:bg-white hover:text-black transition ease-in-out duration-500">{props.buttonName}</button>
    )
}

export default Button