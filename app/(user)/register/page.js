"use client";

import { register } from "@/actions/auth";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const [err, setErr] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    register(values).then((res) => {
      console.log(res);
      if (res.success) {
        setErr(res.success);
      }
    });
  };

  return (
    <div className='flex justify-center items-center h-full'>
      <div className='max-w-md mx-auto space-y-6 flex-1'>
        <h2 className='text-4xl font-extrabold'>Daftar</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-1 gap-6'>
          <label className='block'>
            <span className='text-neutral-800 dark:text-neutral-200'>
              Nama Anda
            </span>
            <Controller
              control={control}
              rules={{
                required: "tidak boleh kosong",
              }}
              name='name'
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <input
                  type='text'
                  value={value}
                  onChange={onChange}
                  className='block w-full border border-neutral-200 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1'
                  placeholder='example'
                />
              )}
            />
            {errors?.name?.message && (
              <span className='font-semibold text-[10px] text-red-500'>
                {errors.name.message}
              </span>
            )}
          </label>
          <label className='block'>
            <span className='text-neutral-800 dark:text-neutral-200'>
              Alamat Email
            </span>
            <Controller
              control={control}
              name='email'
              rules={{
                required: "tidak boleh kosong",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "gunakan format 'contoh@email.com'",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <input
                  type='email'
                  onChange={onChange}
                  value={value}
                  className='block w-full border border-neutral-200 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1'
                  placeholder='example@example.com'
                />
              )}
            />
            {errors?.email?.message && (
              <span className='font-semibold text-[10px] text-red-500'>
                {errors.email.message}
              </span>
            )}
          </label>
          <label className='block'>
            <span className='flex justify-between items-center text-neutral-800 dark:text-neutral-200'>
              Password
            </span>
            <Controller
              control={control}
              name='password'
              rules={{
                required: "tidak boleh kosong",
                minLength: {
                  value: 6,
                  message: "minimal 6 karakter",
                },
              }}
              render={({ field: { value, onChange } }) => (
                <input
                  type='password'
                  onChange={onChange}
                  value={value}
                  className='block w-full border border-neutral-200 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1'
                />
              )}
            />
            {errors?.password?.message && (
              <span className='font-semibold text-[10px] text-red-500'>
                {errors.password.message}
              </span>
            )}
          </label>
          {err && (
            <span className='py-2 px-4 bg-green-300 rounded-sm flex justify-center items-center space-x-2'>
              <Icon icon='lets-icons:done-ring-round' />
              <p className='font-light text-sm'>Success</p>
            </span>
          )}
          <button
            className='relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100     text-slate-50'
            type='submit'>
            Daftar
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
              Daftar dengan Google
            </h3>
          </Link>
        </div>

        <span className='block text-center text-neutral-700 dark:text-neutral-300'>
          sudah punya akun.?{" "}
          <Link className='text-green-600' href='login'>
            Daftar
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
