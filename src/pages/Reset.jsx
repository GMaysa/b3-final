import React from "react";
import wp from "../assets/wp.svg";
import { useState } from "react";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../redux/actions/auth";

const Reset = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, confirmPassword };

    dispatch(reset(data, navigate));
  };

  return (
    <div className="flex font-Poppins h-screen">
      <img
        src={wp}
        className="w-1/2 h-screen object-cover object-left-top smm:hidden "
      />

      <div className="w-1/2 m-auto smm:m-auto smm:w-full">
        <div className="max-w-lg m-auto p-10">
          <h1 className="font-bold mb-6 text-[24px]"> Reset Password</h1>

          <form onSubmit={onSubmit}>
            <p className="mb-1 text-xs ">Masukkan email lamamu</p>

            <input
              type="email"
              placeholder="Masukan email lamamu disini"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-8 px-3 py-2 border rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] "
            />

            {/* =============================================NEW PASSWORD==========================*/}
            <p className="mb-1 text-xs">Masukan password baru </p>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password baru disini"
              className="px-3 py-2 border rounded-2xl w-full text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5]"
            />
            {/*==================== Confirmm PASSWORD ===================================*/}

            <p className="mt-9 mb-1 text-xs">Ulangi Password baru</p>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Konfirmasi ulang Password"
              className="px-3 py-2 border rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] "
            />
            <button
              className="bg-[#7126B5] text-sm hover:bg-[#35095c] text-white mx-auto  py-2 px-2 mt-6 rounded m-auto w-full"
              type="submit"
            >
              {" "}
              Simpan{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
{
  /* <label
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer">
                {showPassword ? (<FaEyeSlash className='text-gray-700'/>) : (<FaEye className="text-gray-500" />)}
            </label> */
}
