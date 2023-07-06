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
      <div className="mx-auto max-w-[968px] rounded-xl bg-white shadow-[0_0_8px_rgba(0,0,0,0.15)] relative top-[-10px] border-[1.5px] border-[#dedede]">
        <p className="px-[34px] pt-[24px] font-medium  text-xl text-neutral-800">
          Choose a special flight schedule on
          <span className="text-purple-800 font-bold italic"> FlyPal</span>
        </p>

        {/* FORM */}
        <form className="px-[34px] pb-[24px] mt-6 flex flex-col gap-8">
          {/* CHOOSE THE CITY */}
          <div className="w-full flex items-center font-medium text-xl text-[#8a8a8a]">
            {/* FROM */}
            <div
              className={`w-full flex gap-5 ${showOptions.from && "relative"}`}
            >
              <div className="flex gap-[8px] items-center">
                <BiSolidPlaneTakeOff size={24} />
                <p className="text-base">From</p>
              </div>
              <div className="w-full">
                <input
                  name="from"
                  type="text"
                  value={flight.from}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full bg-white text-lg border-b-2 py-2 text-neutral-700 outline-none"
                />
                <div className="w-full absolute top-12 text-lg">
                  {showOptions.from && searchResults.from.length > 0 && (
                    <div className="w-9/12 bg-white shadow-md">
                      {searchResults?.from.slice(0, 3).map((data, id) => (
                        <div
                          className="w-full px-2 py-1 z-40 cursor-pointer hover:bg-violet-300 hover:text-white"
                          key={id}
                          onClick={() => {
                            // console.log(data);
                            setSearchTerm((prev) => ({
                              ...prev,
                              from: data,
                            }));
                            setShowOptions((prev) => ({
                              ...prev,
                              from: false,
                            }));
                          }}
                        >
                          {data.city + " (" + data.iata + ")"}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* SWAP BUTTON */}
            <div
              onClick={handleSwap}
              className="mx-8 text-2xl cursor-pointer text-white p-1 rounded-lg duration-300 bg-violet-800 hover:bg-violet-800"
            >
              <MdSwapHoriz />
            </div>
            {/* TO */}
            <div
              className={`w-full flex gap-10 ${showOptions.to && "relative"}`}
            >
              <div className="flex gap-[8px] items-center">
                <BiSolidPlaneLand size={24} />
                <p className="text-base">To</p>
              </div>
              <div className="w-full">
                <input
                  name="to"
                  type="text"
                  value={flight.to}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full bg-white text-lg border-b-2 py-2 text-neutral-700 outline-none"
                />
                <div className="w-full absolute top-12 text-lg">
                  {showOptions.to && searchResults.to.length > 0 && (
                    <div className="w-9/12 bg-white shadow-md">
                      {searchResults?.to.slice(0, 3).map((data, id) => (
                        <div
                          className="w-full px-2 py-1 cursor-pointer hover:bg-violet-300 hover:text-white"
                          key={id}
                          onClick={() => {
                            setSearchTerm((prev) => ({
                              ...prev,
                              to: data,
                            }));
                            setShowOptions((prev) => ({
                              ...prev,
                              to: false,
                            }));
                          }}
                        >
                          {data.city + " (" + data.iata + ")"}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* DATE & PASSENGER PLAN */}
          <div className="w-full flex items-cente gap-24">
            {/* Date */}
            <div className="w-full flex items-center gap-6">
              <h3 className="flex gap-2 text-[#8a8a8a] text-base font-medium">
                <BiCalendar size={24} />
                Date
              </h3>
              <div className="flex gap-6">
                {/* Departure */}
                <div
                  className={`w-full h-full font-medium text-[#8a8a8a] flex flex-col justify-between ${
                    showOptions.date && "relative"
                  }`}
                >
                  <p className="h-full flex items-center">Departure</p>
                  <div className="w-full flex border-b-2 py-2 outline-none">
                    <input
                      type="text"
                      value={printThisDate(datePick[0].startDate)}
                      readOnly
                      onClick={() =>
                        setShowOptions((prev) => {
                          const updatedOptions = Object.keys(prev).reduce(
                            (acc, key) => {
                              acc[key] = false;
                              return acc;
                            },
                            {}
                          );
                          return { ...updatedOptions, date: !showOptions.date };
                        })
                      }
                      className="w-full text-neutral-700 outline-none"
                    />
                  </div>
                  {showOptions.date && (
                    <DateRange
                      showDateDisplay={false}
                      editableDateInputs={true}
                      onChange={(item) => setDatePick([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={datePick}
                      rangeColors={["#8b5cf6"]}
                      className="absolute shadow-[0_0_8px_rgba(0,0,0,0.15)] top-[67px] dayToday"
                    />
                  )}
                </div>
                {/* Return */}
                <div className="w-full font-medium text-[#8a8a8a]">
                  <p className="flex justify-between items-center">Arrival</p>
                  <div className="w-full flex border-b-2 py-2 outline-none">
                    <input
                      type="text"
                      value={printThisDate(datePick[0].endDate)}
                      onClick={() =>
                        setShowOptions((prev) => {
                          const updatedOptions = Object.keys(prev).reduce(
                            (acc, key) => {
                              acc[key] = false;
                              return acc;
                            },
                            {}
                          );
                          return { ...updatedOptions, date: !showOptions.date };
                        })
                      }
                      readOnly
                      className="w-full text-neutral-700 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Passengers & Seat Class */}
            <div className="w-full flex gap-6">
              <h3 className="flex items-center text-[#808080] font-medium gap-2">
                <MdOutlineAirlineSeatReclineExtra size={24} />
                Seat
              </h3>
              {/* Passengers */}
              <div
                className={`w-full h-full font-medium text-[#8a8a8a] flex flex-col justify-between ${
                  showOptions.passenger && "relative"
                }`}
              >
                <p className="h-full flex items-center">Passengers</p>
                <div className="w-full flex border-b-2 py-2 outline-none">
                  <input
                    input="text"
                    value={`${passengerCount} Penumpang`}
                    className="w-full text-neutral-700 outline-none"
                    onClick={() =>
                      setShowOptions((prev) => {
                        const updatedOptions = Object.keys(prev).reduce(
                          (acc, key) => {
                            acc[key] = false;
                            return acc;
                          },
                          {}
                        );
                        return {
                          ...updatedOptions,
                          passenger: !showOptions.passenger,
                        };
                      })
                    }
                    readOnly
                  />
                </div>
                {showOptions.passenger && (
                  <ul className="w-[320px] absolute shadow-[0_0_8px_rgba(0,0,0,0.15)] top-[67px] pt-4 bg-white">
                    <li className="w-full flex items-center justify-between bg-white py-2 px-4 text-neutral-700">
                      <div className="flex items-center">
                        <FaPerson size={20} className="mr-2" />{" "}
                        <div>
                          <h4 className="text-sm ">Dewasa</h4>
                          <p className="text-xs">&#40;12 tahun keatas&#41;</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" text-lg text-violet-700 border-[1.5px] border-violet-700 rounded-md px-2.5"
                          onClick={(e) => {
                            e.preventDefault();
                            passengers.adult !== 0 &&
                              setPassengers((prev) => ({
                                ...prev,
                                adult: parseInt(passengers.adult) - 1,
                              }));
                          }}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={passengers.adult}
                          onChange={(e) => {
                            e.preventDefault();
                            const value = parseInt(
                              e.target.value,
                              10
                            ).toString();
                            setPassengers((prev) => ({
                              ...prev,
                              adult: isNaN(value) ? 0 : value,
                            }));
                          }}
                          onBlur={() => {
                            if (passengers.adult === "") {
                              setPassengers((prev) => ({ ...prev, adult: 0 }));
                            }
                          }}
                          className="w-12 text-center text-sm rounded-md py-1.5 px-[10px] border-[1.5px] border-neutral-400"
                        />
                        <button
                          className=" text-lg text-violet-700 border-[1.5px] border-violet-700 rounded-md px-2.5"
                          onClick={(e) => {
                            e.preventDefault();
                            setPassengers((prev) => ({
                              ...prev,
                              adult: parseInt(passengers.adult) + 1,
                            }));
                          }}
                        >
                          +
                        </button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between bg-white py-2 px-4 text-neutral-700">
                      <div className="flex items-center">
                        <FaChildDress size={20} className="mr-2" />{" "}
                        <div>
                          <h4 className="text-sm">Anak</h4>
                          <p className="text-xs">&#40;2-11 tahun&#41;</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" text-lg text-violet-700 border-[1.5px] border-violet-700 rounded-md px-2.5"
                          onClick={(e) => {
                            e.preventDefault();
                            passengers.child !== 0 &&
                              setPassengers((prev) => ({
                                ...prev,
                                child: parseInt(passengers.child) - 1,
                              }));
                          }}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={passengers.child}
                          onChange={(e) => {
                            e.preventDefault();
                            const value = parseInt(
                              e.target.value,
                              10
                            ).toString();
                            setPassengers((prev) => ({
                              ...prev,
                              child: isNaN(value) ? 0 : value,
                            }));
                          }}
                          onBlur={() => {
                            if (passengers.child === "") {
                              setPassengers((prev) => ({ ...prev, child: 0 }));
                            }
                          }}
                          className="w-12 text-center text-sm rounded-md py-1.5 px-[10px] border-[1.5px] border-neutral-400"
                        />
                        <button
                          className=" text-lg text-violet-700 border-[1.5px] border-violet-700 rounded-md px-2.5"
                          onClick={(e) => {
                            e.preventDefault();
                            setPassengers((prev) => ({
                              ...prev,
                              child: parseInt(passengers.child) + 1,
                            }));
                          }}
                        >
                          +
                        </button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between bg-white py-2 px-4 text-neutral-700">
                      <div className="flex items-center">
                        <FaBaby size={20} className="mr-2" />{" "}
                        <div>
                          <h4 className="text-sm">Bayi</h4>
                          <p className="text-xs">&#40;Dibawah 2 tahun&#41;</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className=" text-lg text-violet-700 border-[1.5px] border-violet-700 rounded-md px-2.5"
                          onClick={(e) => {
                            e.preventDefault();
                            passengers.baby !== 0 &&
                              setPassengers((prev) => ({
                                ...prev,
                                baby: parseInt(passengers.baby) - 1,
                              }));
                          }}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={passengers.baby}
                          onChange={(e) => {
                            e.preventDefault();
                            const value = parseInt(
                              e.target.value,
                              10
                            ).toString();
                            setPassengers((prev) => ({
                              ...prev,
                              baby: isNaN(value) ? 0 : value,
                            }));
                          }}
                          onBlur={() => {
                            if (passengers.baby === "") {
                              setPassengers((prev) => ({ ...prev, baby: 0 }));
                            }
                          }}
                          className="w-12 text-center text-sm rounded-md py-1.5 px-[10px] border-[1.5px] border-neutral-400"
                        />
                        <button
                          className=" text-lg text-violet-700 border-[1.5px] border-violet-700 rounded-md px-2.5"
                          onClick={(e) => {
                            e.preventDefault();
                            setPassengers((prev) => ({
                              ...prev,
                              baby: parseInt(passengers.baby) + 1,
                            }));
                          }}
                        >
                          +
                        </button>
                      </div>
                    </li>
                    <li className="flex justify-end">
                      <button
                        className="bg-purple-800 text-white py-2 px-4 rounded-md mr-4 mt-2 mb-3"
                        onClick={() =>
                          setShowOptions((prev) => ({
                            ...prev,
                            passenger: false,
                          }))
                        }
                      >
                        Simpan
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <div
                className={`w-full h-full font-medium text-[#8a8a8a] flex flex-col justify-between ${
                  showOptions.seatClass && "relative"
                }`}
              >
                <p className="h-full flex items-center">Seat Class</p>
                <div className="w-full flex border-b-2 py-2 outline-none">
                  <input
                    input="text"
                    value={seatClass}
                    className="w-full text-neutral-700 outline-none"
                    onClick={() =>
                      setShowOptions((prev) => {
                        const updatedOptions = Object.keys(prev).reduce(
                          (acc, key) => {
                            acc[key] = false;
                            return acc;
                          },
                          {}
                        );
                        return {
                          ...updatedOptions,
                          seatClass: !showOptions.seatClass,
                        };
                      })
                    }
                    readOnly
                  />
                </div>
                {showOptions.seatClass && (
                  <ul className="w-[200px] absolute shadow-[0_0_8px_rgba(0,0,0,0.15)] top-[67px] right-0 pt-4 bg-white">
                    <li
                      className={`w-full flex items-center justify-between py-2 px-4 ${
                        seatClass === "Economy"
                          ? "Qbg-violet-300 text-white"
                          : "bg-white text-neutral-700"
                      } hover:bg-violet-300 hover:text-white`}
                      onClick={() => setSeatClass("Economy")}
                    >
                      Economy
                    </li>
                    <li
                      className={`flex items-center justify-between bg-white py-2 px-4 ${
                        seatClass === "Premium Economy"
                          ? "!bg-violet-300 text-white"
                          : "text-neutral-700"
                      } hover:bg-violet-300 hover:text-white`}
                      onClick={() => setSeatClass("Premium Economy")}
                    >
                      Premium Economy
                    </li>
                    <li
                      className={`flex items-center justify-between bg-white py-2 px-4 ${
                        seatClass === "Bussiness"
                          ? "!bg-violet-300 text-white"
                          : "text-neutral-700"
                      } hover:bg-violet-300 hover:text-white`}
                      onClick={() => setSeatClass("Bussiness")}
                    >
                      Bussiness
                    </li>
                    <li
                      className={`flex items-center justify-between bg-white py-2 px-4 ${
                        seatClass === "FirstClass"
                          ? "!bg-violet-300 text-white"
                          : "text-neutral-700"
                      } hover:bg-violet-300 hover:text-white`}
                      onClick={() => setSeatClass("FirstClass")}
                    >
                      First Class
                    </li>
                    <li className="flex justify-end">
                      <button
                        className="bg-purple-800 text-white py-2 px-4 rounded-md mr-4 mt-2 mb-3"
                        onClick={() =>
                          setShowOptions((prev) => ({
                            ...prev,
                            seatClass: false,
                          }))
                        }
                      >
                        Simpan
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </form>
        <button
          className="w-full flex justify-center py-3 rounded-b-xl bg-purple-800 font-bold text-white"
          onClick={handleSubmit}
        >
          Cari Penerbangan
        </button>
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
              <h1 className="text-[14px] font-base">Jakarta -&gt; Bangkok </h1>
              <p className="text-[10px] font-bold text-purple-700">AirAsia</p>
              <p className="text-[11px]">20 - 30 March 2023</p>
              <p className="text-[13px]">
                Start From{" "}
                <span className="text-red-500 font-semibold">IDR 950.000</span>
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
              <h1 className="text-[14px] font-base">Jakarta -&gt; Bangkok </h1>
              <p className="text-[10px] font-bold text-purple-700">AirAsia</p>
              <p className="text-[11px]">20 - 30 March 2023</p>
              <p className="text-[13px]">
                Start From{" "}
                <span className="text-red-500 font-semibold">IDR 950.000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
