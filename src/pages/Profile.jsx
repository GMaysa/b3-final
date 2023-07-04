/** @format */

import React, { useEffect } from "react";
import img from "../assets/img.png";
import { FaUser, FaPhone, FaTransgender } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions/profileActions";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleClickEdit = () => {
    navigate(`/edit`);
  };

  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  if (!profile) {
    return null;
  }

  return (
    <section className="flex items-center justify-center justify-items-center p-6 sm:p-14 sm:pt-20  min-h-screen font-poppins gradient w-full mx-auto">
      <div className="bg-white rounded-2xl shadow-lg ">
        <div className="flex flex-col py-6">
          <div className="justify-center flex">
            {/* <img src={profile?.image} className="w-1/2" /> */}
            <img src={img} className="w-1/2 " />
          </div>
          <div className="px-8 p-3 py-5">
            <div className="flex gap-3 items-center">
              <FaUser className="" />
              <div>
                <h1 className="font-bold border-b border-gray-300">
                  Full Name
                </h1>
                <span>{profile?.name}</span>
              </div>
            </div>

            <div className="pt-5 flex gap-3 items-center">
              <MdEmail />
              <div>
                <h1 className="border-b border-gray-300 font-bold">Email</h1>
                <span>{profile?.email}</span>
              </div>
            </div>

            <div className="pt-5 flex gap-3 items-center">
              <FaPhone />
              <div>
                <h1 className="border-b border-gray-300 font-bold">
                  Phone Number
                </h1>
                <span>{profile?.phone}</span>
              </div>
            </div>
            <div className="pt-5 flex gap-3 items-center">
              <FaTransgender />
              <div>
                <h1 className="border-b border-gray-300 font-bold">Gender</h1>
                <span>{profile?.gender}</span>
              </div>
            </div>

            <div className="pt-5  flex gap-3 items-center">
              <BsCalendarDateFill />
              <div>
                <h1 className="border-b border-gray-300 font-bold">
                  Birth Date
                </h1>
                <span>{formatDateFromTimestamp(profile?.birthDate)}</span>
              </div>
            </div>
            <div className="pt-6">
              <button
                className="bg-[#7126B5] text-white w-full h-10 rounded-lg hover:scale-110"
                onClick={handleClickEdit}
              >
                <span className="flex gap-3 justify-center items-center">
                  <FiEdit3 className="text-white h-6" /> Edit Profile
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
