/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiUser, FiList, FiBell, FiLogOut, FiEdit3 } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();

  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickEdit = () => {
    navigate(`/edit`);
  };

  const handleClikProfile = () => {
    navigate(`/profile`);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`w-full left-0 top-0 p-8 md:px-16 z-10 border-b shadow-md
      ${sticky ? "bg-white text-black h-28 items-center" : "text-black"}
      `}
    >
      <div className="flex items-center justify-between z-10 gap-8 cursor-pointer drop-shadow-lg">
        <img src={logo} className="w-20 items-center" />
        <div className="items-center relative">
          <ul className="flex items-center gap-4 text-gray-800 text-md">
            <li>
              <Link to="/history" smooth={true} offset={-200} duration={500}>
                <FiList />
              </Link>
            </li>
            <li>
              <Link
                to="/notification"
                smooth={true}
                offset={-200}
                duration={500}
              >
                <FiBell />
              </Link>
            </li>
            <li>
              <div className="relative">
                <div
                  className="flex gap-0 items-center"
                  onClick={toggleDropdown}
                >
                  <FiUser />
                </div>
                {isOpen && (
                  <div className="absolute font-medium bg-white rounded-md shadow-lg w-36 px-3 py-2 top-10 right-0 text-center z-50">
                    <button
                      className="flex gap-2 pb-3 text-sm"
                      onClick={handleClikProfile}
                    >
                      <span className="pt-1">
                        <FiUser className="text-[#A06ECE]" />
                      </span>
                      Profile
                    </button>

                    <button className="flex gap-2 text-sm">
                      <span className="pt-1">
                        <FiLogOut className="text-[#A06ECE]" />
                      </span>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
