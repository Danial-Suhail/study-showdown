'use client'

import { ReactTyped } from 'react-typed';
import Button from './components/Button';
import './globals.css';

export default function Home() {
  const handleSignIn = () => {
    console.log("Sign in button clicked");
    window.location.href = "api/auth/login?returnTo=http://localhost:3000/leaderboard"; {/* Change the "returnTo" URL to "https://study-showdown.vercel.app/leaderboard" once deployed */}
  }

  return (
    // <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f30303_20%,#2005f2_100%)] text-white">
    <div className='absolute inset-0 -z-10 h-[100%] w-full bg-gray-500'>
      <div className="relative max-w-[70%] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <h1 className='text-9xl font-bold mt-48 font-jersey tracking-wide text-border-size-8'>Study Showdown</h1>
          
        <div className='flex justify-center item-center mt-24 font-medium tracking-widest'>
          <p className="flex md:text-3xl sm:text-2xl text-xl font-jersey">helping you</p>
          <ReactTyped className="flex md:text-3xl sm:text-2xl text-xl pl-2 font-jersey" 
                      strings={['get motivated', 'study better', 'build discipline', 'make studying fun again']} 
                      typeSpeed={75} backSpeed={75} loop />
          
        </div>
          <div className="flex w-full justify-center mt-48 my-auto">
          <Button onClick={handleSignIn} buttonName={"Get Started"} />
          {/* <LoginButton /> */}
          {/* <SignupButton /> */}
        </div>
      </div>
    </div>      

  );
}
