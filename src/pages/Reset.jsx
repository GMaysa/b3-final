import React from 'react'
import wp from '../assets/wp.svg'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Reset = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return (
      <div className='flex font-Poppins h-screen'>
      <img src={wp} className='w-1/2 h-screen object-cover object-left-top smm:hidden '/>
  
    <div className='w-1/2 m-auto smm:m-auto smm:w-full'>
      <div className='max-w-lg m-auto p-10'>
      <h1 className="font-bold mb-6 text-[24px]"> Reset Password</h1>
  
      <form action=''>

        <p className='mb-1 text-xs '>Masukkan Password Baru</p>
        <div className='relative mb-4'>
          <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Masukkan password baru disini" 
              class="px-3 py-2 border rounded-2xl w-full text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5]"
               />
            <label
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer">
                {showPassword ? (<FaEyeSlash className='text-gray-700'/>) : (<FaEye className="text-gray-500" />)}
            </label>
        </div>

        <p className='mb-1 text-xs'>Ulangi Password baru</p>
          <input 
            type="password" 
              id="email" 
              placeholder="Konfirmasi ulang Password" 
              class="px-3 py-2 border rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] " 
              />
             <button className="bg-[#7126B5] text-sm hover:bg-[#35095c] text-white mx-auto  py-2 px-2 mt-6 rounded m-auto w-full"
             type="submit"> Simpan </button>
             
      </form>
      
      </div>
    </div>
    
  </div>
    )
  }
  
  export default Reset