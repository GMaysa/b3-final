/** @format */

import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeFilter = ({ onChange, onClose }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);

    const from_date = ranges.selection.startDate.toISOString(); //format YYYY-MM-DD
    const to_date = ranges.selection.endDate.toISOString();
    onChange(from_date, to_date);
  };

  return (
    <div className="my-4">
      <div className="my-3">
        <DateRange
          ranges={dateRange}
          onChange={handleSelect}
          maxDate={new Date()}
          moveRangeOnFirstSelection={false}
          editableDateInputs={true}
          rangeColors={["#A06ECE"]}
        />
      </div>
    </div>
  );
};

export default DateRangeFilter;
