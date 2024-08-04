import React from 'react';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link'

export default function Stats() {

  return (
    // <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f30303_20%,#2005f2_100%)] text-white">
    <div className='absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#f30303] to-[#2005f2] via-[#cf04ea] animate-gradient-xy'>
      <div className="relative max-w-[800px] mt-[-216px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold font-custom md:drop-shadow-[8px_0_0_rgba(0,0,0,1)] sm:drop-shadow-[6px_0_0_rgba(0,0,0,1)] drop-shadow-[4px_0_0_rgba(0,0,0,1)]">Stats</h1>
      </div>      
    </div>
  );
}
