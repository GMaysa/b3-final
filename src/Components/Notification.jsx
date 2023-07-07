/** @format */

import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModalSearch from "./ModalSearch";
import {
  getNotif,
  getFilter,
  updateStatus,
} from "../redux/actions/notifActions";

const Notification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [updatedNotifications, setUpdatedNotifications] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const { notifs, filter, status } = useSelector((state) => state.notif);

  // Modal Search
  const handleSearchClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSearchResults([]);
  };

  // Filtering
  const notifications = selectedType === "all" ? notifs : filter;
  useEffect(() => {
    dispatch(getNotif());
  }, [dispatch]);

  const handleFilterChange = (event) => {
    setSelectedType(event.target.value);
    dispatch(getFilter(event.target.value));
  };

  // Searching
  const displayedNotifications = isSearching
    ? searchResults
    : notifications &&
      updatedNotifications
        .filter(
          (notif) =>
            selectedType === "all" ||
            notif.categoryName.toLowerCase() === selectedType.toLowerCase()
        )
        .filter(
          (notif) =>
            notif.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            notif.content.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const handleSearch = () => {
    const results = notifications.filter(
      (notif) =>
        notif.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notif.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    handleCloseModal();
    setSearchHistory((prevHistory) => [searchQuery, ...prevHistory]);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //  Jika dienter muncul hasil search
  const handleSearchQueryKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Delete history Search
  const handleClearSearchHistory = () => {
    setSearchHistory([]);
  };

  // Status Change
  const handleStatusChange = async (notificationId) => {
    try {
      const updatedNotifs = updatedNotifications.map((notif) =>
        notif.notificationId === notificationId
          ? { ...notif, read: true }
          : notif
      );
      setUpdatedNotifications(updatedNotifs);
      dispatch(updateStatus(notificationId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUpdatedNotifications(notifs);
  }, [notifs]);

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
    <section className="px-7 md:px-20 md:py-16 py-10 w-full mx-auto font-poppins">
      <h1 className="font-bold text-xl px-2">Notifikasi</h1>
      <div className="py-4 px-2 flex gap-4 items-center pb-8">
        <button
          className="flex gap-4 w-full h-9 rounded-lg items-center px-6 text-white bg-[#A06ECE] text-md"
          onClick={() => navigate("/")}
        >
          <AiOutlineArrowLeft className="h-7" />
          Beranda
        </button>
        <button>
          <select
            id="filter"
            value={selectedType}
            onChange={handleFilterChange}
            className="border border-[#A06ECE] hidden md:flex gap-2  text-sm px-1 rounded-2xl w-28 h-8 justify-center items-center"
          >
            <option value="all">Filter</option>
            <option value="Promo">Promosi</option>
            <option value="Info">Information</option>
          </select>
        </button>

        <BiSearch
          className="h-8 w-8 text-[#A06ECE] font-bold"
          onClick={handleSearchClick}
        />

        {/* Modal */}
        <ModalSearch open={open}>
          <div className="flex gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center pl-4">
                <BiSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Cari notifikasi"
                className="border border-gray-300 text-black placeholder:text-gray-500 placeholder:text-xs rounded-sm px-10 h-8 w-full"
                value={searchQuery}
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
                  onClick={handleClearSearchHistory}
                  className="underline focus:outline-none"
                >
                  Hapus
                </button>
              </p>
            </div>
            {searchHistory.map((query) => (
              <p
                key={query}
                className="text-xs border-b-2 border-gray-400 py-2"
              >
                {query}
              </p>
            ))}
          </div>
        </ModalSearch>
      </div>

      {/* filter mobile */}
      <div className="justify-end flex mx-auto pt-3 pb-10 md:pb-2 gap-2">
        <select
          id="filter"
          value={selectedType}
          onChange={handleFilterChange}
          className="md:hidden border border-[#A06ECE] text-sm px-1 rounded-2xl w-28 h-9 justify-center items-center"
        >
          <option value="all">Filter</option>
          <option value="Promo">Promo</option>
          <option value="Info">Information</option>
        </select>
      </div>

      {/* body */}
      {displayedNotifications.map((notif) => (
        <div className="flex gap-4 px-4 pb-9 w-full" key={notif.notificationId}>
          <div className="pt-1">
            <button
              className="bg-[#A06ECE] rounded-full p-1"
              style={{
                backgroundColor: notif.read ? "#73CA5C" : "red",
              }}
              onClick={() => {
                if (!notif.read) {
                  handleStatusChange(notif.notificationId);
                }
              }}
            >
              <IoMdNotifications className="text-white" />
            </button>
          </div>
          <div className="w-full mx-auto">
            <div className="flex">
              <h6 className="text-gray-500">{notif.categoryName}</h6>
              <p className="text-gray-500 justify-end flex gap-3 items-center text-sm w-full">
                {formatDate(notif.createdAt)}
                <span
                  className={`rounded-full text-center justify-items-center p-1 h-1 items-center ${
                    notif.read ? "bg-[#73CA5C]" : "bg-red-600"
                  }`}
                  onClick={() => {
                    if (!notif.read) {
                      handleStatusChange(notif.notificationId);
                    }
                  }}
                ></span>
              </p>
            </div>
            <p className="text-base font-medium">{notif.title}</p>
            <p className="text-gray-500 text-sm"> {notif.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Notification;
