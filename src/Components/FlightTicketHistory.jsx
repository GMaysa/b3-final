import React, { useEffect, useState } from "react";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa";
import Detail from "../pages/DetailHistory";
import ModalSearch from "./ModalSearch";
import DateRangeFilter from "./DateRangeFilter";
import NotFoundHistory from "./NotFoundHistory";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHistory, getHistoryDetail } from "../redux/actions/historyActions";

const FlightTicketHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { historys } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleSearchClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleClickDetail = async (bookingCode) => {
    if (isMobile) {
      navigate(`/detail/${bookingCode}`);
    } else {
      if (selectedCardId === bookingCode) {
        setSelectedCardId(null);
      } else {
        setSelectedCardId(bookingCode);
        dispatch(getHistoryDetail(bookingCode));
      }
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

      {historys.length > 0 ? (
        <div className="flex gap-5 w-full mx-auto">
          {/* left card */}
          <div className="w-full lg:w-1/2">
            {historys.map((history) => (
              <div
                className={`lg:flex ${isMobile ? "flex-col" : "gap-6"}`}
                key={history.transactionId}
              >
                <div
                  className={`border hover:border-[#A06ECE] shadow-sm p-2 sm:p-4 py-4 rounded-lg h-full w-full ${
                    isMobile ? "mb-7" : "mb-10"
                  }`}
                  onClick={() => handleClickDetail(history.bookingCode)}
                >
                  <div className="flex justify-between gap-3 pb-8 cursor-pointer">
                    <div>
                      <button
                        className={`rounded-full px-4 py-2 ${
                          history.statusId === 1
                            ? "bg-red-500 text-white"
                            : history.statusId === 2
                            ? "bg-gray-700 text-white"
                            : ""
                        }`}
                      >
                        {history.status}
                      </button>
                    </div>

                    <div className="items-center flex gap-2">
                      <button className="bg-black rounded-full p-1 h-1 items-center"></button>
                      <p className="text-xs">
                        {history.roundTrip ? "Round Trip" : "One Trip"}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex ${
                      isMobile ? "flex-row" : "flex-row"
                    } gap-3 pb-5 items-center`}
                  >
                    <div
                      className={`flex gap-2 ${
                        isMobile ? "mt-3" : "mx-auto"
                      } w-1/2`}
                    >
                      <div className="pt-4 p-1 flex ">
                        <FaPlaneDeparture className="h-4 text-gray-500" />
                      </div>
                      <div>
                        <h6 className="text-black font-bold text-sm sm:text-base">
                          {history.depCity}
                        </h6>
                        <p className="text-xs">
                          {new Date(
                            history.depDepDate * 1000
                          ).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </p>
                        <p className="text-xs">{history.depSeatClass}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-items-center w-full">
                      <p className="pb-1 text-xs">
                        {(() => {
                          const depDepDate = new Date(
                            history.depDepDate * 1000
                          );
                          const depArrDate = new Date(
                            history.depArrDate * 1000
                          );

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
                      className={`flex gap-2 ${
                        isMobile ? "mt-3" : "mx-auto"
                      } w-full`}
                    >
                      <div className="pt-4 p-1 flex">
                        <FaPlaneArrival className="h-4 text-gray-500" />
                      </div>
                      <div>
                        <h6 className="text-black font-bold text-xs sm:text-base">
                          {history.arrCity}
                        </h6>
                        <p className="text-xs">
                          {new Date(
                            history.depArrDate * 1000
                          ).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </p>
                        <p className="text-xs">{history.arrSeatClass}</p>
                      </div>
                    </div>
                  </div>
                  <hr className="w-full border-1 border-gray-200" />
                  <div className="flex flex-row justify-between gap-6 w-full pt-5 px-5 items-center">
                    <div className="flex flex-col">
                      <p className="font-bold text-sm">Booking Code</p>
                      <p className="text-xs">{history.bookingCode}</p>
                    </div>

                    <div className="font-bold text-[#4B1979] text-sm">
                      IDR {history.totalPrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* right card */}
          <div
            className={`rounded shadow w-1/2 justify-center flex ${
              isMobile ? "hidden" : ""
            }`}
          >
            {selectedCardId !== null && !isMobile ? (
              <div className="lg:flex flex-col w-full x">
                {historys ? (
                  <Detail bookingCode={selectedCardId} />
                ) : (
                  <p>Loading detail...</p>
                )}
              </div>
            ) : (
              <p className="flex items-center justify-center text-xs">
                Klik card untuk melihat detail
              </p>
            )}
          </div>
        </div>
      ) : (
        <NotFoundHistory />
      )}
    </section>
  );
};

export default FlightTicketHistory;
