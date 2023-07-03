import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeFilter = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  };

  return (
    <div className="mx-auto px-4 py-5 ">
      <div className="justify-center">
        <div className="">
          <DateRange
            ranges={[dateRange]}
            onChange={handleSelect}
            rangeColors={["#3182ce"]}
            showSelectionPreview={false}
            editableDateInputs={false}
          />
        </div>
        <div className="justify-end flex mx-auto pt-5">
          <button className="bg-[#4B1979] text-sm py-2 px-6 rounded-xl text-white">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateRangeFilter;
