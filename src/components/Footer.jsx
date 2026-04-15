import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaYoutubeSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-[#0f3d2a] text-white pt-10 pb-7  mt-16'>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold  mb-4">
            KeenKeeper
          </h2>
          <p className="text-slate-300 max-w-lg mx-auto text-base md:text-lg ">
            Your personal shelf of meaningful connections.
            Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>
        <div className="flex flex-col items-center mb-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-5">
            Social Links
          </p>
          <div className="flex gap-5">
            <Link
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 "
            >
              <FaYoutubeSquare className="text-xl" />
            </Link>
            <Link
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 "
            >
              <FaFacebookF className="text-xl" />
            </Link>
            <Link
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 "
            >
             <FaSquareXTwitter className="text-xl" />
            </Link>
        </div>
        <div className="border-t border-white/10 mb-6"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

       <p className="text-center md:text-left">
            © 2026 <span className="font-semibold text-white">Tanzid Mondol</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition">Terms</Link>
          <Link href="#" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;