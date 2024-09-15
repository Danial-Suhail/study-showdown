import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-neutral-600 shadow-m fixed inset-x-0 top-0 z-50 border-b-4 border-black text-black">
      <div className="mx-auto w-full px-12">
        <div className="relative flex h-24 items-center justify-between">
          <nav className="font-jersey flex w-full justify-center gap-2 text-4xl tracking-wide">
            <Link
              href="/testing"
              className="hover:bg-neutral-800 flex items-center px-16 py-8 hover:text-gray-500"
              prefetch={false}
            >
              Dashboard
            </Link>

            <Link
              href="#"
              className="hover:bg-neutral-800 flex items-center px-16 py-8 hover:text-gray-500"
              prefetch={false}
            >
              Showdown
            </Link>

            <Link
              href="#"
              className="hover:bg-neutral-800 flex items-center px-16 py-8 hover:text-gray-500"
              prefetch={false}
            >
              Leaderboard
            </Link>
          </nav>
          <div className="relative z-20 float-right flex place-items-end gap-4"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
