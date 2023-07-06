/** @format */

import React, { useState, useEffect } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa";

const CardHistory = ({
  bookingCode,
  status,
  departureAirport,
  departureDate,
  arrivalAirport,
  arrivalDate,
  totalPrice,
  onClick,
  roundTrip,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle Size Detail
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Convert date to formay yyyy-mm-dd
  const formatDate = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const day = date.getDate();
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <>
      {/* left card */}
      <div
        className={`lg:flex ${isMobile ? "flex-col" : "gap-6"}`}
        key={bookingCode}
      >
        <div
          className={`border hover:border-[#A06ECE] shadow-sm p-2 sm:p-4 py-4 rounded-lg h-full w-full ${
            isMobile ? "mb-7" : "mb-10"
          }`}
          onClick={onClick}
        >
          <div className="flex justify-between gap-3 pb-8 cursor-pointer">
            <div>
              <button
                className={`rounded-full px-4 py-2 ${
                  status === "Pending"
                    ? "bg-red-500 text-white"
                    : status === "Being verified"
                    ? "bg-green-500 text-white"
                    : status === "Need confirmation"
                    ? "bg-gray-400 text-white"
                    : status === "Rejected"
                    ? "bg-black text-white"
                    : status === "Success"
                    ? "bg-green-400 text-white"
                    : status === "Failed"
                    ? "bg-red-700 text-white"
                    : status === "Cancelled"
                    ? "bg-gray-700 text-white"
                    : ""
                }`}
              >
                {typeof status === "string" ? status : status?.name}
              </button>
            </div>

            <div className="items-center flex gap-2">
              <button className="bg-black rounded-full p-1 h-1 items-center"></button>
              <p className="text-xs">{roundTrip ? "Round Trip" : "One Way"}</p>
            </div>
          </div>
          <div
            className={`flex ${
              isMobile ? "flex-row" : "flex-row"
            } gap-3 pb-5 items-center`}
          >
            <div
              className={`flex gap-2 ${isMobile ? "mt-3" : "mx-auto"} w-1/2`}
            >
              <div className="pt-4 p-1 flex ">
                <FaPlaneDeparture className="h-4 text-gray-500" />
              </div>
              <div>
                <h6 className="text-black font-bold text-sm sm:text-base">
                  {departureAirport}
                </h6>
                <p className="text-xs">
                  {new Date(departureDate * 1000).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
                <p className="text-xs"> {formatDate(departureDate)}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-items-center w-full">
              <p className="pb-1 text-xs">
                {(() => {
                  const depDepDate = new Date(departureDate * 1000);
                  const depArrDate = new Date(arrivalDate * 1000);

                  const durationInMillis =
                    depArrDate.getTime() - depDepDate.getTime();
                  const durationInMinutes = Math.floor(
                    durationInMillis / 60000
                  );
                  const hours = Math.floor(durationInMinutes / 60);
                  const minutes = durationInMinutes % 60;

                  return `${hours}h  ${minutes}m`;
                })()}
              </p>

              <div className="flex items-center justify-center w-full">
                <div className="w-1/3 border-b border-dashed border-[#A06ECE] h-px" />
                <FaPlane className="w-4 h-4 text-[#A06ECE]" />
                <div className="w-1/3 border-b border-dashed border-[#A06ECE] h-px" />
              </div>
            </div>
            <div
              className={`flex gap-2 ${isMobile ? "mt-3" : "mx-auto"} w-full`}
            >
              <div className="pt-4 p-1 flex">
                <FaPlaneArrival className="h-4 text-gray-500" />
              </div>
              <div>
                <h6 className="text-black font-bold text-sm sm:text-base">
                  {arrivalAirport}
                </h6>
                <p className="text-xs">
                  {new Date(arrivalDate * 1000).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
                <p className="text-xs">{formatDate(arrivalDate)}</p>
              </div>
            </div>
          </div>
          <hr className="w-full border-1 border-gray-200" />
          <div className="flex flex-row justify-between gap-6 w-full pt-5 px-5 items-center">
            <div className="flex flex-col">
              <p className="font-bold text-sm">Booking Code</p>
              <p className="text-xs">{bookingCode}</p>
            </div>

            <div className="font-bold text-[#4B1979] text-sm">
              IDR {totalPrice.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHistory;
