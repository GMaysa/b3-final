import React from 'react'
import wp from '../assets/wp.svg'

const Register = () => {
    return (
      <div className='flex font-Poppins sm:block'>
            <img src={wp} className='w-1/2 h-screen object-cover object-bottom md:block sm:hidden'/>
    
          <div className='w-1/2 my-auto sm:mx-auto sm:w-full '>
            <div className='max-w-lg m-auto rounded-xl p-5 sm:my-52 '>
            <h1 className="font-bold mb-6 text-[24px]">Daftar</h1>
  
            <form action=''>
              <label htmlFor="text">
                <span className='block mb-1 text-xs '>Nama</span>
                <input type="textl" id="email" placeholder="Nama Lengkap" class="px-3 py-2 border mb-4 rounded-2xl w-full text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] invalid:text-red-700 invalid:focus:ring-red-700 invalid:focus:border-red-700 peer:" 
                  />
              </label> 
  
              <label for="email">
                      <span className="text-xs mb-1 text-slate-700 ">Email</span>
                      <input type="email" 
                      id="email" 
                      placeholder="Contoh: johndoe@gmail.com" 
                      class="px-3 py-2 mb-4 border shadow rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-sky-500 invalid:text-red-700 invalid:focus:ring-red-700 invalid:focus:border-red-700 " 
                      />
              </label>
  
              <label for="number">
                      <span class="text-xs mb-1 text-slate-700 ">Nomor Telepon</span>
                      <input type="number" placeholder="+628" class="resize-none appearance-none px-3 py-2 mb-6 border shadow rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5]" 
                      />
              </label>
  
  
              <label htmlFor="pasword">
                <div className='flex items-center justify-between mb-[0.3rem]'>
                  <span className="block text-xs mb-1 text-slate-700">Buat Password</span>
                </div>
                  <input type="password" 
                    id="email" 
                    placeholder="Masukan Password" 
                    class="px-3 py-2 border rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] invalid:text-piink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer:" 
                    />
                   <button className="bg-[#7126B5] text-sm hover:bg-[#35095c] text-white mx-auto font-bold py-2 px-2 mt-6 rounded m-auto w-full" type="submit"> Masuk </button>
              </label>
            </form>
  
            <p class="mt-4 text-center text-sm ">Sudah punya akun? <span class="text-[#7126B5] text-sm font-bold"> Masuk disini </span></p>
            </div>
          </div>
          
      </div>
    )
  }
  
  export default Register