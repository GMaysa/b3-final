import React from "react";
import img from "../assets/img.png";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate(`/edit`);
  };
  return (
    <section className="flex items-center justify-center justify-items-center p-6 sm:p-14 sm:pt-20  min-h-screen font-poppins gradient w-full mx-auto">
      <div className="bg-white rounded-2xl shadow-lg ">
        <div className="flex flex-col py-6">
          <div className="justify-center flex">
            <img src={img} className="w-1/2 " />
          </div>
          <div className="px-8 p-3 py-5">
            <div>
              <h1 className="border-b border-gray-300 font-bold">Full Name</h1>
              <span>Jojo</span>
            </div>
            <div className="pt-6">
              <h1 className="border-b border-gray-300 font-bold">Email</h1>
              <span>Jojo</span>
            </div>
            <div className="pt-6">
              <h1 className="border-b border-gray-300 font-bold">
                Phone Number
              </h1>
              <span>Jojo</span>
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
