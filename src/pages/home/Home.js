import React from "react";
import { MdSwapHoriz } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { IoCalendarSharp } from "react-icons/io5";
import { thisDate } from "./HomeSlicing";
import { alpha, styled } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import { Switch } from "@mui/material";


function Home() {
  let date = thisDate();

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
      '.Mui-checked': {
      color: deepPurple[600],
      '&:hover': {
        backgroundColor: alpha(deepPurple[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: deepPurple[600],
    },
  }}));

  return (
    <div>
      {/* PURPLE TAPE */}
      <div className="mt-[148px] w-screen h-[150px] bg-gradient-to-r from-violet-800/50 to-violet-200 flex justify-center items-center">
        {/* DISCOUNT BANNER */}
        <div className="w-[1213px] h-[232px] rounded-[20px] bg-white relative overflow-hidden">
          {/* TITTLE BANNER */}
          <div className="w-full h-full flex flex-col absolute bg-gradient-to-r from-orange-100 to-orange-50/30 font-bold text-4xl italic pl-[63px] pt-[45px]">
            <h1 className="text-neutral-800 leading-snug drop-shadow-[0_35px_0_35px_rgba(0,0,0,0.25)]">
              Grab Your Tickets Now <br /> And
              <span className="text-purple-800"> Unlock Up to 85% OFF!</span>
            </h1>
          </div>
          {/* TITTLE IMAGE */}
          <div className="w-full h-full flex">
            {/* <div className="w-1/3" /> */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/3140205/pexels-photo-3140205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* CARD CHOOSE PLAN */}
      <div className="mx-auto max-w-[968px] rounded-xl bg-white shadow-[0_0_8px_rgba(0,0,0,0.15)] relative top-[-10px] border-[1.5px] border-[#dedede] overflow-hidden">
        <p className="px-[34px] pt-[24px] font-medium  text-xl text-neutral-800">
          Choose a special flight schedule on
          <span className="text-purple-800 font-bold italic"> FlyPal</span>
        </p>

        {/* FORM */}
        <form className="px-[34px] pb-[24px] mt-6 flex flex-col gap-8">
          {/* CHOOSE THE CITY */}
          <div className="w-full flex items-center font-medium text-xl text-[#8a8a8a]">
            {/* FROM */}
            <div className="w-full flex gap-5">
              <div className="flex gap-[8px] items-center">
                <IoIosAirplane className="rotate-[-35deg]" />
                <p className="text-base">From</p>
              </div>
              <input
                defaultValue={"Jakarta (JKT)"}
                className="w-full bg-white text-lg border-b-2 py-2 text-neutral-700 outline-none"
              />
            </div>
            {/* SWAP BUTTON */}
            <button className="mx-8 text-2xl text-white p-1 rounded-lg duration-300 bg-violet-800 hover:bg-violet-800">
              <MdSwapHoriz />
            </button>
            {/* TO */}
            <div className="w-full flex gap-5">
              <div className="flex gap-[8px] items-center">
                <IoIosAirplane className="rotate-[-35deg]" />
                <p className="text-base">To</p>
              </div>
              <input
                defaultValue={"Denpasar (DPS)"}
                className="w-full bg-white text-lg border-b-2 py-2 text-neutral-700 outline-none"
              />
            </div>
          </div>

          {/* DATE & PASSENGER PLAN */}
          <div className="w-full flex items-cente gap-24">
            {/* Date */}
            <div className="w-full flex items-center gap-8">
              {/* Departure */}
              <div className="w-full h-full font-medium text-[#8a8a8a] flex flex-col justify-between">
                <p className="h-full flex items-center">Departure</p>
                <div className="w-full flex border-b-2 py-2 outline-none">
                  <input
                    input="text"
                    defaultValue={date}
                    className="w-full text-neutral-700 outline-none"
                  />
                  <div children={<IoCalendarSharp />} />
                </div>
              </div>
              {/* Return */}
              <div className="w-full font-medium text-[#8a8a8a]">
                <p className="flex justify-between items-center">Return <CustomSwitch className="flex justify-end" color="secondary" /></p>
                <div className="w-full flex border-b-2 py-2 outline-none">
                  <input
                    input="text"
                    defaultValue={date}
                    className="w-full text-neutral-700 outline-none"
                  />
                  <div children={<IoCalendarSharp />} />
                </div>
              </div>
            </div>
            {/* Passengers & Seat Class */}
            <div className="w-full flex gap-8">
              {/* Passengers */}
              <div className="w-full h-full font-medium text-[#8a8a8a] flex flex-col justify-between">
                <p className="h-full flex items-center">Jumlah Penumpang</p>
                <div className="w-full flex border-b-2 py-2 outline-none">
                  <input
                    input="text"
                    defaultValue="2 Penumpang"
                    className="w-full text-neutral-700 outline-none"
                  />
                </div>
              </div>
              <div className="w-full h-full font-medium text-[#8a8a8a] flex flex-col justify-between">
                <p className="h-full flex items-center">Jenis Kelas</p>
                <div className="w-full flex border-b-2 py-2 outline-none">
                  <input
                    input="text"
                    defaultValue="Business"
                    className="w-full text-neutral-700 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <button className="w-full flex justify-center py-3 bg-purple-800 font-bold text-white">
          Cari Penerbangan
        </button>
      </div>

      {/* Favorite Destination */}
      <div className="mt-6 mx-auto max-w-[968px]">
        <h2 className="font-semibold text-2xl mb-3">Favorite Destination</h2>
        {/* Selector Button */}
        <div className="flex mb-5 gap-4">
          {/* Map Button Here */}
          <button className="py-[14px] px-[24px] bg-purple-800 text-white font-semibold rounded-lg">
            Semua
          </button>
          <button className="py-[14px] px-[24px] bg-violet-300/50 text-purple-900 font-medium rounded-lg">
            Asia
          </button>
        </div>
        {/* Destination Cards */}
        <div className="flex gap-6 ">
          {/* Map Card Here */}
          <div className="w-[180px] h-[200px] p-2 shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-lg flex flex-col">
            {/* Image */}
            <div
              className="w-full h-full flex justify-end bg-cover bg-center rounded-md overflow-hidden"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/6974274/pexels-photo-6974274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
            >
              {/* Tag */}
              <div className="h-fit bg-purple-700/50 text-white font-medium py-[4px] pl-[22px] pr-[10px] rounded-l-full text-[13px] mt-1">
                Limited!
              </div>
            </div>
            <div className="w-full h-fit flex flex-col gap-[2px] mt-1">
              <h1 className="text-[14px] font-base">Jakarta -&gt; Bangkok </h1>
              <p className="text-[10px] font-bold text-purple-700">AirAsia</p>
              <p className="text-[11px]">20 - 30 March 2023</p>
              <p className="text-[13px]">
                Start From{" "}
                <span className="text-red-500 font-semibold">IDR 950.000</span>
              </p>
            </div>
          </div>
          <div className="w-[180px] h-[200px] p-2 shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-lg flex flex-col">
            {/* Image */}
            <div
              className="w-full h-full flex justify-end bg-cover bg-center rounded-md overflow-hidden"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/6974274/pexels-photo-6974274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
            >
              {/* Tag */}
              <div className="h-fit bg-purple-700/50 text-white font-medium py-[4px] pl-[22px] pr-[10px] rounded-l-full text-[13px] mt-1">
                Limited!
              </div>
            </div>
            <div className="w-full h-fit flex flex-col gap-[2px] mt-1">
              <h1 className="text-[14px] font-base">Jakarta -&gt; Bangkok </h1>
              <p className="text-[10px] font-bold text-purple-700">AirAsia</p>
              <p className="text-[11px]">20 - 30 March 2023</p>
              <p className="text-[13px]">
                Start From{" "}
                <span className="text-red-500 font-semibold">IDR 950.000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
