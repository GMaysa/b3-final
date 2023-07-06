/** @format */

import React, { useState, useEffect } from "react";
import img from "../assets/img.png";
import { useNavigate } from "react-router-dom";
import { HiSave } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../redux/actions/profileActions";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickCancel = () => {
    navigate(`/profile`);
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const { profile } = useSelector((state) => state.profile);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = formatDateFromUserInput(birthDate);
    const updatedProfile = {
      ...profile,
      name: name,
      phone: phone,
      gender: gender,
      birthDate: formattedDate,
    };
    dispatch(editProfile(updatedProfile));
    navigate("/profile");
  };

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setPhone(profile.phone || "");
      setGender(profile.gender || "");
      setBirthDate(profile.birthDate || "");
      // profile.name && setName(profile.name);
      // profile.phone && setPhone(profile.phone);
      // profile.gender && setGender(profile.gender);
      // profile.birthDate && setBirthDate(profile.birthDate);
    }
  }, [profile]);

  function formatDateFromUserInput(dateString) {
    if (typeof dateString === "string") {
      const year = dateString.substring(0, 4);
      const month = dateString.substring(5, 7);
      const day = dateString.substring(8, 10);
      return `${year}-${month}-${day}`;
    }
    return "";
  }

  function formatDateForInput(dateString) {
    if (typeof dateString === "string") {
      const date = new Date(dateString);
      const year = date.getFullYear();
      let month = (date.getMonth() + 1).toString();
      let day = date.getDate().toString();
      month = month.length === 1 ? `0${month}` : month;
      day = day.length === 1 ? `0${day}` : day;
      return `${year}-${month}-${day}`;
    }
    return "";
  }

  return (
    <section className="flex items-center justify-center justify-items-center p-6 sm:p-14 sm:pt-20  min-h-screen font-poppins gradient w-full mx-auto">
      <div className="bg-white rounded-2xl shadow-lg">
        <div className="flex flex-col py-6">
          <div className="justify-center flex">
            <img src={img} className="w-1/2" />
          </div>

          <div className="px-8 p-3 py-5">
            <div className="flex flex-col">
              <h1 className="font-bold pb-4">Ubah Data Profile</h1>
              <button className="text-white bg-[#A06ECE] text-start px-4 rounded-t-md h-7">
                Data Diri
              </button>
              <form className="pl-4" onSubmit={handleSubmit}>
                <div className="my-4">
                  <label className="relative mb-2 font-medium text-[#4B1979]">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 text-sm rounded-sm w-full p-2.5"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="my-4">
                  <label className="mb-2 font-medium text-[#4B1979]">
                    Nomor Telepon
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 text-sm rounded-sm w-full p-2.5"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="my-4 flex flex-col">
                  <label className="mb-2 font-medium text-[#4B1979]">
                    Gender
                  </label>
                  <select
                    className="border border-gray-300 text-gray-900 text-sm rounded-sm w-full p-2.5"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="my-4">
                  <label className="mb-2 font-medium text-[#4B1979]">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    className="border border-gray-300 text-gray-900 text-sm rounded-sm w-full p-2.5"
                    value={formatDateForInput(birthDate)}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>

                <div className="mt-7 mb-3 text-center flex gap-4">
                  <button
                    className="bg-red-600 w-1/2 h-9 rounded-lg text-white hover:scale-110"
                    onClick={handleClickCancel}
                  >
                    <span className="flex gap-2 justify-center items-center">
                      <MdOutlineClose className="text-white h-6" /> Cancel
                    </span>
                  </button>
                  <button
                    className="bg-[#4B1979] w-1/2 rounded-lg text-white hover:scale-110"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={
                      profile?.name === name &&
                      profile?.phone === phone &&
                      profile?.gender === gender &&
                      profile?.birthDate === birthDate
                    }
                  >
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
