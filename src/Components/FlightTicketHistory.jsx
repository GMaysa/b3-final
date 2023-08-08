/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import Detail from "../pages/DetailHistory";
import ModalSearch from "./ModalSearch";
import CardHistory from "./CardHistory";
import DateRangeFilter from "./DateRangeFilter";
import NotFoundHistory from "./NotFoundHistory";
import {
  getHistory,
  getHistoryDetail,
  getHistoryFilter,
  getHistorySearch,
} from "../redux/actions/historyActions";

const FlightTicketHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const [filteredHistory, setFilteredHistory] = useState([]);
  const [isDateValid, setIsDateValid] = useState(false);
  const [from_date, setFromDate] = useState(null);
  const [to_date, setToDate] = useState(null);

  const [isSearching, setIsSearching] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const [displayedHistory, setDisplayHistory] = useState([]);

  const { historys, historyFilter, historySearch, historyDetail } = useSelector(
    (state) => state.history
  );

  // Modal
  const handleSearchClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  // Detail
  const handleClickDetail = async (bookingCode) => {
    if (isMobile) {
      navigate(`/detail/${bookingCode}`);
    } else {
      if (selectedCardId === bookingCode) {
        setSelectedCardId(null);
      } else {
        setSelectedCardId(bookingCode);
        if (bookingCode) {
          dispatch(getHistoryDetail(bookingCode));
        }
      }
    }
  };

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

  // Handle Search
  const handleSearch = async () => {
    if (bookingCode.trim() === "") {
      return;
    }
    setIsSearching(true);
    dispatch(getHistorySearch(bookingCode));
    setOpen(false);
    setSearchHistory((prevHistory) => [...prevHistory, bookingCode]);
  };

  const handleSearchQueryKeyUp = async (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchQueryChange = (e) => {
    setBookingCode(e.target.value);
  };

  const handleClearSearchHistory = () => {
    setSearchHistory([]);
  };

  // Filtering Date Range
  const handleDateRangeChange = (from_date, to_date) => {
    setFromDate(from_date);
    setToDate(to_date);
  };

  const handleSaveFilter = () => {
    setIsDateValid(true);
    setShowFilterModal(false);
    dispatch(getHistoryFilter(from_date, to_date));
  };

  useEffect(() => {
    setFilteredHistory(historyFilter);
  }, [historyFilter]);

  // Set Logika Tampilan
  useEffect(() => {
    let displayedHistory = [];

    if (isSearching) {
      displayedHistory = historySearch;
    } else if (isDateValid) {
      displayedHistory = historyFilter;
    } else {
      if (historys.length > 0) {
        setBookingCode(historys[0].bookingCode);
        dispatch(getHistoryDetail(bookingCode));
      }

      displayedHistory = historys;
    }

    setDisplayHistory(displayedHistory);
  }, [isSearching, historySearch, historyFilter, historys]);

  console.log(displayedHistory);
  return (
    <section className="pt-16 md:pt-20 px-7 md:px-20 md:py-16 py-10 w-full mx-auto font-poppins">
      <h1 className="font-bold text-xl px-2">Riwayat Pemesanan</h1>
      <div className="py-4 px-2 flex gap-5 items-center">
        <button
          className="flex gap-4 w-full h-9 rounded-lg items-center px-6 text-white bg-[#A06ECE] text-lg"
          onClick={() => navigate("/")}
        >
          <AiOutlineArrowLeft className="h-7" />
          Beranda
        </button>

        <button
          className="border border-[#A06ECE] hidden md:flex gap-2 rounded-full w-28 h-8 justify-center items-center"
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
            <DateRangeFilter onChange={handleDateRangeChange} />
            <button
              className="bg-[#4B1979] text-sm py-2 px-6 rounded-xl text-white"
              onClick={handleSaveFilter}
            >
              Simpan
            </button>
          </ModalSearch>
        )}

        {/* Search  */}
        <BiSearch
          className="h-8 w-8 text-[#A06ECE] font-bold"
          onClick={handleSearchClick}
        />
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
                value={bookingCode}
                onChange={handleSearchQueryChange}
                onKeyUp={handleSearchQueryKeyUp}
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
                <button
                  className="underline focus:outline-none"
                  onClick={handleClearSearchHistory}
                >
                  Hapus
                </button>
              </p>
            </div>

            {searchHistory.map((query, index) => (
              <p
                key={index}
                className="text-xs border-b-2 border-gray-400 py-2"
              >
                {query}
              </p>
            ))}
          </div>
        </ModalSearch>
      </div>
      <div className="justify-end flex mx-auto pt-7 pb-6 md:pb-2">
        <button
          className="md:hidden border border-[#A06ECE] flex gap-2 rounded-full w-24 h-8 justify-center items-center"
          onClick={handleFilterClick}
        >
          <BiFilterAlt className="text-gray-500" />
          Filter
        </button>
      </div>

      {isDateValid && displayedHistory.length === 0 ? (
        <NotFoundHistory />
      ) : (
        <div className="flex gap-5 w-full mx-auto">
          {/* Left Card */}
          <div className="w-full lg:w-1/2">
            {displayedHistory.map((history, id) => (
              <CardHistory
                onClick={() =>
                  handleClickDetail(
                    history.bookingCode || history.booking.bookingCode
                  )
                }
                key={id}
                bookingCode={history.bookingCode || history.booking.bookingCode}
                status={history?.status || history?.status?.name}
                departureAirport={
                  history.depCity ||
                  history.booking.departFlight.departureAirport.city
                }
                departureDate={
                  history.depDepDate ||
                  history.booking.departFlight.departureDate
                }
                arrivalAirport={
                  // history.arrCity ||
                  historyDetail?.booking?.departFlight?.arrivalAirport?.city
                }
                arrivalDate={
                  history.depArrDate || history.booking.departFlight.arrivalDate
                }
                roundTrip={history.roundTrip || history?.booking?.roundTrip}
                totalPrice={history.totalPrice || history.booking.totalPrice}
              />
            ))}
          </div>

          {/* right card */}
          <div
            className={`rounded shadow w-1/2 justify-center flex ${
              isMobile ? "hidden" : ""
            }`}
          >
            {!isMobile && (
              <div className="lg:flex flex-col w-full">
                {selectedCardId ? (
                  <Detail bookingCode={selectedCardId} />
                ) : displayedHistory.length > 0 ? (
                  <Detail bookingCode={displayedHistory[0]?.bookingCode} />
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FlightTicketHistory;
