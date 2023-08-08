import React from "react";
import { Link } from "react-router-dom";
import { register } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { otpcode } from "../redux/actions/auth";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Otp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailLocal = localStorage.getItem("email");
  const [otp, setOtpCode] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { otpCode: otp, email: emailLocal };
    // memasukan otpcode di endpoint ke otp 24
    dispatch(otpcode(data, navigate));
  };

  const [seconds, setSeconds] = useState(900);
  useEffect(() => {
    let interval = null;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="font-Poppins h-full max-w-2xl mx-auto my-auto smm:p-7">
      {/* <div className='h-20 w-20 bg-yellow-400'></div> */}
      <Link to="/login">
        <MdOutlineKeyboardBackspace className="mt-24 text-3xl" />
      </Link>
      <h1 className="mt-5  font-bold text-[24px]">Masukan Otp</h1>
      <p className="text-center my-6">
        {" "}
        Ketik 6 digit kode yang dikirimkan ke{" "}
        <span className="bold">{emailLocal}</span>
      </p>

      <form onSubmit={onSubmit}>
        <div className="flex gap-6 mt-11 justify-center">
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtpCode(e.target.value)}
            className="appearance-none px-3 py-2 border shadow rounded-2xl w-72 block "
          />
        </div>
        <p className="m-auto text-center mt-5">
          Kirim Ulang OTP dalam {formatTime(seconds)}{" "}
        </p>

        <button
          className="bg-[#7126B5] text-sm hover:bg-[#35095c] text-white mx-auto font-bold py-2 px-2 mt-6 rounded m-auto w-full"
          type="submit"
        >
          {" "}
          Simpan{" "}
        </button>
      </form>
    </div>
  );
}

export default Otp;
