import React, { useState } from "react";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import ModalSearch from "./ModalSearch";

const Notification = () => {
  const [open, setOpen] = useState(false);

  const handleSearchClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const notifications = [
    {
      id: 1,
      status: "Promosi",
      date: "20 Maret, 14:04",
      message: "Dapatkan Potongan 50% Tiket!",
      desk: "Syarat dan Ketentuan berlaku!",
      type: "promosi",
    },
    {
      id: 2,
      status: "Notifikasi",
      date: "5 Maret, 14:04",
      message:
        "Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!",
      desk: "",
      type: "notifikasi",
    },
  ];

  const [selectedType, setSelectedType] = useState("all");

  const handleFilterChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredNotifications =
    selectedType === "all"
      ? notifications
      : notifications.filter(
          (notification) => notification.type === selectedType
        );

  return (
    <section className="px-7 sm:px-20 sm:py-16 py-10 w-full mx-auto font-poppins">
      <h1 className="font-bold text-xl">Notifikasi</h1>
      <div className="py-4 px-2 flex gap-4 items-center ">
        <button className="flex gap-4 w-full h-9 rounded-lg items-center px-6 text-white bg-[#A06ECE] text-md">
          <AiOutlineArrowLeft className="h-7" />
          Beranda
        </button>
        <button className="">
          <select
            id="filter"
            value={selectedType}
            onChange={handleFilterChange}
            className="border border-[#A06ECE] hidden sm:flex gap-2  text-sm px-1 rounded-2xl w-28 h-8 justify-center items-center"
          >
            <BiFilterAlt className="text-gray-500" />
            <option value="all">Filter</option>
            <option value="promosi">Promosi</option>
            <option value="notifikasi">Notification</option>
          </select>
        </button>
        <BiSearch
          className="h-8 w-8 text-[#A06ECE] font-bold"
          onClick={handleSearchClick}
        />

        {/* Modal */}
        <ModalSearch open={open}>
          <div className="flex gap-4">
            <div class="relative">
              <div class="absolute inset-y-0 flex items-center pl-4">
                <BiSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Cari notifikasi"
                className="border border-gray-300 text-black placeholder:text-gray-500 placeholder:text-xs rounded-sm px-10 h-8 w-full"
              />
            </div>
            <button
              className=" rounded-lg text-black hover:text-red-600"
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

      <div className="justify-end flex mx-auto pt-3 pb-10 sm:pb-2 gap-2">
        <select
          id="filter"
          value={selectedType}
          onChange={handleFilterChange}
          className="sm:hidden border border-[#A06ECE] text-sm px-1 rounded-2xl w-28 h-8 justify-center items-center"
        >
          <option value="all">Filter</option>
          <option value="promosi">Promosi</option>
          <option value="notifikasi">Notification</option>
        </select>
      </div>

      {/* body */}
      {filteredNotifications.map((notification, i) => (
        <div className="flex gap-4 px-4 pb-9 w-full">
          <div className="pt-1 ">
            <button className="bg-[#A06ECE] rounded-full p-1">
              <IoMdNotifications className="text-white" />
            </button>
          </div>
          <div className="w-full mx-auto">
            <div className="flex" key={i}>
              <h6 className="text-gray-500 ">{notification.status}</h6>
              <p className="text-gray-500 justify-end flex gap-3 items-center text-sm w-full">
                {notification.date}
                <div
                  className={`rounded-full text-center justify-items-center p-1 h-1 items-center ${
                    notification.type === "promosi"
                      ? "bg-[#73CA5C]"
                      : notification.type === "notifikasi"
                      ? "bg-red-600"
                      : notification.type === "error"
                      ? "bg-red-100"
                      : ""
                  }`}
                ></div>
              </p>
            </div>
            <p className="text-base font-medium">{notification.message}</p>
            <p className="text-gray-500 text-sm"> {notification.desk}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Notification;
