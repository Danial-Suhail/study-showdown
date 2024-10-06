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
    <div>
    <div className="bg-cover dark-overlay bg-[url('../public/images/study-showdown-wallpaper(3).png')]">
      <Navbar />
      <div className="max-w-[70%] w-full h-screen mx-auto text-center flex flex-col ">
        <h1 className='mt-48 text-8xl font-bold tracking-wider font-brkreg text-stylized1'>Study Showdown</h1>
          
        <div className='mt-4 font-medium tracking-wider text-4xl'>
          <p className="font-brkreg">helping you</p>
          <ReactTyped className="pl-2 font-brkreg" 
                      strings={['get motivated', 'study better', 'build discipline', 'make studying fun again']} 
                      typeSpeed={75} backSpeed={75} loop />
          
        </div>
          <div className="mt-32 my-auto">
          <Button onClick={handleSignIn} buttonName={"Get Started"} />
        </div>
      </div>
    </div>     
    </div>

  );
}
