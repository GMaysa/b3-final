import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { PiSuitcaseRollingThin } from "react-icons/pi";

export default function Accordion({ data, onClick }) {
  const [isActive, setIsActive] = useState(false);

  const timeSpan = (depTime, arrTime) => {
    const date1 = new Date(arrTime * 1000);
    const date2 = new Date(depTime * 1000);

    let diffMilliseconds = Math.abs(date1 - date2);
    const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
    diffMilliseconds -= diffHours * (1000 * 60 * 60);
    const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));

    return diffHours + "h " + diffMinutes + "m";
  };

  const times = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return hours + ":" + minutes;
  };

  const handleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full shadow-[0_0_4px_rgba(0,0,0,0.15)] rounded-[8px] py-[10px] px-4 border-2 border-white hover:border-purple-700/60">
      {/* top */}
      <div className="flex items-center">
        <img src={data.airlineImage} alt={data.airlineIata} className="w-6" />
        <p className="w-full mx-2 text-xs">
          {data.airlineName} - {data.seatClassName}
        </p>
        <div
          className="p-1 border-[1px] border-neutral-200 rounded-full cursor-pointer"
          onClick={handleAccordion}
        >
          <FiChevronDown
            size={16}
            className={`transition-transform duration-300 transform ${
              isActive ? "rotate-[-180deg]" : "rotate-0"
            }`}
          />
        </div>
      </div>
      {/* time & price */}
      <div className="w-full flex gap-4 py-3">
        {/* time */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex justify-center items-center gap-4">
            <div className="flex gap-3">
              <div className="pr-[5px]">
                <p className="font-semibold text-sm">
                  {times(data.depDateTime)}
                </p>
                <p className="font-medium text-xs">{data.depAirportIata}</p>
              </div>
              <div className="min-w-[233px] flex flex-col items-center justify-center text-neutral-400 text-xs gap-1">
                <p>{timeSpan(data.depDateTime, data.arrDateTime)}</p>
                <hr className="w-full border-neutral-400 border-dashed" />
                <p>Direct</p>
              </div>
              <div className="pr-[5px]">
                <p className="font-semibold text-sm">
                  {times(data.arrDateTime)}
                </p>
                <p className="font-medium text-xs">{data.arrAirportIata}</p>
              </div>
            </div>
            <PiSuitcaseRollingThin size={24} />
          </div>
        </div>
        {/* price */}
        <div className="w-2/5 flex flex-col justify-center items-end gap-[6px]">
          <p className="font-bold text-purple-700">IDR {data.price.toLocaleString('id-ID')}</p>
          <button className="font-medium text-white px-8 py-1 bg-purple-800/95 rounded-lg" onClick={()=>onClick(data)}>
            Pilih
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? "h-full" : "hidden"
        }`}
      >
        <hr className=" border-neutral-500 mb-3" />
        {/* Description */}
        <div className=" px-4 py-[10px]">
          <h1 className=" text-sm text-violet-800 font-semibold mb-1">
            Detail Penerbangan
          </h1>
          {/* info dep */}
          <div className="w-full flex justify-between mb-4">
            {/* timetable */}
            <div>
              <h3 className="font-semibold">07:00</h3>
              <p>3 Maret 2023</p>
              <p className=" text-sm">Soekarno Hatta - Terminal 1A Domestik</p>
            </div>
            <p className=" text-xs text-violet-500 font-bold">Keberangkatan</p>
          </div>
          {/* list item */}
          <hr className=" w-2/3 mx-auto border-neutral-400" />
          <div className="w-full flex gap-2 py-2">
            <div className="flex items-center">
              <img src={data.airlineImage} alt="" className="w-6" />
            </div>
            {/* info */}
            <div className="w-full flex flex-col justify-between text-sm gap-4">
              <div className="font-semibold">
                <h3>Jet Air - Economy</h3>
                <h3>JT - 203</h3>
              </div>
              <div>
                <h3 className="font-semibold">Informasi:</h3>
                <p>Baggage 20kg</p>
                <p>Cabin baggage 7kg</p>
                <p>In Flight Entertainment</p>
              </div>
            </div>
          </div>
          <hr className=" w-2/3 mx-auto border-neutral-400" />
          {/* info arr */}
          <div className="w-full flex justify-between mt-4">
            {/* timetable */}
            <div>
              <h3 className="font-semibold">07:00</h3>
              <p>3 Maret 2023</p>
              <p className=" text-sm">Soekarno Hatta - Terminal 1A Domestik</p>
            </div>
            <p className=" text-xs text-violet-500 font-bold">Kedatangan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
