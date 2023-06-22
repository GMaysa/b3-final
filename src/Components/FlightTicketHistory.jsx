import React, { useEffect, useState } from "react";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Detail from "../pages/DetailHistory";
import ModalSearch from "./ModalSearch";
import DateRangeFilter from "./DateRangeFilter";
import { useNavigate } from "react-router-dom";
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa";

const FlightTicketHistory = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDetailId, setSelectedDetailId] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleSearchClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleClickDetail = (id) => {
    if (isMobile) {
      navigate("/detail");
    } else {
      setSelectedCardId(id);
    }
  };

  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

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

  // data
  const data = [
    {
      id: 1,
      status: "Issued",
      class: "Economy Class",
      from: "Jakarta",
      dateFrom: "5 Maret 2023",
      timeFrom: "19.10",
      range: "4h 0m",
      to: "Melbern",
      dateTo: "5 Maret 2023",
      timeTo: "20.10",
      code: "6723y2GHK",
      price: "9.850.000",
    },
    {
      id: 2,
      status: "Issued",
      class: "Economy Class",
      from: "Jakarta",
      dateFrom: "5 Maret 2023",
      timeFrom: "19.10",
      range: "4h 0m",
      to: "Melbern",
      dateTo: "5 Maret 2023",
      timeTo: "20.10",
      code: "6723y2GHK",
      price: "9.850.000",
    },
  ];

  return (
    <section className="pt-16 sm:pt-20 px-7 sm:px-20 sm:py-16 py-10 w-full mx-auto font-poppins">
      <h1 className="font-bold text-xl">Riwayat Pemesanan</h1>
      <div className="py-4 px-2 flex gap-5 items-center">
        <button className="flex gap-4 w-full h-9 rounded-lg items-center px-6 text-white bg-[#A06ECE] text-lg">
          <AiOutlineArrowLeft className="h-7" />
          Beranda
        </button>

        <button
          className="border border-[#A06ECE] hidden sm:flex gap-2 rounded-full w-28 h-8 justify-center items-center"
          onClick={handleFilterClick}
        >
          <BiFilterAlt className="text-gray-500" />
          Filter
        </button>

        {/* Filter Modal */}
        {showFilterModal && (
          <ModalSearch open={showFilterModal}>
            <div className="justify-end flex mx-auto">
              <button
                className="rounded-lg text-black hover:text-red-600 justify-between"
                onClick={() => setShowFilterModal(false)}
              >
                <AiOutlineClose className="h-6 scale-110" />
              </button>
            </div>
            <DateRangeFilter />
          </ModalSearch>
        )}

        <BiSearch
          className="h-8 w-8 text-[#A06ECE] font-bold"
          onClick={handleSearchClick}
        />

        {/* Search Modal */}
        <ModalSearch open={open}>
          <div className="flex gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center pl-4">
                <BiSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Masukkan Nomor Penerbangan"
                className="border border-gray-300 text-black placeholder:text-gray-500 placeholder:text-xs rounded-sm px-10 h-8 w-full"
              />
            </div>
            <button
              className="rounded-lg text-black hover:text-red-600"
              onClick={handleCloseModal}
            >
              <AiOutlineClose className="h-6 scale-110" />
            </button>
          </div>
          <div className="py-4">
            <hr className="w-full border border-gray-300" />
            <div className="flex justify-between py-5 gap-6">
              <h1 className="text-xs">Pencarian Terkini</h1>
              <p className="text-red-600 text-xs justify-items-end flex">
                Hapus
              </p>
            </div>
          </div>
        </ModalSearch>
      </div>
      <div className="justify-end flex mx-auto pt-7 pb-6 sm:pb-2">
        <button
          className="sm:hidden border border-[#A06ECE] flex gap-2 rounded-full w-24 h-8 justify-center items-center"
          onClick={handleFilterClick}
        >
          <BiFilterAlt className="text-gray-500" />
          Filter
        </button>
      </div>

      {data.map((item) => (
        <div
          className={`lg:flex ${isMobile ? "flex-col" : "gap-6"}`}
          key={item.id}
        >
          {/* card-left */}
          <div
            className={`border hover:border-[#A06ECE] shadow-sm p-4 py-4 rounded-lg h-full w-full ${
              isMobile ? "mb-7" : "mb-16"
            }`}
            onClick={() => handleClickDetail(item.id)}
          >
            <div className="flex justify-between gap-3 pb-8">
              <div>
                <button className="bg-[#73CA5C] text-white rounded-full px-3 py-1 text-sm">
                  {item.status}
                </button>
              </div>

              <div className="items-center flex gap-2">
                <button className="bg-black rounded-full p-1 h-1 items-center"></button>
                <p className="text-xs">{item.class}</p>
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
                  <h6 className="text-black font-bold">{item.from}</h6>
                  <p className="text-xs">{item.dateFrom}</p>
                  <p className="text-xs">{item.timeFrom}</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-items-center w-full">
                <p className="pb-1 text-xs">{item.range}</p>
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
                  <h6 className="text-black font-bold">{item.to}</h6>
                  <p className="text-xs">{item.dateTo}</p>
                  <p className="text-xs">{item.timeTo}</p>
                </div>
              </div>
            </div>
            <hr className="w-full border-1 border-gray-200" />
            <div className="flex flex-row justify-between gap-6 w-full py-5 px-3 items-center">
              <div className="flex flex-col">
                <p className="font-bold text-sm">Booking Code</p>
                <p className="text-xs">{item.code}</p>
              </div>

              <div className="font-bold text-[#4B1979] text-sm">
                IDR {item.price}
              </div>
            </div>
            <div className="justify-end flex mx-auto pt-7 pb-6 sm:pb-2 text-white">
              <button className="flex gap-1 rounded-full w-20 h-7 text-xs justify-center items-center bg-[#A06ECE]">
                more
                <AiOutlineArrowRight className="" />
              </button>
            </div>
          </div>

          {/* card-right */}
          {selectedCardId === item.id && !isMobile && (
            <div className="lg:w-[80vw] lg:flex flex-col">
              <Detail />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FlightTicketHistory;
