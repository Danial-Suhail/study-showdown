'use client';

import React from 'react';
import { FaHome } from 'react-icons/fa';
import Image from 'next/image';
import defaultPicture from '../icons/default-pfp.png';
import { useUser } from '@auth0/nextjs-auth0/client';

const Leaderboard = () => {
  const { user, isLoading, error } = useUser();

  const rows = [
    { position: 1, name: 'John Doe', email: 'john@example.com', points: 95 },
    { position: 2, name: 'Jane Smith', email: 'jane@example.com', points: 89 },
    { position: 3, name: 'Alice Johnson', email: 'alice@example.com', points: 82 },
    { position: 4, name: 'Bob Brown', email: 'bob@example.com', points: 76 },
    { position: 5, name: 'Charlie Davis', email: 'charlie@example.com', points: 70 },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user</div>;
  }

  return (
    <div className='absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-[#f30303] to-[#2005f2] via-[#cf04ea] animate-gradient-xy text-white justify-center'>
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold font-custom md:drop-shadow-[8px_0_0_rgba(0,0,0,1)] 
                                                                          sm:drop-shadow-[6px_0_0_rgba(0,0,0,1)] 
                                                                          drop-shadow-[4px_0_0_rgba(0,0,0,1)] text-center pt-14 my-8 md-8 ease-in-out duration-1000 animate-bounce h-18">
        {user ? `Welcome, ${user.name}` : 'Leaderboard'}
      </h1>
      <div className="absolute top-4 left-4">
        <Image 
          src={user?.picture ?? defaultPicture} 
          alt="" 
          className="w-24 h-24 rounded-full border-4 border-white" 
          width={96} 
          height={96}
        />
      </div>
      <a href="/api/auth/logout?returnTo=http://localhost:3000">
        <FaHome size={48} className='absolute top-0 right-0 m-4 rounded-2xl bg-black border-8 border-black hover:text-black hover:bg-white hover:border-white ease-in-out duration-500'/>
      </a>
      <div className="overflow-x-auto w-[800px] mx-auto my-auto justify-center">
        <table className="min-w-full divide-y-2 divide-white">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xl font-custom text-white uppercase tracking-wider">
                Position
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xl font-custom text-white uppercase tracking-wider">
                Name / Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xl font-custom text-white uppercase tracking-wider">
                Points
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-white">
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap opacity-80 hover:opacity-100 hover:bg-white hover:bg-opacity-20 ease-in-out duration-500">
                  <div className="text-xl text-white font-custom">{row.position}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap opacity-80 hover:opacity-100 hover:bg-white hover:bg-opacity-20 ease-in-out duration-500">
                  <div className="text-sm font-medium text-white">{row.name}</div>
                  <div className="text-sm text-white">{row.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap opacity-80 hover:opacity-100 hover:bg-white hover:bg-opacity-20 ease-in-out duration-500 ">
                  <div className="text-md text-white">{row.points}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
