/** @format */

import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import wp from "../assets/wp.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // iconshow diatas
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    dispatch(login(data, navigate));
  };
  return (
    <div className="flex font-Poppins h-screen">
      <img
        src={wp}
        className="w-1/2 h-screen object-cover object-left-top smm:hidden "
      />

      <div className="w-1/2 my-auto smm:m-auto smm:w-full">
        <div className="max-w-lg m-auto p-5">
          <h1 className="font-bold mb-6 text-[24px]">Masuk</h1>

          <form onSubmit={onSubmit}>
            <p className="mb-1 text-xs ">Email</p>
            <input
              type="email"
              id="email"
              placeholder="Contoh: johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="px-3 py-2 mb-4 border rounded-2xl w-full text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] invalid:text-red-700 invalid:focus:ring-red-700 invalid:focus:border-red-700 peer:"
            />

            <div className="flex items-center justify-between mb-[0.3rem]">
              <span className="block text-xs after:ml-0">Password</span>
              <Link to="/reset">
                <a
                  className="inline-block align-baseline font-bold text-sm text-[#7126B5] hover:text-blue-800"
                  href="#"
                >
                  Lupa kata sandi?
                </a>
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                // type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukan Password"
                className="px-3 py-2 border rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] invalid:text-piink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer:"
              />

              <label
                className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-700" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </label>
            </div>

            <button
              className="bg-[#7126B5] text-sm hover:bg-[#35095c] text-white mx-auto font-bold py-2 px-2 mt-6 rounded m-auto w-full"
              type="submit"
            >
              Masuk
            </button>
          </form>

          <p class="mt-4 text-center text-sm ">
            Belum punya akun?{" "}
            <a href="">
              <Link to="/register">
                <span class="text-[#7126B5] text-sm font-bold">
                  {" "}
                  daftar disini{" "}
                </span>
              </Link>{" "}
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
