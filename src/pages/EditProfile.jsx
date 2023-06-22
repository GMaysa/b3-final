import React from "react";
import img from "../assets/img.png";
import { useNavigate } from "react-router-dom";
import { HiSave } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const EditProfile = () => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate(`/profile`);
  };

  return (
    <section className="flex items-center justify-center justify-items-center p-6 sm:p-14 sm:pt-20  min-h-screen font-poppins gradient w-full mx-auto">
      <div className="bg-white rounded-2xl shadow-lg">
        <div className="flex flex-col py-6">
          <div className="justify-center flex">
            <img src={img} className="w-1/2 " />
          </div>

          <div className="px-8 p-3 py-5">
            {/* {isDetailVisible && ( */}
            <div className="flex flex-col">
              <h1 className="font-bold pb-4">Ubah Data Profile</h1>
              <button className="text-white bg-[#A06ECE] text-start px-4 rounded-t-md h-7">
                Data Diri
              </button>
              <form className="pl-4">
                {/* <div className="my-4 pt-2 flex bg-white">
                  <label className=" relative mb-2 font-medium text-[#4B1979]">
                    <input
                      type="text"
                      className="px-4 py-2 w-full placeholder:text-sm rounded-sm outline-none border border-gray-300 hover:border-gray-600 duration-200 peer focus:border-[#4B1979] bg-inherit"
                    />
                    <span className="absolute bg-white left-0 top-3 px-1 text-sm tracking-wide peer-focus:text-[#4B1979] pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 ml-2 peer-valid:-translate-y-5:">
                      Nama Lengkap
                    </span>
                  </label>
                </div> */}
                <div className="my-4">
                  <label
                    for="nama"
                    className=" relative mb-2 font-medium text-[#4B1979]"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 text-sm rounded-sm  w-full p-2.5 "
                  />
                </div>
                <div className="my-4">
                  <label className="mb-2 font-medium text-[#4B1979]">
                    Nomor Telepon
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 text-sm rounded-sm  w-full p-2.5 "
                  />
                </div>
                <div className="my4">
                  <label className="mb-2 font-medium text-[#4B1979]">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 text-sm rounded-sm  w-full p-2.5 "
                  />
                </div>
                <div className="mt-7 mb-3 text-center flex gap-4">
                  <button
                    className="bg-red-600 w-1/2 h-9 rounded-lg text-white hover:scale-110"
                    onClick={handleClickEdit}
                  >
                    <span className="flex gap-2 justify-center items-center">
                      <MdOutlineClose className="text-white h-6" /> Cancel
                    </span>
                  </button>
                  <button className="bg-[#4B1979] w-1/2 rounded-lg text-white hover:scale-110">
                    <span className="flex gap-2 justify-center items-center">
                      <HiSave className="text-white h-6" /> Simpan
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
