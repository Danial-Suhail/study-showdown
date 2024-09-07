'use client'

import { ReactTyped } from 'react-typed';
import Button from './components/Button';
import './globals.css';

export default function Home() {
  const handleSignIn = () => {
    console.log("Sign in button clicked");
    window.location.href = "api/auth/login?returnTo=http://localhost:3000/leaderboard"; {/* Change the "returnTo" URL to your own domain once deployed */}
  }

  return (
    // <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f30303_20%,#2005f2_100%)] text-white">
    <div className='absolute inset-0 -z-10 h-[100%] w-full bg-gray-500'>
      <div className="relative max-w-[70%]  w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <h1 className='text-6xl font-bold mt-16'>Study Showdown</h1>
        
          <p className="md:text-3xl sm:text-2xl text-xl font-bold font-custom mt-24">helping you</p>
          <ReactTyped className="md:text-3xl sm:text-2xl text-xl font-bold pl-2 font-custom" 
                      strings={['get motivated', 'study better', 'build discipline', 'make studying fun again']} 
                      typeSpeed={75} backSpeed={75} loop />
          <div className="flex w-full justify-center mt-48 my-auto">
          <Button onClick={handleSignIn} buttonName={"Get Started"} />
          {/* <LoginButton /> */}
          {/* <SignupButton /> */}
          </div>
      </div>
    </div>      

  );
}
