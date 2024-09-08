import React from "react";

const Button = ({ buttonName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white font-jersey px-10 py-6 bg-black text-3xl tracking-wide rounded-2xl hover:bg-white hover:text-black transition ease-in-out duration-250"
    >
      {buttonName}
    </button>
    // className="text-black font-custom px-10 py-6 rounded-2xl bg-white md:text-xl hover:bg-black hover:text-white transition ease-in-out duration-500">{buttonName}</button>
  );
};

export default Button;
