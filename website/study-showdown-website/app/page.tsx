'use client'

import Image from "next/image";
import { ReactTyped } from 'react-typed';

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f30303_30%,#2005f2_100%)] text-white">
      <div className="relative max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold font-custom md:drop-shadow-[6px_0_0_rgba(0,0,0,1)] sm:drop-shadow-[4px_0_0_rgba(0,0,0,1)] drop-shadow-[2px_0_0_rgba(0,0,0,1)]">Study Showdown</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold mt-8 font-custom">helping you</p>
          <ReactTyped className="md:text-3xl sm:text-2xl text-xl font-bold mt-8 pl-2 font-custom" 
                      strings={['get motivated', 'study better', 'build discipline', 'make studying fun again']} 
                      typeSpeed={75} backSpeed={75} loop />
        </div>
        <div className="absolute flex w-full justify-center mx-auto text-center mt-96">
          <button className="font-custom px-10 py-6 rounded-2xl bg-black md:text-xl hover:bg-white hover:text-black transition ease-in-out duration-500">Sign In</button>
        </div>
        
      </div>


      
    </div>
  );
}
