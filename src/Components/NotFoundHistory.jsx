import React, { useState } from "react";

import { BiFilterAlt, BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import img from "../assets/error.png";
import ModalSearch from "./ModalSearch";
import DateRangeFilter from "./DateRangeFilter";

const NotFoundHistory = () => {
  const [open, setOpen] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleSearchClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

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
        <button className="bg-[#7126B5] text-white w-64  p-2 rounded-lg hover:scale-110">
          Cari Penerbangan
        </button>
      </div>
    </section>
  );
};

export default NotFoundHistory;
