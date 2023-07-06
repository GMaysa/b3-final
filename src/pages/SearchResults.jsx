import {
  BsBox,
  BsArrowLeftShort,
  BsCurrencyDollar,
  BsHeart,
} from "react-icons/bs";
import { MdSwapHoriz } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../Components/Accordion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAllFlightSearchResult } from "../redux/actions/searchFlightsActions";
import { thisDate } from "../Components/DateView";

function SearchResults() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchResults } = useSelector((state) => state.searchFlight);
  const [flightData, setFlightData] = useState({
    dep: null,
    arr: null,
  });

  const dataFromPrevPage = JSON.parse(
    localStorage.getItem("search_flight_data")
  );

  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleSubmit = (data) => {
    if (isLoggedIn == false) {
      return navigate("/login");
    }
    if (dataFromPrevPage.arrival) {
      if (flightData.dep == null) {
        setFlightData((prev) => ({ ...prev, dep: data }));
        dispatch(
          getAllFlightSearchResult(
            dataFromPrevPage.seat_class.toUpperCase(),
            dataFromPrevPage.arr_airport.iata,
            dataFromPrevPage.dep_airport.iata,
            thisDate(dataFromPrevPage.arr_flight_date),
            navigate
          )
        );
      } else if (flightData.arr == null) {
        setFlightData((prev) => ({ ...prev, arr: data }));
        localStorage.setItem(
          "flight_data",
          JSON.stringify({
            flight_data: { dep: flightData.dep, arr: data },
            user_data: dataFromPrevPage,
          })
        );
        navigate("/bio");
      }
    } else {
      localStorage.setItem(
        "flight_data",
        JSON.stringify({
          flight_data: { dep: data, arr: null },
          user_data: dataFromPrevPage,
        })
      );
      setFlightData((prev) => ({ ...prev, dep: data }));
      navigate("/bio");
    }
  };
  // console.log(searchResults)

  return (
    <div className="max-w-[968px] mx-auto">
      {/* HEADER */}
      <div className="w-full border-b-gray-200 border-b-[1.5px]">
        <div className="w-full pt-[130px]">
          <h1 className="font-semibold text-xl pb-6">Pilih Penerbangan</h1>
          <div className="py-2 pl-4">
            {/* Back To Landing - Bar */}
            <div className="w-full flex gap-3 mb-6">
              <div
                className="w-full bg-purple-800/60 px-2 text-white py-1 rounded-lg flex items-center leading-3 font-medium"
                onClick={() =>
                  dataFromPrevPage.arrival && flightData.dep !== null
                    ? dispatch(
                        getAllFlightSearchResult(
                          dataFromPrevPage?.seat_class.toUpperCase(),
                          dataFromPrevPage?.dep_airport.iata,
                          dataFromPrevPage?.arr_airport.iata,
                          thisDate(dataFromPrevPage?.arr_flight_date),
                          navigate
                        )
                      ) && setFlightData((prev) => ({ ...prev, dep: null }))
                    : navigate("/")
                }
              >
                <BsArrowLeftShort size={36} />
                &nbsp;{" "}
                {flightData.dep != null
                  ? dataFromPrevPage?.arr_airport?.iata
                  : dataFromPrevPage?.dep_airport?.iata}{" "}
                &gt;{" "}
                {flightData.dep != null
                  ? dataFromPrevPage?.dep_airport?.iata
                  : dataFromPrevPage?.arr_airport?.iata}
                {"-"} {dataFromPrevPage?.passengers?.count_passengers} Penumpang
                -{dataFromPrevPage?.seat_class}
              </div>
              <button className="flex items-center gap-2 border-[1.5px] border-purple-700 text-purple-700 rounded-lg px-4 py-2">
                <MdSwapHoriz className="rotate-90" size={20} /> Termurah
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full my-8">
        <div className="w-full flex gap-7">
          {/* Filter */}
          <div className="w-5/12 h-fit p-6 shadow-[0_0_4px_rgba(0,0,0,0.15)] rounded-[16px]">
            <h1 className=" mb-2 font-semibold">Filter</h1>
            <div className="text-neutral-500">
              <div className="flex items-center gap-2 py-4 border-b-[1.5px] border-b-gray-300">
                <BsBox size={24} /> Transit
              </div>
              <div className="flex items-center gap-2 py-4 border-b-[1.5px] border-b-gray-300">
                <BsHeart size={24} /> Fasilitas
              </div>
              <div className="flex items-center gap-2 py-4 border-b-[1.5px] border-b-gray-300">
                <BsCurrencyDollar size={24} /> Fasilitas
              </div>
            </div>
          </div>
          {/* Card's Content */}
          <div className="w-full flex flex-col gap-4">
            {/* Card */}
            {searchResults?.data?.length > 0 &&
              // searchResults?.map((data, id) => (
              searchResults?.data.map((data, id) => (
                <Accordion
                  data={data}
                  key={id}
                  onClick={() => handleSubmit(data)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
