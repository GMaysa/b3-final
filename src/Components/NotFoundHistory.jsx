/** @format */

import React from "react";
import img from "../assets/error.png";
import { useNavigate } from "react-router";

const NotFoundHistory = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-16 sm:pt-20 px-7 sm:px-20 sm:py-16 py-10 w-full mx-auto font-poppins">
      <div className="flex flex-col text-center items-center justify-center">
        <img src={img} className="items-center pb-9" />
        <h1 className="text-[#7126B5] text-base">
          Oops! Riwayat pesanan kosong!
        </h1>
        <p className="pb-6 text-base">
          Anda belum melakukan pemesanan penerbangan
        </p>
        <button
          className="bg-[#7126B5] text-white w-64  p-2 rounded-lg hover:scale-110"
          onClick={() => navigate("/")}
        >
          Cari Penerbangan
        </button>
      </div>
    </section>
  );
};

export default NotFoundHistory;
