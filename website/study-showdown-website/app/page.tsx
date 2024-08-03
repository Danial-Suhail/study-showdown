'use client'

import Image from "next/image";
import { ReactTyped } from 'react-typed';
import Sslogowhite from './components/sslogowhite';
import Sslogoblack from './components/sslogoblack';
import Button from './components/Button';

const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

export default function Home() {
  const handleSignIn = () => {
    console.log("Sign in button clicked");
    window.location.href = "api/auth/login"
  }



  return (
 
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f30303_30%,#2005f2_100%)] text-white">
      <div className="relative max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <div className="relative h-1/2 pt-4 w-full flex flex-col items-center justify-center">
          {/* <Sslogowhite /> */}
          <Sslogoblack />
          
        </div>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold font-custom md:drop-shadow-[8px_0_0_rgba(0,0,0,1)] sm:drop-shadow-[6px_0_0_rgba(0,0,0,1)] drop-shadow-[4px_0_0_rgba(0,0,0,1)]">Study Showdown</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold mt-8 mb-8 font-custom">helping you</p>
          <ReactTyped className="md:text-3xl sm:text-2xl text-xl font-bold mt-8 mb-8 pl-2 font-custom" 
                      strings={['get motivated', 'study better', 'build discipline', 'make studying fun again']} 
                      typeSpeed={75} backSpeed={75} loop />
          <div className="absolute flex w-full justify-center mt-48 my-auto">
          <Button onClick={handleSignIn} buttonName={"Get Started"} />
          </div>
        </div>
        
        
      </div>


      
    </div>

  );
}
