import React from "react";
import { HiInformationCircle } from "react-icons/hi";

const DetailHistory = () => {
  return (
    <section className="px-10 py-20 sm:py-0 lg:pb-16 mx-auto w-full font-poppins mt-10">
      <div className="flex justify-between py-4">
        <h1 className="font-bold text-xl">Detail Pesanan</h1>
        <button className="bg-[#73CA5C] text-white rounded-full px-4 py-1">
          Issued
        </button>
      </div>
      <h1 className="pb-3">
        Booking Code : <span className="text-[#7126B5]">6723y2GHK</span>
      </h1>
      <div className="flex justify-between">
        <h1>19.10</h1>
        <p className="text-[#A06ECE]">Keberangkatan</p>
      </div>
      <p>5 Maret 2023</p>
      <p className="pb-4">Soekarno Hatta - Terminal 1A Domestik</p>

      <hr className="w-full border border-gray-300" />

      <div className="flex gap-5 py-4">
        <HiInformationCircle className="text-orange-400 h-7 w-9" />
        <div className="">
          <h1 className="font-bold">Jet Air - Economy</h1>
          <p className="font-bold">JT - 2023</p>
          <p className="pt-5 font-bold">Informasi</p>
          <p className="text-[#7126B5]">Penumpang 1: Mr. Harry Potter</p>
          <p>ID: 1234567 </p>
          <p className="text-[#7126B5]">Penumpang 1: Mr. Harry Potter</p>
          <p>ID: 1234567 </p>
        </div>
      </div>
      <hr className="w-full border border-gray-300" />
      <div className="flex justify-between pt-5">
        <h1>21.10</h1>
        <p className="text-[#A06ECE]">Kedatangan</p>
      </div>
      <p>5 Maret 2023</p>
      <p className="pb-4">Melbourne International Airport</p>

      <hr className="w-full border border-gray-300" />

      <div className="pt-5">
        <h1 className="font-bold">Rincian Harga</h1>
        <div className="flex justify-between">
          <h1>2 Adults</h1>
          <p className="">IDR 9.550.000</p>
        </div>
        <div className="flex justify-between">
          <h1>1 Baby</h1>
          <p className="">IDR 0</p>
        </div>
        <div className="flex justify-between">
          <h1>Tax</h1>
          <p className="">IDR 300.000</p>
        </div>
      </div>
      <div className="flex justify-between">
        <h1>Total</h1>
        <p className="">IDR 9.850.000</p>
      </div>
      <div className="pt-10 text-center">
        <button className="bg-[#4B1979] py-3 px-9 rounded-xl text-white">
          Cetak Tiket
        </button>
      </div>
    </section>
  );
};

export default DetailHistory;
