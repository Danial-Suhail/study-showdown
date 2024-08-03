import React from 'react'

const Button = ({ buttonName, onClick }) => {
    return (
        <button onClick={onClick}
                className="font-custom px-10 py-6 rounded-2xl bg-black md:text-xl hover:bg-white hover:text-black transition ease-in-out duration-500">{buttonName}</button>
    )
}

export default Button