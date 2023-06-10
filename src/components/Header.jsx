import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { FiBell,FiUser,FiList,FiSearch } from "react-icons/fi";

const Header = () => {
  //300 = font-light
  //500 = font-medium
  //700 = font-bold
  return (
    <div>
      <div className='header flex justify-between px-[128px] py-[15px] shadow-md'>
        <div className='flex gap-[35px]'> 
            <div className='logo'>
                <Logo />
            </div>
            <div className='flex items-center'>
              <div className='search_bar rounded-[16px] bg-[#EEEEEE] px-[25px] py-3 w-[444px]'>
                <form className='flex justify-between font-light'>
                  <input
                    type='text'
                    placeholder='Cari di sini...'
                    className='outline-none bg-transparent'
                  />
                  <FiSearch className='ml-2 text-[24px] flex justify-between items-center' />
                </form>
              </div>
            </div>
        </div>
        <div className='flex justify-between items-center px-50px gap-[30px]'>
          <div className='list_icon text-[24px]'>
            <FiList />
          </div>
          <div className='bell_icon text-[24px]'>
            <FiBell />
          </div>
          <div className='user_icon text-[24px]'>
            <FiUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
