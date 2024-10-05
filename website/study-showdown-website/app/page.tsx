'use client'

import { ReactTyped } from 'react-typed';
import Button from './components/Button';
import './globals.css';
import Navbar from './components/Navbar';

export default function Home() {
  const handleSignIn = () => {
    console.log("Sign in button clicked");
    window.location.href = "api/auth/login?returnTo=http://localhost:3000/leaderboard"; {/* Change the "returnTo" URL to "https://study-showdown.vercel.app/leaderboard" once deployed */}
  }

  return (
    // <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f30303_20%,#2005f2_100%)] text-white">
    // <div className='absolute inset-0 -z-10 h-[100%] w-full bg-neutral-500 '>


    <div>
    <div className="opacity-10 absolute inset-0 bg-black"></div>
    <div className="bg-cover dark-overlay bg-[url('../public/images/study-showdown-wallpaper.png')]"> 
      <Navbar />
      <div className="relative max-w-[70%] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <h1 className='text-8xl font-bold mt-48 tracking-wider font-brkreg text-stylized1'>Study Showdown</h1>
          
        <div className='flex justify-center item-center mt-4 font-medium tracking-wider text-4xl'>
          <p className="flex font-jersey ">helping you</p>
          <ReactTyped className="flex pl-2 font-jersey" 
                      strings={['get motivated', 'study better', 'build discipline', 'make studying fun again']} 
                      typeSpeed={75} backSpeed={75} loop />
          
        </div>
          <div className="flex w-full justify-center mt-32 my-auto">
          <Button onClick={handleSignIn} buttonName={"Get Started"} />
          {/* <button className='text-4xl'>amongus</button> */}
          {/* <LoginButton /> */}
          {/* <SignupButton /> */}
        </div>
      </div>
    </div>     
    </div>

  );
}
