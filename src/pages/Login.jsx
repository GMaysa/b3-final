import React from 'react'
import wp from '../assets/wp.svg'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex font-Poppins'>
        <img src={wp} className='w-1/2 h-screen object-cover object-left-top sm:hidden ' />

        <div className='w-1/2 my-auto sm:mx-auto sm:w-full'>
          <div className='max-w-lg m-auto rounded-xl p-5'>
          <h1 className="font-bold mb-6 text-[24px]">Masuk</h1>

          <form action=''>
            <p className='mb-1 text-[0.8rem] '>Email/No Telepon</p>
            <input type="email" id="email" placeholder="Contoh: johndoe@gmail.com" class="px-3 py-2 mb-4 border rounded-2xl w-full text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] invalid:text-red-700 invalid:focus:ring-red-700 invalid:focus:border-red-700 peer:" />
            <div className='flex items-center justify-between mb-[0.3rem]'>
              <span className="block text-xs after:ml-0">Password</span>
              <a className="inline-block align-baseline font-bold text-sm text-[#7126B5] hover:text-blue-800" href="#">Lupa kata sandi?</a>
            </div>

              <div className='relative'>
                <input type="password" 
                // id="email" 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Masukan Password" 
                  class="px-3 py-2 border rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] invalid:text-piink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer:" />
                  <label
                    className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? (<FaEyeSlash className='text-gray-700'/>) : (<FaEye className="text-gray-500" />)}
                  </label>
                </div>

                <button className="bg-[#7126B5] text-sm hover:bg-[#35095c] text-white mx-auto font-bold py-2 px-2 mt-6 rounded m-auto w-full" type="submit"> Masuk </button>
          </form>
          <p class="mt-4 text-center text-sm ">Belum punya akun? <a href=""><span class="text-[#7126B5] text-sm font-bold"> daftar disini </span> </a> </p>
          </div>
        </div>
    </div>
  )
}

export default Login