/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { CgLogIn } from "react-icons/cg";
import { FiUser, FiList, FiBell, FiLogOut, FiMenu } from "react-icons/fi";
import { logout } from "../redux/actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClikProfile = () => {
    navigate(`/profile`);
  };

  const handleClikHome = () => {
    navigate(`/`);
  };

  const handleClikHistory = () => {
    navigate(`/history`);
  };
  const handleClikNotif = () => {
    navigate(`/notification`);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      {!isLogin && !isRegister && (
        <div className="pb-10 sm:p-9">
          <nav
            className={`fixed w-full left-0 top-0 shadow-[0px_0px_3px_2px_rgba(0,0,0,0.05)] bg-white px-4 md:px-10 z-10 
    ${sticky ? "text-black h-20 items-center" : "text-black"}`}
          >
            <div className="max-w-[1213px] mx-auto flex items-center justify-between z-10 gap-8 cursor-pointer h-14 py-10">
              <img
                src={logo}
                className="w-20 items-center"
                onClick={handleClikHome}
              />
              <div className="items-center relative">
                <div className={`text-gray-900 md:block hidden `}>
                  <ul className="flex items-center gap-4 text-gray-800 text-md">
                    {isLoggedIn ? (
                      <>
                        <li>
                          <Link
                            to="/history"
                            smooth={true}
                            offset={-200}
                            duration={500}
                          >
                            <FiList size={20} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/notification"
                            smooth={true}
                            offset={-200}
                            duration={500}
                          >
                            <FiBell size={20} />
                          </Link>
                        </li>
                        <li>
                          <div className="relative">
                            <div
                              className="flex gap-0 items-center"
                              onClick={toggleDropdown}
                            >
                              <FiUser size={20} />
                            </div>
                            {isOpen && (
                              <div className="absolute font-medium bg-white rounded-sm shadow-[0px_2px_3px_2px_rgba(0,0,0,0.05)] w-36 px-3 py-2 top-[51px] right-0 text-center z-10">
                                <button
                                  className="flex gap-2 pb-3 text-sm"
                                  onClick={handleClikProfile}
                                >
                                  <span className="pt-1">
                                    <FiUser className="text-[#A06ECE]" />
                                  </span>
                                  Profile
                                </button>

                                <button
                                  className="flex gap-2 text-sm"
                                  onClick={() => dispatch(logout(navigate))}
                                >
                                  <span className="pt-1">
                                    <FiLogOut className="text-[#A06ECE]" />
                                  </span>
                                  Logout
                                </button>
                              </div>
                            )}
                          </div>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="py-5 pr-4">
                          <button className="w-24 text-white px-3 text-sm bg-[#7126B5] text-center items-center h-9 rounded-lg hover:scale-110 flex gap-2">
                            <CgLogIn className="h-6" />
                            <Link to="/login">Masuk</Link>
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className={`z-[999] ${
                  open ? "text-gray-900" : "text-gray-900"
                } text-3xl md:hidden flex items-center`}
              >
                <FiMenu size={27} />
              </div>

              <div
                className={`text-gray-900 md:hidden absolute w-2/3 min-h-screen  px-7 py-2 font-medium bg-white top-0 ${
                  open ? "right-0" : "right-[-100%]"
                }`}
              >
                <>
                  {isLoggedIn ? (
                    <div className="py-20 px-5 ustify-items-center flex flex-col gap-5">
                      <button
                        className="flex gap-2 text-base"
                        onClick={handleClikProfile}
                      >
                        <span className="pt-1">
                          <FiUser className="text-[#A06ECE]" />
                        </span>
                        Account
                      </button>
                      <button
                        className="flex gap-2 text-base"
                        onClick={handleClikHistory}
                      >
                        <span className="pt-1">
                          <FiList className="text-[#A06ECE]" />
                        </span>
                        History
                      </button>
                      <button
                        className="flex gap-2 text-base"
                        onClick={handleClikNotif}
                      >
                        <span className="pt-1">
                          <FiBell className="text-[#A06ECE]" />
                        </span>
                        Notification
                      </button>
                      <button
                        className="w-24 text-white px-3 text-sm bg-[#7126B5] text-center items-center h-9 rounded-lg hover:scale-110 flex gap-2"
                        onClick={() => dispatch(logout(navigate))}
                      >
                        <span className="pt-1">
                          <FiLogOut className="" />
                        </span>
                        Logout
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="py-20 px-10 text-center items-center justify-items-center">
                        <button className="w-24 text-white px-3 text-sm bg-[#7126B5] text-center items-center h-9 rounded-lg hover:scale-110 flex gap-2">
                          <CgLogIn className="h-6" />
                          <Link to="/login">Masuk</Link>
                        </button>
                      </div>
                    </>
                  )}
                </>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
