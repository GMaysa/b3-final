/** @format */

import React, { useEffect } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GiReturnArrow } from "react-icons/gi";
import { getHistoryDetail, getTicket } from "../redux/actions/historyActions";

const DetailHistory = () => {
  const dispatch = useDispatch();

  const { bookingCode } = useParams();
  const { historyDetail, historyTicket } = useSelector(
    (state) => state.history
  );

  useEffect(() => {
    dispatch(getHistoryDetail(bookingCode));
  }, [dispatch, bookingCode]);

  const handleSendTicketToEmail = () => {
    dispatch(getTicket(bookingCode));
  };

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
    <section className="px-10 py-20 sm:py-0 lg:pb-16 mx-auto w-full font-poppins mt-10">
      <div className="flex justify-between py-4">
        <h1 className="font-bold text-xl sm:text-2xl">Detail Pesanan</h1>
        <button
          className={`rounded-full px-4 py-2 ${
            historyDetail?.status?.statusId === 1
              ? "bg-red-500 text-white"
              : historyDetail?.status?.statusId === 2
              ? "bg-green-500 text-white"
              : historyDetail?.status?.statusId === 7
              ? "bg-gray-400 text-white"
              : historyDetail?.status?.statusId === 3
              ? "bg-black text-white"
              : historyDetail?.status?.statusId === 4
              ? "bg-green-400 text-white"
              : historyDetail?.status?.statusId === 5
              ? "bg-red-700 text-white"
              : historyDetail?.status?.statusId === 6
              ? "bg-gray-700 text-white"
              : ""
          }`}
        >
          {historyDetail?.status?.name}
        </button>
      </div>
      <div className="pb-4 pt-7 flex text-lg font-bold ">
        <h1 className=""> Booking Code :</h1>
        <span className="text-[#7126B5] pl-2">
          {historyDetail?.booking?.bookingCode}
        </span>
      </div>
      <h2 className="text-md pb-10 font-semibold text-[#4B1979] flex gap-4">
        <GiReturnArrow className="h-6" />
        {historyDetail?.booking?.roundTrip ? "Round Trip" : "One Trip"}
      </h2>
      <div className="flex justify-between">
        <h1>
          {new Date(
            historyDetail?.booking?.departFlight?.departureDate * 1000
          ).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h1>
        <p className="text-[#A06ECE]">Keberangkatan</p>
      </div>
      <p>{formatDate(historyDetail?.booking?.departFlight?.departureDate)}</p>

      <p className="pb-4">
        {historyDetail?.booking?.departFlight?.departureAirport?.name}
      </p>
      <hr className="w-full border border-gray-300" />

      <div className="flex gap-5 py-4">
        <HiInformationCircle className="text-orange-400 h-7 w-9" />
        <div className="">
          <h1 className="font-bold">
            {" "}
            {historyDetail?.booking?.departFlight?.airline?.name}
          </h1>
          <p className="font-bold">
            {historyDetail?.booking?.departFlight?.airplane?.model}
          </p>

          <p className="pt-5 font-bold">Informasi</p>
          {historyDetail?.booking?.passengers?.map((passenger, index) => (
            <div key={index} className="pb-3">
              <p className="text-[#7126B5]">Penumpang {index + 1} :</p>
              <p>
                {passenger.passenger.title} {""}
                {passenger.passenger.fullName}
              </p>

              <p>ID : {passenger.passenger.identityNumber}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full border border-gray-300" />
      <div className="flex justify-between pt-5">
        <h1>
          {new Date(
            historyDetail?.booking?.departFlight?.arrivalDate * 1000
          ).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h1>
        <p className="text-[#A06ECE]">Kedatangan</p>
      </div>
      <p>{formatDate(historyDetail?.booking?.departFlight?.arrivalDate)}</p>
      <p className="pb-4">
        {historyDetail?.booking?.departFlight?.arrivalAirport?.name}
      </p>

      {/* RoundTrip */}
      {historyDetail?.booking?.roundTrip ? (
        <div className="py-8">
          <div className="pb-10">
            <button className=" bg-[#A06ECE] py-1 w-full rounded-md">
              <h2 className="text-md font-semibold text-gray-100 flex gap-4 justify-center items-center text-center">
                <GiReturnArrow className="h-6" />
                {historyDetail?.booking?.roundTrip ? "Round Trip" : "One Trip"}
              </h2>
            </button>
          </div>

          <div className="flex justify-between">
            <h1>
              {new Date(
                historyDetail?.booking?.returnFlight?.departureDate * 1000
              ).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </h1>
            <p className="text-[#A06ECE]">Keberangkatan</p>
          </div>
          <p>
            {formatDate(historyDetail?.booking?.returnFlight?.departureDate)}
          </p>
          <p className="pb-4">
            {historyDetail?.booking?.returnFlight?.departureAirport?.name}
          </p>
          <hr className="w-full border border-gray-300" />
          <div className="flex gap-5 py-4">
            <HiInformationCircle className="text-orange-400 h-7 w-9" />
            <div className="">
              <h1 className="font-bold">
                {" "}
                {historyDetail?.booking?.returnFlight?.airline?.name}
              </h1>
              <p className="font-bold">
                {historyDetail?.booking?.returnFlight?.airplane?.model}
              </p>

              <p className="pt-5 font-bold">Informasi</p>
              {historyDetail?.booking?.passengers?.map((passenger, index) => (
                <div key={index} className="pb-3">
                  <p className="text-[#7126B5]">Penumpang {index + 1} :</p>
                  <p>
                    {passenger.passenger.title} {""}
                    {passenger.passenger.fullName}
                  </p>

                  <p>ID : {passenger.passenger.identityNumber}</p>
                </div>
              ))}
            </div>
          </div>
          <hr className="w-full border border-gray-300" />
          <div className="flex justify-between pt-5">
            <h1>
              {new Date(
                historyDetail?.booking?.returnFlight?.arrivalDate * 1000
              ).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </h1>
            <p className="text-[#A06ECE]">Kedatangan</p>
          </div>
          <p>{formatDate(historyDetail?.booking?.returnFlight?.arrivalDate)}</p>
          <p className="pb-4">
            {historyDetail?.booking?.returnFlight?.arrivalAirport?.name}
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="pt-5">
        <h1 className="font-bold pb-3">Rincian Harga</h1>
        <div className="flex justify-between">
          <h1>
            {(() => {
              const passengerCount =
                historyDetail?.booking?.passengers?.length || 0;
              return `${passengerCount} Passenger`;
            })()}
          </h1>
          <p className="">
            IDR {historyDetail?.booking?.totalPrice.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex justify-between text-lg text-[#7126B5] pt-2 font-semibold">
        <h1>Total</h1>
        <p className="">
          IDR {historyDetail?.booking?.totalPrice.toLocaleString()}
        </p>
      </div>

      <div className="pt-10 text-center">
        <button
          className="bg-[#4B1979] py-3 px-9 rounded-xl text-white"
          onClick={handleSendTicketToEmail}
          disabled={getTicket === "loading"}
        >
          {historyTicket
            ? "Cetak Tiket"
            : getTicket === "loading"
            ? "Mengirim..."
            : "Ticket Fetched"}
        </button>
      </div>
    </section>
  );
};

export default DetailHistory;
