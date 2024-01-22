"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='max-w-md mx-auto space-y-6 flex-1'>
        <h2 className='text-4xl font-extrabold'>Login</h2>
        <form className='grid grid-cols-1 gap-6' action='#' method='post'>
          <label className='block'>
            <span className='text-neutral-800 dark:text-neutral-200'>
              Email
            </span>
            <input
              type='email'
              className='block w-full border border-neutral-200 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1'
              placeholder='example@example.com'
            />
          </label>
          <label className='block'>
            <span className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
              Password
            </span>
            <input
              type='password'
              className='block w-full border border-neutral-200 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1'
            />
          </label>
          <button
            className='relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100     text-slate-50'
            type='submit'>
            Masuk
          </button>
        </form>
        <div className='relative text-center'>
          <span className='relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900'>
            ATAU
          </span>
          <div className='absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800'></div>
        </div>
        <div className='grid gap-3 w-full'>
          <Link
            href='#'
            className='flex justify-center items-center w-full border border-slate-200 rounded-lg bg-primary-50 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]'>
            <Icon icon='devicon:google' />
            <h3 className='ml-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm'>
              Login with Google
            </h3>
          </Link>
        </div>

        <span className='block text-center text-neutral-700 dark:text-neutral-300'>
          Belum Punya Akun.?{" "}
          <Link className='text-green-600' href='register'>
            Daftar
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
