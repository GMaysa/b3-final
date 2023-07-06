/** @format */

import React, { useEffect, useState } from "react";
import { MdOutlineAirlineSeatReclineExtra, MdSwapHoriz } from "react-icons/md";
import {
  BiCalendar,
  BiSolidPlaneLand,
  BiSolidPlaneTakeOff,
} from "react-icons/bi";
import { FaBaby, FaChildDress, FaPerson } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAirport } from "../redux/actions/airportActions";
import ChoosePlan from "../Components/ChoosePlan";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";
import { DateRange } from "react-date-range";
import { printThisDate, thisDate } from "../Components/DateView";
import { useNavigate } from "react-router-dom";
import { getAllFlightSearchResult } from "../redux/actions/searchFlightsActions";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState({
    from: {
      airportId: 5941,
      city: "Jakarta",
      country: "ID",
      iata: "HLP",
      name: "Halim Perdanakusuma International Airport",
    },
    to: {
      airportId: 5793,
      iata: "DPS",
      name: "Ngurah Rai (Bali) International Airport",
      city: "Denpasar-Bali Island",
      country: "ID",
    },
  });
  const flight = {
    from: searchTerm.from.city,
    to: searchTerm.to.city,
  };
  const [searchResults, setSearchResults] = useState({ from: "", to: "" });
  const [showOptions, setShowOptions] = useState({
    from: false,
    to: false,
    date: false,
    passenger: false,
    seatClass: false,
  });
  const [datePick, setDatePick] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [passengers, setPassengers] = useState({
    adult: 2,
    child: 0,
    baby: 1,
  });
  const passengerCount = passengers.adult + passengers.child;
  const [seatClass, setSeatClass] = useState("Bussiness");

  const { airportData } = useSelector((state) => state.airportData);

  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSearchTerm((prev) => ({ ...prev, [name]: value }));
    const results = airportData?.data?.filter(
      (item) =>
        item.city.toLowerCase().includes(value.toLowerCase()) ||
        item.iata.toLowerCase().includes(value.toLowerCase())
    );
    // setInputChange((prev) => ({ ...prev, [name]: results }));
    setShowOptions((prev) => {
      const updatedOptions = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      return { ...updatedOptions, [name]: true };
    });
    setSearchResults((prev) => ({ ...prev, [name]: results }));
  };

  const handleSwap = () => {
    const updatedData = { ...searchTerm };
    const temp = updatedData.from;
    updatedData.from = updatedData.to;
    updatedData.to = temp;

    setSearchTerm(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      dep_airport: searchTerm.from,
      arr_airport: searchTerm.to,
      seat_class: seatClass,
      passengers: {
        passengers_detail: passengers,
        count_passengers: passengerCount,
      },
      dep_flight_date: datePick[0].startDate,
      arr_flight_date: datePick[0].endDate,
      arrival: false,
    });

    localStorage.setItem("search_flight_data", data);
    dispatch(
      getAllFlightSearchResult(
        seatClass.toUpperCase(),
        searchTerm.from.iata,
        searchTerm.to.iata,
        thisDate(datePick[0].startDate),
        navigate
      )
    );
  };

  function Home() {
    return (
      <div>
        {/* PURPLE TAPE */}
        <div className="mt-[148px] w-screen h-[150px] bg-gradient-to-r from-violet-800/50 to-violet-200 flex justify-center items-center">
          {/* DISCOUNT BANNER */}
          <div className="w-[1213px] h-[232px] rounded-[20px] bg-white relative overflow-hidden">
            {/* TITTLE BANNER */}
            <div className="w-full h-full flex flex-col absolute bg-gradient-to-r from-orange-100 to-orange-50/30 font-bold text-4xl italic pl-[63px] pt-[45px]">
              <h1 className="text-neutral-800 leading-snug drop-shadow-[0_35px_0_35px_rgba(0,0,0,0.25)]">
                Grab Your Tickets Now <br /> And
                <span className="text-purple-800"> Unlock Up to 85% OFF!</span>
              </h1>
            </div>
            {/* TITTLE IMAGE */}
            <div className="w-full h-full flex">
              {/* <div className="w-1/3" /> */}
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/3140205/pexels-photo-3140205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* CARD CHOOSE PLAN */}
        <div className="mx-auto max-w-[968px]">
          <ChoosePlan />
        </div>

        {/* Favorite Destination */}
        <div className="mt-6 mx-auto max-w-[968px]">
          <h2 className="font-semibold text-2xl mb-3">Favorite Destination</h2>
          {/* Selector Button */}
          <div className="flex mb-5 gap-4">
            {/* Map Button Here */}
            <button className="py-[14px] px-[24px] bg-purple-800 text-white font-semibold rounded-lg">
              Semua
            </button>
            <button className="py-[14px] px-[24px] bg-violet-300/50 text-purple-900 font-medium rounded-lg">
              Asia
            </button>
          </div>
          {/* Destination Cards */}
          <div className="flex gap-6 ">
            {/* Map Card Here */}
            <div className="w-[180px] h-[200px] p-2 shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-lg flex flex-col">
              {/* Image */}
              <div
                className="w-full h-full flex justify-end bg-cover bg-center rounded-md overflow-hidden"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/6974274/pexels-photo-6974274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}
              >
                {/* Tag */}
                <div className="h-fit bg-purple-700/50 text-white font-medium py-[4px] pl-[22px] pr-[10px] rounded-l-full text-[13px] mt-1">
                  Limited!
                </div>
              </div>
              <div className="w-full h-fit flex flex-col gap-[2px] mt-1">
                <h1 className="text-[14px] font-base">
                  Jakarta -&gt; Bangkok{" "}
                </h1>
                <p className="text-[10px] font-bold text-purple-700">AirAsia</p>
                <p className="text-[11px]">20 - 30 March 2023</p>
                <p className="text-[13px]">
                  Start From{" "}
                  <span className="text-red-500 font-semibold">
                    IDR 950.000
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[180px] h-[200px] p-2 shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-lg flex flex-col">
              {/* Image */}
              <div
                className="w-full h-full flex justify-end bg-cover bg-center rounded-md overflow-hidden"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/6974274/pexels-photo-6974274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}
              >
                {/* Tag */}
                <div className="h-fit bg-purple-700/50 text-white font-medium py-[4px] pl-[22px] pr-[10px] rounded-l-full text-[13px] mt-1">
                  Limited!
                </div>
              </div>
              <div className="w-full h-fit flex flex-col gap-[2px] mt-1">
                <h1 className="text-[14px] font-base">
                  Jakarta -&gt; Bangkok{" "}
                </h1>
                <p className="text-[10px] font-bold text-purple-700">AirAsia</p>
                <p className="text-[11px]">20 - 30 March 2023</p>
                <p className="text-[13px]">
                  Start From{" "}
                  <span className="text-red-500 font-semibold">
                    IDR 950.000
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
