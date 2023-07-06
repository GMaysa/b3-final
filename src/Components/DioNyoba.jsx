import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { FiBell,FiUser,FiList,FiSearch,FiX, } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { logout } from '../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { IsLogeedIn,token, user } = useSelector  ((state) => state.auth)

  const divClasses = `tglBtn flex flex-col p-[20px] sm:hidden  ${isActive ? 'active' : ''}`;
  //300 = font-light
  //500 = font-medium
  //700 = font-bold
  return (
    <div>
      <div className='header flex justify-between px-[20px] sm:px-[128px] py-[15px] shadow-md'>
        <div className='flex gap-[20px] sm:gap-[30px]'> 
          <div className='logo w-[70px] sm:w-[98px]'>
              <Logo />
          </div>
          <div className='flex items-center'>
            <div className=' search_bar px-[15px] py-[10px] rounded-[16px] bg-[#EEEEEE] sm:px-[25px] sm:py-3 sm:w-[444px]'>
              <form className='flex justify-between font-lightt text-[10px] sm:text-[14px] items-center'>
                <input
                  type='text'
                  placeholder='Cari di sini...'
                  className='outline-none bg-transparent'
                />
                <FiSearch className='ml-2 flex justify-between items-center' />
              </form>
            </div>
          </div>
        </div>

        <div className='flex relative justify-between items-center gap-[30px] overflow-x-hidden'>
          <div className='list_icon text-[24px]' onClick={() => setIsActive(!isActive)}>
            <FiList />
          </div>
          <div className='hidden sm:block bell_icon text-[24px]'>
            <FiBell />
          </div>
          <button>
          <div className='hidden sm:block user_icon text-[24px]' onClick={() => dispatch(logout(navigate) )}>
            <FiUser />
          </div>
          </button>
        </div>
        <div className={divClasses}>  
          <div className='user_icon text-[24px] flex justify-end' onClick={() => setIsActive(!isActive)}>
              <FiX />
          </div>
          <div className='flex flex-col gap-[20px] mt-[20px]'>
            <div className='bell_icon text-[20px] flex items-center gap-[12px]'>
              <FiBell />
              <p className='text-[16px]'>Notification</p>
            </div>
            <div className='bell_icon text-[20px] flex items-center gap-[12px]'>
              <FiUser />
              <p className='text-[16px]'>User</p>
            </div>

            <button>
            <div className='bell_icon text-[20px] flex items-center gap-[12px]'
            onClick={() => dispatch(logout(navigate) )}>
              <TbLogout />
              <p className='text-[16px]'>Log Out</p>
            </div>
            </button>
            
          </div>

          </div>
      </div>
    </div>
  );
};

export default Header;