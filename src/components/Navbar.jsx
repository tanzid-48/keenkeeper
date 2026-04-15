'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoIosStats } from 'react-icons/io';
import { IoHome } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';

const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl font-semibold">
            <span className='font-bold'>Keen</span>Keeper
          </Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li className='font-semibold text-slate-500'>
              <Link
                className={pathname === '/' ? 'bg-green-800 text-white' : ''}
                href="/"
              >
                <IoHome /> Home
              </Link>
            </li>

            <li className='font-semibold text-slate-500'>
              <Link
                className={pathname === '/timeline' ? 'bg-green-800 text-white' : ''}
                href="/timeline"
              >
                <RiTimeLine /> Timeline
              </Link>
            </li>

            <li className='font-semibold text-slate-500'>
              <Link
                className={pathname === '/stats' ? 'bg-green-800 text-white' : ''}
                href="/stats"
              >
                <IoIosStats /> Stats
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;