"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className='w-full py-6 border-b border-slate-100'>
      <div className='container mx-auto'>
        <div className='flex justify-between space-x-10 items-center'>
          <div className='h-10 w-20 relative'>
            <Image alt='super-cbt' fill src='./logo.svg' className='absolute' />
          </div>
          <div className='flex-1 flex items-center'>
            <ul className='flex space-x-4'>
              <li>
                <Link href='#'>
                  <div className='px-4 py-2 rounded-full cursor-pointer hover:bg-slate-100'>
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <div className='px-4 py-2 rounded-full cursor-pointer hover:bg-slate-100'>
                    <span>About</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <div className='px-4 py-2 rounded-full cursor-pointer hover:bg-slate-100'>
                    <span>Product</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex space-x-1'>
            <Link href='#'>
              <div className='rounded-full hover:bg-slate-100 p-2 cursor-pointer'>
                <Icon icon='solar:cart-large-2-broken' className='text-2xl' />
              </div>
            </Link>
            <Link href='#'>
              <div className='rounded-full hover:bg-slate-100 p-2 cursor-pointer'>
                <Icon icon='solar:user-broken' className='text-2xl' />
              </div>
            </Link>
            <Link href='login'>
              <div className='flex items-center p-2 cursor-pointer'>
                <Icon icon='solar:user-broken' className='text-2xl' />
                <span className='ml-2 text-sm font-light capitalize'>
                  Sign In / Register
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
