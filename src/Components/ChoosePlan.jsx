import React, { useEffect, useState } from "react";
import {
  BiCalendar,
  BiSolidPlaneLand,
  BiSolidPlaneTakeOff,
} from "react-icons/bi";
import { FaBaby, FaChildDress, FaPerson } from "react-icons/fa6";
import { MdOutlineAirlineSeatReclineExtra, MdSwapHoriz } from "react-icons/md";
import { DateRange } from "react-date-range";
import { getAirport } from "../redux/actions/airportActions";
import { printThisDate, thisDate } from "../Components/DateView";
import { getAllFlightSearchResult } from "../redux/actions/searchFlightsActions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";

function ChoosePlan() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { airportData } = useSelector((state) => state.airportData);

  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);

  // Input Handle & Memory
  const [searchMemory, setSearchMemory] = useState({
    from: {
      airportId: 5862,
      iata: "SUB",
      name: "Juanda International Airport",
      city: "Surabaya",
      country: "ID",
    },
    to: {
      airportId: 5793,
      iata: "DPS",
      name: "Ngurah Rai (Bali) International Airport",
      city: "Denpasar-Bali Island",
      country: "ID",
    },
  });
  // console.log(searchMemory);
  const [searchInput, setSearchInput] = useState({
    from: searchMemory.from.city,
    to: searchMemory.to.city,
  });
  const [searchResults, setSearchResults] = useState({ from: {}, to: {} });
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSearchInput((prev) => ({ ...prev, [name]: value }));
    const results = airportData?.data?.filter(
      (item) =>
        item.city.toLowerCase().includes(value.toLowerCase()) ||
        item.iata.toLowerCase().includes(value.toLowerCase())
    );

    setShowOptions((prev) => {
      const updatedOptions = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      return { ...updatedOptions, [name]: true };
    });
    // console.log(airportData);
    setSearchResults((prev) => ({ ...prev, [name]: results }));
  };

  // arrival
  const [arrival, setArrival] = useState(false);

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

  // console.log(datePick[0].startDate)
  const [passengers, setPassengers] = useState({
    adult: 2,
    child: 0,
    baby: 1,
  });
  const passengerCount = passengers.adult + passengers.child;
  const [seatClass, setSeatClass] = useState("Business");

  const handleSwap = () => {
    const updatedData = { ...searchInput };
    const temp = updatedData.from;
    updatedData.from = updatedData.to;
    updatedData.to = temp;

    setSearchInput(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      dep_airport: searchMemory.from,
      arr_airport: searchMemory.to,
      seat_class: seatClass,
      passengers: {
        passengers_detail: passengers,
        count_passengers: passengerCount,
      },
      dep_flight_date: datePick[0].startDate,
      arr_flight_date: arrival ? datePick[0].endDate : null,
      arrival: arrival,
    });

    localStorage.setItem("search_flight_data", data);

    dispatch(
      getAllFlightSearchResult(
        seatClass.toUpperCase(),
        searchMemory.from.iata,
        searchMemory.to.iata,
        thisDate(datePick[0].startDate),
        navigate
      )
    );
  };
  return (
    <div className="w-full rounded-xl bg-white shadow-[0_0_8px_rgba(0,0,0,0.15)] relative top-[-10px] border-[1.5px] border-[#dedede]">
      <p className="px-[34px] pt-[24px] font-medium text-base md:text-xl text-neutral-800">
        Choose a special flight schedule on
        <span className="text-purple-800 font-bold italic"> Tiketku</span>
      </p>

      {/* FORM */}
      <form className="px-[34px] pb-[24px] mt-4 md:mt-6 flex flex-col gap-8">
        {/* CHOOSE THE CITY */}
        <div className="w-full flex flex-col md:flex-row items-center font-medium text-xl text-[#8a8a8a]">
          {/* FROM */}
          <div
            className={`w-full flex flex-col md:flex-row gap-0 md:gap-5 ${
              showOptions.from && "relative"
            }`}
          >
            <div className="flex sm gap-[8px] items-center">
              <BiSolidPlaneTakeOff size={24} className="hidden lg:flex" />
              <p className=" text-sm md:text-base">From</p>
            </div>
            <div className="w-full">
              <input
                name="from"
                type="text"
                value={searchInput.from}
                onChange={handleInputChange}
                autoComplete="off"
                className="w-full bg-white text-base md:text-lg border-b-2 py-2 text-neutral-700 outline-none"
              />
              <div className="w-full absolute top-12 text-lg z-50">
                {showOptions.from && (
                  <div className="w-9/12 bg-white shadow-md">
                    {searchResults?.from?.slice(0, 3).map((data, id) => (
                      <div
                        className="w-full px-2 py-1 z-40 cursor-pointer hover:bg-violet-300 hover:text-white"
                        key={id}
                        onClick={() => {
                          // console.log(data);
                          setSearchMemory((prev) => ({
                            ...prev,
                            from: data,
                          }));
                          setSearchInput((prev) => ({
                            ...prev,
                            from: data.city,
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
            className="mx-8 mt-3 text-2xl cursor-pointer text-white p-1 rounded-lg duration-300 bg-violet-800 hover:bg-violet-800"
          >
            <MdSwapHoriz className=" rotate-90 md:rotate-0" />
          </div>
          {/* TO */}
          <div
            className={`w-full flex flex-col md:flex-row gap-0 md:gap-10 ${
              showOptions.to && "relative"
            }`}
          >
            <div className="flex gap-[8px] items-center">
              <BiSolidPlaneLand size={24} className="hidden lg:flex" />
              <p className=" text-sm md:text-base">To</p>
            </div>
            <div className="w-full">
              <input
                name="to"
                type="text"
                value={searchInput.to}
                onChange={handleInputChange}
                autoComplete="off"
                className="w-full bg-white text-base md:text-lg border-b-2 py-2 text-neutral-700 outline-none"
              />
              <div className="w-full absolute top-12 text-lg z-50">
                {showOptions.to && (
                  <div className="w-9/12 bg-white shadow-md">
                    {searchResults?.to?.slice(0, 3).map((data, id) => (
                      <div
                        className="w-full px-2 py-1 z-40 cursor-pointer hover:bg-violet-300 hover:text-white"
                        key={id}
                        onClick={() => {
                          // console.log(data);
                          setSearchMemory((prev) => ({
                            ...prev,
                            to: data,
                          }));
                          setSearchInput((prev) => ({
                            ...prev,
                            to: data.city,
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
        <div className="w-full flex flex-col md:flex-row items-cente gap-8 md:gap-24">
          {/* Date */}
          <div className="w-full flex flex-col md:flex-row items-left md:items-center gap-0 md:gap-6">
            <h3 className="hidden md:flex gap-2 text-[#8a8a8a] text-sm md:text-base font-medium">
              <BiCalendar size={24} className="hidden lg:flex" />
              Date
            </h3>
            <div className="w-full flex gap-6">
              {/* Departure */}
              <div
                className={`w-full h-full font-medium text-[#8a8a8a] flex flex-col justify-between ${
                  showOptions.date && "relative"
                }`}
              >
                <p className="h-full flex items-center text-base">Departure</p>
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
                    selectsStart
                    rangeColors={["#8b5cf6"]}
                    className="absolute shadow-[0_0_8px_rgba(0,0,0,0.15)] top-[67px] dayToday"
                  />
                )}
              </div>
              {/* Return */}
              <div className="w-full font-medium text-[#8a8a8a]">
                <label
                  className={`checkbox-container relative ${
                    !arrival && "text-neutral-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    name=""
                    onClick={() => setArrival(!arrival)}
                  />
                  <span
                    className={`checkmark ${!arrival && "!border-neutral-300"}`}
                  />{" "}
                  Arrival
                </label>
                <div className="w-full flex border-b-2 py-2 outline-none">
                  <input
                    type="text"
                    value={
                      arrival ? printThisDate(datePick[0].endDate) : "disabled"
                    }
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
                    disabled={!arrival}
                    readOnly
                    className={`w-full text-neutral-700 outline-none bg-white ${
                      !arrival && "!text-neutral-300"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Passengers & Seat Class */}
          <div className="w-full flex gap-6">
            <h3 className="hidden md:flex items-center text-[#808080] text-sm md:text-base font-medium gap-2">
              <MdOutlineAirlineSeatReclineExtra
                size={24}
                className="hidden lg:flex"
              />
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
                          const value = parseInt(e.target.value, 10).toString();
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
                          const value = parseInt(e.target.value, 10).toString();
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
                          const value = parseInt(e.target.value, 10).toString();
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
                      seatClass === "Business"
                        ? "!bg-violet-300 text-white"
                        : "text-neutral-700"
                    } hover:bg-violet-300 hover:text-white`}
                    onClick={() => setSeatClass("Business")}
                  >
                    Business
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
  );
}

export default ChoosePlan;
