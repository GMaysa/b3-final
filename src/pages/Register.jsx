import React from "react";
import wp from "../assets/wp.svg";
import { Link } from "react-router-dom";
import { register } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name, phoneNumber };

    localStorage.setItem("email", email);
    // menyimpan inputan email ke local storage

    dispatch(register(data, navigate));
  };
  return (
    <div className="flex font-Poppins  h-screen">
      <img
        src={wp}
        className="w-1/2 h-screen object-cover object-left-top smm:hidden "
      />

      <div className="w-1/2 m-auto smm:m-auto smm:w-full ">
        <div className="max-w-lg m-auto p-5">
          <h1 className="font-bold mb-6 text-[24px]">Daftar</h1>

          <form onSubmit={onSubmit}>
            <span className="mb-1 text-xs ">Nama</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Lengkap"
              className="px-3 py-2 border mb-4 rounded-2xl w-full text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] invalid:text-red-700 invalid:focus:ring-red-700 invalid:focus:border-red-700 peer:"
            />

            <span className="text-xs mb-1 text-slate-700 ">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Contoh: johndoe@gmail.com"
              className="px-3 py-2 mb-4 border shadow rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] invalid:text-red-700 invalid:focus:ring-red-700 invalid:focus:border-red-700 "
            />

            <span className="text-xs mb-1 text-slate-700 ">Nomor Telepon</span>
            <input
              type="number"
              placeholder="+628"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="resize-none appearance-none px-3 py-2 mb-6 border shadow rounded-2xl w-full block text-sm placeholder:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5]"
            />

            <span className="block text-xs mb-1 text-slate-700">
              Buat Password
            </span>
            <input
              // type="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukan Password"
              className="px-3 py-2 border block rounded-2xl w-full text-sm shadow placeholder:text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#7126B5] focus:border-[#7126B5] "
            />
            <button
              className="bg-[#7126B5] text-sm hover:bg-[#35095c] text-white mx-auto font-bold py-2 px-2 mt-6 rounded m-auto w-full"
              type="submit"
            >
              {" "}
              Masuk{" "}
            </button>
          </form>

          <p className="mt-4 text-center text-sm ">
            Sudah punya akun?{" "}
            <Link to="/login">
              {" "}
              <span className="text-[#7126B5] text-sm font-bold">
                {" "}
                Masuk disini{" "}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
