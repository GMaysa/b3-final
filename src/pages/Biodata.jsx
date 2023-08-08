import React, { useEffect, useState } from "react";
import Crown from "../assets/crown.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postBookingDetails } from "../redux/actions/bookingActions";

import { getSeatDetails, updateSeatStatus } from "../redux/actions/seatActions";

const Biodata = () => {
  const flightData = JSON.parse(localStorage.getItem("flight_data"));
  const indexnya = flightData.user_data.passengers.count_passengers;
  const dispatch = useDispatch();
  const [selectedSeats, setSelectedSeats] = useState({});
  const [selectedSeatsReturn, setSelectedSeatsReturn] = useState({});
  const [fullNameCos, setFullNameCos] = useState("");
  const [familyNameCos, setFamilyNameCos] = useState("");
  const [phoneCos, setPhoneCos] = useState("");
  const [emailCos, setEmailCos] = useState("");

  const [fullNamePasValues, setFullNamePasValues] = useState(
    Array.from({ length: indexnya }, () => "")
  );
  const [familyNamePasValues, setFamilyNamePasValues] = useState(
    Array.from({ length: indexnya }, () => "")
  );
  const [birthDatePasValues, setBirthDatePasValues] = useState(
    Array.from({ length: indexnya }, () => "")
  );
  const [nationalityPasValues, setNationalityPasValues] = useState(
    Array.from({ length: indexnya }, () => "")
  );
  const [issuingCountryPasValues, setIssuingCountryPasValues] = useState(
    Array.from({ length: indexnya }, () => "")
  );
  const [availableUntilPasValues, setAvailableUntilPasValues] = useState(
    Array.from({ length: indexnya }, () => "")
  );
  const [identityNumberPasValues, setIdentityNumberPasValues] = useState(
    Array.from({ length: indexnya }, () => "")
  );

  const bookingMessage = JSON.parse(localStorage.getItem("bookingMessage"));
  const maxSelectedSeats = flightData.user_data.passengers.count_passengers;
  const maxSelectedSeatsReturn =
    flightData.user_data.passengers.count_passengers;
  const [showFamilyName, setShowFamilyName] = useState(false);
  const navigate = useNavigate();
  const { seatDetails } = useSelector((state) => state.seat);
  const { seatDetailsTwo } = useSelector((state) => state.seat);
  // console.log(seatDetails);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [departSeatIds, setDepartSeatIds] = useState([]);
  const [returnSeatIds, setReturnSeatIds] = useState([]);

  const handleToggleSwitch = () => {
    setShowFamilyName(!showFamilyName);
  };

  const [selectedTitle, setSelectedTitle] = useState(
    Array(indexnya).fill("Pilih Title")
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    Array(indexnya).fill(false)
  );

  const handleToggleDropdown = (index) => {
    setIsDropdownOpen((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  const handleTitleSelect = (title, index) => {
    setSelectedTitle((prevState) => {
      const updatedTitles = [...prevState];
      updatedTitles[index] = title;
      return updatedTitles;
    });
    setIsDropdownOpen((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = false;
      return updatedState;
    });
  };

  const toggleSeatSelection = (seatId) => {
    const seatData = seatDetails.data.find((data) => data.seatId === seatId);
    if (!seatData || seatData.booked) return;

    const isSeatSelected = selectedSeats.hasOwnProperty(seatId);

    setSelectedSeats((prevSelectedSeats) => {
      if (isSeatSelected) {
        const updatedSelectedSeats = { ...prevSelectedSeats };
        delete updatedSelectedSeats[seatId];
        return updatedSelectedSeats;
      } else if (Object.keys(prevSelectedSeats).length < maxSelectedSeats) {
        let updatedSelectedSeats = { ...prevSelectedSeats };
        const seatNames = Object.values(prevSelectedSeats);
        let seatNameToAdd = null;

        for (let i = 1; i <= maxSelectedSeats; i++) {
          const seatName = `P${i}`;

          if (!seatNames.includes(seatName)) {
            seatNameToAdd = seatName;
            updatedSelectedSeats = {
              ...updatedSelectedSeats,
              [seatId]: seatName,
            };
            break;
          }
        }

        if (seatNameToAdd !== null) {
          return updatedSelectedSeats;
        }
      }
      return prevSelectedSeats;
    });

    setDepartSeatIds((prevDepartSeatIds) => {
      if (isSeatSelected) {
        return prevDepartSeatIds.filter((id) => id !== seatId);
      } else if (Object.keys(selectedSeats).length < maxSelectedSeats) {
        return [...prevDepartSeatIds, seatId];
      }
      return prevDepartSeatIds;
    });
  };
  const toggleSeatReturnSelection = (seatId) => {
    const seatData = seatDetailsTwo.data.find((data) => data.seatId === seatId);
    if (!seatData || seatData.booked) return;

    const isSeatSelectedReturn = selectedSeatsReturn.hasOwnProperty(seatId);

    setSelectedSeatsReturn((prevSelectedSeatsReturn) => {
      if (isSeatSelectedReturn) {
        const updatedSelectedSeatsReturn = { ...prevSelectedSeatsReturn };
        delete updatedSelectedSeatsReturn[seatId];
        return updatedSelectedSeatsReturn;
      } else if (
        Object.keys(prevSelectedSeatsReturn).length < maxSelectedSeatsReturn
      ) {
        let updatedSelectedSeatsReturn = { ...prevSelectedSeatsReturn };
        const seatNames = Object.values(prevSelectedSeatsReturn);
        let seatNameToAddReturn = null;

        for (let i = 1; i <= maxSelectedSeatsReturn; i++) {
          const seatName = `P${i}`;

          if (!seatNames.includes(seatName)) {
            seatNameToAddReturn = seatName;
            updatedSelectedSeatsReturn = {
              ...updatedSelectedSeatsReturn,
              [seatId]: seatName,
            };
            break;
          }
        }

        if (seatNameToAddReturn !== null) {
          return updatedSelectedSeatsReturn;
        }
      }
      return prevSelectedSeatsReturn;
    });

    setReturnSeatIds((prevReturnSeatIds) => {
      if (isSeatSelectedReturn) {
        return prevReturnSeatIds.filter((id) => id !== seatId);
      } else if (
        Object.keys(selectedSeatsReturn).length < maxSelectedSeatsReturn
      ) {
        return [...prevReturnSeatIds, seatId];
      }
      return prevReturnSeatIds;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Update seat status for selected seats
      if (flightData.flight_data.arr) {
        await Promise.all(
          returnSeatIds.map((seatId) =>
            dispatch(updateSeatStatus(seatId, true))
          )
        );
      } else {
        await Promise.all(
          departSeatIds.map(
            (seatId) => dispatch(updateSeatStatus(seatId, true)),
            returnSeatIds.map((seatId) =>
              dispatch(updateSeatStatus(seatId, true))
            )
          )
        );
      }

      const passengersData = fullNamePasValues.map((fullName, index) => ({
        fullName: fullName,
        familyName: familyNamePasValues[index],
        title: selectedTitle[index],
        birthDate: birthDatePasValues[index],
        nationality: nationalityPasValues[index],
        identityNumber: identityNumberPasValues[index],
        issuingCountry: issuingCountryPasValues[index],
        availableUntil: availableUntilPasValues[index],
      }));

      const data = {
        booking: {
          departFlightId: flightData.flight_data.dep.flightId,
          returnFlightId: flightData.flight_data.arr
            ? flightData.flight_data.arr.flightId
            : null,
          departClassId: flightData.flight_data.dep.seatClassId,
          returnClassId: flightData.flight_data.arr
            ? flightData.flight_data.arr.seatClassId
            : null,
          costumer: {
            fullName: fullNameCos,
            familyName: familyNameCos,
            phone: phoneCos,
            email: emailCos,
          },
          passengers: passengersData,
          departSeatIds: departSeatIds.map((seatId) => seatId),
          returnSeatIds: flightData.flight_data.arr
            ? returnSeatIds.map((seatId) => seatId)
            : [],
        },
        payment: null,
      };
      dispatch(postBookingDetails(data, navigate));
      // Dispatch action to send booking details to API
      // dispatch(postBookingDetails(data, navigate));
    } catch (error) {
      // Handle error
    }
  };
  // console.log(flightData.flight_data.dep.seatClassName);
  // console.log(flightData.flight_data.dep.flightCode);
  useEffect(() => {
    if (flightData.flight_data.arr) {
      dispatch(
        getSeatDetails(
          flightData.flight_data.dep.seatClassName,
          flightData.flight_data.dep.flightCode,
          true
        )
      );
      dispatch(
        getSeatDetails(
          flightData.flight_data.arr.seatClassName,
          flightData.flight_data.arr.flightCode,
          false
        )
      );
    } else {
      dispatch(
        getSeatDetails(
          flightData.flight_data.dep.seatClassName,
          flightData.flight_data.dep.flightCode
        )
      );
    }
  }, [dispatch]);
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(amount);
  };

  function unixToDateString(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const { booking } = useSelector((state) => state.book);
  const formatDate = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const day = date.getDate();
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatDateTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}${seconds}`;
  };

  const depDateTime = flightData.flight_data.dep.depDateTime;
  const arrDateTime = flightData.flight_data.dep.arrDateTime;

  const rows = ["A", "B", "C", "D", "E", "F"];

  // const seatDetailsTwo =

  return (
    <div>
      <div className="pt-[27px] sm:pt-[47px] pb-[20px] px-[50px] sm:px-[100px] xl:px-[260px] shadow-md">
        <div className="text-stage text-[16px] sm:text-[20px] flex gap-[8px]">
          <h1 className="font-bold">Isi Data Diri</h1>
          <h1 className="font-bold text-[#8A8A8A]">{">"}</h1>
          <h1 className="font-bold text-[#8A8A8A]">Bayar</h1>
          <h1 className="font-bold text-[#8A8A8A]">{">"}</h1>
          <h1 className="font-bold text-[#8A8A8A]">Selesai</h1>
        </div>
      </div>

      <div className="flex items-center w-full gap-[16px] pt-[25px] sm:pt-[30px] sm:w-full sm:justify-center sm:items-start xl:px-[285px] flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-auto px-[20px]">
          <div className="isi_data border-[1px] border-[#8A8A8A] px-[12px] sm:px-[16px] pt-[26px] pb-[42px] rounded-[4px] sm:w-[518px]">
            <div className="data_pemesanan text-[18px] sm:text-[20px]">
              <h1 className="font-bold">Isi Data Pemesanan</h1>
            </div>
            <div className="pt-[16px]">
              <div className="data_diri bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] sm:w-[486px] rounded-t-[10px]">
                <h1 className="font-medium text-[14px] sm:text-[16px]">
                  Data Diri Pemesan
                </h1>
              </div>
            </div>
            <div className="px-[16px]">
              <div className="pt-[16px]">
                <h1 className="text-[#4B1979] font-bold text-[12px] sm:text-[14px]">
                  Nama Lengkap<span className="text-red-700">*</span>
                </h1>
              </div>
              <div className="sm:w-[454px] pt-[4px]">
                <form className="text-[12px] sm:text-[14px] font-light rounded-[4px]">
                  <input
                    type="text"
                    value={booking?.costumer?.fullNameCos}
                    onChange={(e) => setFullNameCos(e.target.value)}
                    placeholder="Nama Lengkap"
                    className="outline-none bg-transparent rounded-[4px] border-gray-300"
                    style={{ width: "100%", maxWidth: "500px" }}
                  />
                </form>
              </div>

              <div>
                <div className="pt-[12px] flex justify-between">
                  <div>
                    <h1 className="font-light text-[12px] sm:text-[14px]">
                      Punya Nama Keluarga?
                    </h1>
                  </div>
                  <div>
                    <input
                      className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={handleToggleSwitch}
                      checked={showFamilyName}
                    />
                  </div>
                </div>
                {showFamilyName && (
                  <div>
                    <div className="pt-[12px]">
                      <h1 className="text-[#4B1979] font-bold text-[12px] sm:text-[14px]">
                        Nama Keluarga
                      </h1>
                    </div>
                    <div className="sm:w-[454px] pt-[4px]">
                      <form className="font-light rounded-[4px] text-[12px] sm:text-[14px]">
                        <input
                          type="text"
                          value={familyNameCos}
                          onChange={(e) => setFamilyNameCos(e.target.value)}
                          placeholder="Nama Keluarga"
                          className="outline-none bg-transparent rounded-[4px] border-gray-300"
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </form>
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-[12px]">
                <h1 className="text-[#4B1979] font-bold text-[12px] sm:text-[14px]">
                  Nomor Telepon
                </h1>
              </div>
              <div className="sm:w-[454px] pt-[4px]">
                <form className="font-light rounded-[4px] text-[12px] sm:text-[14px]">
                  <input
                    type="text"
                    value={booking?.costumer?.phoneCos}
                    placeholder="Nomor Telepon"
                    onChange={(e) => setPhoneCos(e.target.value)}
                    className="outline-none bg-transparent rounded-[4px] border-gray-300"
                    style={{ width: "100%", maxWidth: "500px" }}
                  />
                </form>
              </div>
              <div className="pt-[12px]">
                <h1 className="text-[#4B1979] font-bold text-[12px] sm:text-[14px]">
                  Email<span className="text-red-700">*</span>
                </h1>
              </div>
              <div className="sm:w-[454px] pt-[4px]">
                <form className="font-light rounded-[4px] text-[12px] sm:text-[14px]">
                  <input
                    type="text"
                    value={booking?.costumer?.emailCos}
                    onChange={(e) => setEmailCos(e.target.value)}
                    placeholder="Email"
                    className="outline-none bg-transparent rounded-[4px] border-gray-300"
                    style={{ width: "100%", maxWidth: "500px" }}
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="pt-[4px] outline-none">
            {Array.from({ length: indexnya }).map((_, index) => (
              <div
                key={index}
                className="mt-[30px] isi_data border-[1px] border-[#8A8A8A] px-[16px] pt-[26px] pb-[42px] rounded-[4px] sm:w-[518px]"
              >
                <div className="text-[12px]">
                  <div className="data_pemesanan">
                    <h1 className="font-bold text-xl sm:text-[14px]">
                      Isi Data Penumpang
                    </h1>
                  </div>
                  <div className="pt-[16px]">
                    <div className="data_diri bg-[#3C3C3C] text-white font-medium py-[8px] px-[16px] sm:w-[486px] rounded-t-[10px]">
                      <h1 className="font-medium sm:text-[14px]">
                        Data Diri Penumpang {index + 1}
                      </h1>
                    </div>
                  </div>
                  <div className="px-[16px]">
                    <div>
                      <div className="pt-[16px]">
                        <h1 className="text-[#4B1979] font-bold sm:text-[14px]">
                          Title
                        </h1>
                      </div>
                      <div className="relative sm:w-[454px] pt-[4px]">
                        <div className="font-medium flex rounded-[4px]">
                          <input
                            onClick={() => handleToggleDropdown(index)}
                            type="text"
                            value={selectedTitle[index]}
                            readOnly
                            placeholder=""
                            className="flex-1 outline-none bg-transparent py-[8px] pl-[12px] pr-[7px] rounded-[4px] border-gray-300 sm:pr-[230px]"
                          />
                        </div>
                        {isDropdownOpen[index] && (
                          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-[4px] rounded-[4px]">
                            <div
                              className="py-[8px] px-[16px] cursor-pointer hover:bg-gray-200"
                              onClick={() => handleTitleSelect("Mr", index)}
                            >
                              Mr.
                            </div>
                            <div
                              className="py-[8px] px-[16px] cursor-pointer hover:bg-gray-200"
                              onClick={() => handleTitleSelect("Mrs.", index)}
                            >
                              Mrs.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="pt-[12px]">
                      <h1 className="text-[#4B1979] font-bold sm:text-[14px]">
                        Nama Lengkap<span className="text-red-700">*</span>
                      </h1>
                    </div>
                    <div className="sm:w-[454px] pt-[4px]">
                      <form className="font-light rounded-[4px] sm:text-[14px]">
                        <input
                          type="text"
                          value={fullNamePasValues[index] || ""} // Menggunakan index untuk mengakses nilai fullNamePas dari array fullNamePasValues
                          onChange={(e) => {
                            const newFullNamePasValues = [...fullNamePasValues];
                            newFullNamePasValues[index] = e.target.value; // Mengubah nilai fullNamePas berdasarkan index
                            setFullNamePasValues(newFullNamePasValues); // Mengupdate array fullNamePasValues dengan nilai yang diubah
                          }}
                          placeholder={`Passenger ${index + 1}`} // Placeholder menggunakan indeks untuk menunjukkan nomor penumpang
                          className="outline-none bg-transparent rounded-[4px] border-gray-300"
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </form>
                    </div>
                    <div className="pt-[12px]">
                      <h1 className="text-[#4B1979] font-bold sm:text-[14px]">
                        Nama Keluarga
                      </h1>
                    </div>
                    <div className="sm:w-[454px] pt-[4px]">
                      <form className="font-light rounded-[4px] sm:text-[14px]">
                        <input
                          type="text"
                          value={familyNamePasValues[index] || ""} // Menggunakan index untuk mengakses nilai fullNamePas dari array fullNamePasValues
                          onChange={(e) => {
                            const newFamilyNamePasValues = [
                              ...familyNamePasValues,
                            ];
                            newFamilyNamePasValues[index] = e.target.value; // Mengubah nilai fullNamePas berdasarkan index
                            setFamilyNamePasValues(newFamilyNamePasValues); // Mengupdate array fullNamePasValues dengan nilai yang diubah
                          }}
                          placeholder={`Family Name ${index + 1}`} // Placeholder menggunakan indeks untuk menunjukkan nomor penumpang
                          className="outline-none bg-transparent rounded-[4px] border-gray-300"
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </form>
                    </div>
                    <div className="pt-[12px]">
                      <h1 className="text-[#4B1979] font-bold sm:text-[14px]">
                        Tanggal Lahir
                      </h1>
                    </div>
                    <div className="sm:w-[454px] pt-[4px]">
                      <form className="font-light rounded-[4px] flex justify-between items-center sm:text-[14px]">
                        <input
                          type="date"
                          value={
                            birthDatePasValues[index]
                              ? unixToDateString(birthDatePasValues[index])
                              : ""
                          }
                          onChange={(e) => {
                            const newBirthDatePasValues = [
                              ...birthDatePasValues,
                            ];
                            const selectedDate = new Date(e.target.value);
                            const unixTimestamp = Math.floor(
                              selectedDate.getTime() / 1000
                            ); // Konversi ke timestamp unix
                            newBirthDatePasValues[index] = unixTimestamp;
                            setBirthDatePasValues(newBirthDatePasValues);
                          }}
                          placeholder={`BirthDate ${index + 1}`}
                          className="outline-none bg-transparent rounded-[4px] border-gray-300 text-gray-400"
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </form>
                    </div>

                    <div className="pt-[12px]">
                      <h1 className="text-[#4B1979] font-bold sm:text-[14px]">
                        Kewarganegaraan
                      </h1>
                    </div>
                    <div className="sm:w-[454px] pt-[4px]">
                      <form className="font-light rounded-[4px] sm:text-[14px]">
                        <input
                          type="text"
                          value={nationalityPasValues[index] || ""} // Menggunakan index untuk mengakses nilai fullNamePas dari array fullNamePasValues
                          onChange={(e) => {
                            const newNationalityPasValues = [
                              ...nationalityPasValues,
                            ];
                            newNationalityPasValues[index] = e.target.value; // Mengubah nilai fullNamePas berdasarkan index
                            setNationalityPasValues(newNationalityPasValues); // Mengupdate array fullNamePasValues dengan nilai yang diubah
                          }}
                          placeholder={`Kewarganegaraan ${index + 1}`}
                          className="outline-none bg-transparent rounded-[4px] border-gray-300"
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </form>
                    </div>
                    <div className="pt-[12px]">
                      <h1 className="text-[#4B1979] font-bold sm:text-[14px]">
                        KTP/Paspor
                      </h1>
                    </div>
                    <div className="sm:w-[454px] pt-[4px]">
                      <form className="font-light rounded-[4px] sm:text-[14px]">
                        <input
                          type="text"
                          value={identityNumberPasValues[index] || ""} // Menggunakan index untuk mengakses nilai fullNamePas dari array fullNamePasValues
                          onChange={(e) => {
                            const newIdentityNumberPasValues = [
                              ...identityNumberPasValues,
                            ];
                            newIdentityNumberPasValues[index] = e.target.value; // Mengubah nilai fullNamePas berdasarkan index
                            setIdentityNumberPasValues(
                              newIdentityNumberPasValues
                            ); // Mengupdate array fullNamePasValues dengan nilai yang diubah
                          }}
                          placeholder={`Nomor Identitas ${index + 1}`}
                          className="outline-none bg-transparent rounded-[4px] border-gray-300"
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </form>
                    </div>
                    <div className="pt-[12px]">
                      <h1 className="text-[#4B1979] font-bold sm:text-[14px]">
                        Negara Penerbit
                      </h1>
                    </div>
                    <div className="sm:w-[454px] pt-[4px]">
                      <form className="font-light rounded-[4px] flex justify-between items-center sm:text-[14px]">
                        <input
                          type="text"
                          value={issuingCountryPasValues[index] || ""} // Menggunakan index untuk mengakses nilai fullNamePas dari array fullNamePasValues
                          onChange={(e) => {
                            const newIssuingCountryPasValues = [
                              ...issuingCountryPasValues,
                            ];
                            newIssuingCountryPasValues[index] = e.target.value; // Mengubah nilai fullNamePas berdasarkan index
                            setIssuingCountryPasValues(
                              newIssuingCountryPasValues
                            ); // Mengupdate array fullNamePasValues dengan nilai yang diubah
                          }}
                          placeholder={`Negara Penerbit ${index + 1}`}
                          className="outline-none bg-transparent rounded-[4px] border-gray-300"
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </form>
                    </div>
                    <div className="pt-[12px]">
                      <h1 className="text-[#4B1979] font-bold sm:text-[14px]">
                        Berlaku Sampai
                      </h1>
                    </div>
                    <div className="sm:w-[454px] pt-[4px]">
                      <form className="font-light rounded-[4px] flex justify-between items-center sm:text-[14px]">
                        <input
                          type="date"
                          value={
                            availableUntilPasValues[index]
                              ? unixToDateString(availableUntilPasValues[index])
                              : ""
                          }
                          onChange={(e) => {
                            const newAvailableUntilPasValues = [
                              ...availableUntilPasValues,
                            ];
                            const selectedDate = new Date(e.target.value);
                            const unixTimestamp = Math.floor(
                              selectedDate.getTime() / 1000
                            ); // Konversi ke timestamp unix
                            newAvailableUntilPasValues[index] = unixTimestamp;
                            setAvailableUntilPasValues(
                              newAvailableUntilPasValues
                            );
                          }}
                          placeholder={`Berlaku Sampai ${index + 1}`}
                          className="outline-none bg-transparent rounded-[4px] border-gray-300 text-gray-400"
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="pt-[24px]">
              <div className="isi_data border-[1px] border-[#8A8A8A] px-[16px] pt-[26px] pb-[42px] rounded-[4px] sm:w-[518px]">
                <div className="data_kursi">
                  <h1 className="font-bold text-[18px] sm:text-[20px]">
                    Pilih Kursi Keberangkatan
                  </h1>
                </div>
                <div className="pt-[16px] flex items-center">
                  <div className="data_diri bg-[#73CA5C] text-white font-medium py-[8px] px-[16px] w-full sm:w-[486px] rounded-[4px] items-center">
                    <h1 className="font-medium text-center text-[12px] sm:text-[14px]">
                      {flightData.flight_data.dep.seatClassName} -{" "}
                      {flightData.flight_data.dep.seatAvailable} Seats Available
                    </h1>
                  </div>
                </div>
                <div className="angka sm:px-[80px] pt-[15px]">
                  <div className="flex justify-between items-center text-[#8A8A8A] font-medium">
                    {rows.map((row) => (
                      <div
                        key={row}
                        className="w-[36px] h-[36px] rounded flex justify-center items-center"
                      >
                        {row}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center gap-[5px] sm:gap-[20px] pt-[12px]">
                    <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                      {seatDetailsTwo?.data.length > 0 &&
                        seatDetailsTwo.data.slice(0, 12).map((data, index) => {
                          const seatId = data.seatId;
                          const isSelected =
                            selectedSeats.hasOwnProperty(seatId);
                          const seatName = isSelected
                            ? selectedSeats[seatId]
                            : index + 1;

                          return (
                            <div
                              key={seatId}
                              className={`bg-${
                                data.booked
                                  ? " bg-gray-300"
                                  : isSelected
                                  ? "[#7126B5]"
                                  : "[#73CA5C]"
                              } w-[36px] h-[36px] rounded flex justify-center items-center`}
                              onClick={() => toggleSeatSelection(seatId)}
                            >
                              {seatName}
                            </div>
                          );
                        })}
                    </div>
                    <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                      {seatDetailsTwo?.data.length > 0 &&
                        seatDetailsTwo.data.slice(12, 24).map((data, index) => {
                          const seatId = data.seatId;
                          const isSelected =
                            selectedSeats.hasOwnProperty(seatId);
                          const seatName = isSelected
                            ? selectedSeats[seatId]
                            : index + 13;

                          return (
                            <div
                              key={seatId}
                              className={`bg-${
                                data.booked
                                  ? " bg-gray-300"
                                  : isSelected
                                  ? "[#7126B5]"
                                  : "[#73CA5C]"
                              } w-[36px] h-[36px] rounded flex justify-center items-center`}
                              onClick={() => toggleSeatSelection(seatId)}
                            >
                              {seatName}
                            </div>
                          );
                        })}
                    </div>
                    <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                      {seatDetailsTwo?.data.length > 0 &&
                        seatDetailsTwo.data.slice(24, 36).map((data, index) => {
                          const seatId = data.seatId;
                          const isSelected =
                            selectedSeats.hasOwnProperty(seatId);
                          const seatName = isSelected
                            ? selectedSeats[seatId]
                            : index + 25;

                          return (
                            <div
                              key={seatId}
                              className={`bg-${
                                data.booked
                                  ? " bg-gray-300"
                                  : isSelected
                                  ? "[#7126B5]"
                                  : "[#73CA5C]"
                              } w-[36px] h-[36px] rounded flex justify-center items-center`}
                              onClick={() => toggleSeatSelection(seatId)}
                            >
                              {seatName}
                            </div>
                          );
                        })}
                    </div>

                    <div className="kotak2 grid grid-cols-1 gap-3 mt-2 flex text-center text-[12px]">
                      {Array.from({ length: 12 }, (_, index) => (
                        <div
                          key={index + 1}
                          className="bg-[#F2F2F2] px-[5px] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center"
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>

                    <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                      {seatDetailsTwo?.data.length > 0 &&
                        seatDetailsTwo.data.slice(36, 48).map((data, index) => {
                          const seatId = data.seatId;
                          const isSelected =
                            selectedSeats.hasOwnProperty(seatId);
                          const seatName = isSelected
                            ? selectedSeats[seatId]
                            : index + 37;

                          return (
                            <div
                              key={seatId}
                              className={`bg-${
                                data.booked
                                  ? " bg-gray-300"
                                  : isSelected
                                  ? "[#7126B5]"
                                  : "[#73CA5C]"
                              } w-[36px] h-[36px] rounded flex justify-center items-center`}
                              onClick={() => toggleSeatSelection(seatId)}
                            >
                              {seatName}
                            </div>
                          );
                        })}
                    </div>
                    <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                      {seatDetailsTwo?.data.length > 0 &&
                        seatDetailsTwo.data.slice(48, 60).map((data, index) => {
                          const seatId = data.seatId;
                          const isSelected =
                            selectedSeats.hasOwnProperty(seatId);
                          const seatName = isSelected
                            ? selectedSeats[seatId]
                            : index + 49;

                          return (
                            <div
                              key={seatId}
                              className={`bg-${
                                data.booked
                                  ? " bg-gray-300"
                                  : isSelected
                                  ? "[#7126B5]"
                                  : "[#73CA5C]"
                              } w-[36px] h-[36px] rounded flex justify-center items-center`}
                              onClick={() => toggleSeatSelection(seatId)}
                            >
                              {seatName}
                            </div>
                          );
                        })}
                    </div>
                    <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                      {seatDetailsTwo?.data.length > 0 &&
                        seatDetailsTwo.data.slice(60, 72).map((data, index) => {
                          const seatId = data.seatId;
                          const isSelected =
                            selectedSeats.hasOwnProperty(seatId);
                          const seatName = isSelected
                            ? selectedSeats[seatId]
                            : index + 61;

                          return (
                            <div
                              key={seatId}
                              className={`bg-${
                                data.booked
                                  ? " bg-gray-300"
                                  : isSelected
                                  ? "[#7126B5]"
                                  : "[#73CA5C]"
                              } w-[36px] h-[36px] rounded flex justify-center items-center`}
                              onClick={() => toggleSeatSelection(seatId)}
                            >
                              {seatName}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[24px]">
                {flightData.flight_data.arr && (
                  <div className="isi_data border-[1px] border-[#8A8A8A] px-[16px] pt-[26px] pb-[42px] rounded-[4px] sm:w-[518px]">
                    <div className="data_kursi">
                      <h1 className="font-bold text-[18px] sm:text-[20px]">
                        Pilih Kursi Kepulangan
                      </h1>
                    </div>
                    <div className="pt-[16px] flex items-center">
                      <div className="data_diri bg-[#73CA5C] text-white font-medium py-[8px] px-[16px] w-full sm:w-[486px] rounded-[4px] items-center">
                        <h1 className="font-medium text-center text-[12px] sm:text-[14px]">
                          {flightData.flight_data.arr.seatClassName} -{" "}
                          {flightData.flight_data.arr.seatAvailable} Seats
                          Available
                        </h1>
                      </div>
                    </div>
                    <div className="angka sm:px-[80px] pt-[15px]">
                      <div className="flex justify-between items-center text-[#8A8A8A] font-medium">
                        {rows.map((row) => (
                          <div
                            key={row}
                            className="w-[36px] h-[36px] rounded flex justify-center items-center"
                          >
                            {row}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center gap-[5px] sm:gap-[20px] pt-[12px]">
                        <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                          {seatDetails?.data.length > 0 &&
                            seatDetails.data.slice(0, 12).map((data, index) => {
                              const seatId = data.seatId;
                              const isSeatSelectedReturn =
                                selectedSeatsReturn.hasOwnProperty(seatId);
                              const seatName = isSeatSelectedReturn
                                ? selectedSeatsReturn[seatId]
                                : index + 1;

                              return (
                                <div
                                  key={seatId}
                                  className={`bg-${
                                    data.booked
                                      ? "gray-300"
                                      : isSeatSelectedReturn
                                      ? "[#7126B5]"
                                      : "[#73CA5C]"
                                  } w-[36px] h-[36px] rounded flex justify-center items-center`}
                                  onClick={() =>
                                    toggleSeatReturnSelection(seatId)
                                  }
                                >
                                  {seatName}
                                </div>
                              );
                            })}
                        </div>
                        <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                          {seatDetails?.data.length > 0 &&
                            seatDetails.data
                              .slice(12, 24)
                              .map((data, index) => {
                                const seatId = data.seatId;
                                const isSeatSelectedReturn =
                                  selectedSeatsReturn.hasOwnProperty(seatId);
                                const seatName = isSeatSelectedReturn
                                  ? selectedSeatsReturn[seatId]
                                  : index + 13;

                                return (
                                  <div
                                    key={seatId}
                                    className={`bg-${
                                      data.booked
                                        ? "gray-300"
                                        : isSeatSelectedReturn
                                        ? "[#7126B5]"
                                        : "[#73CA5C]"
                                    } w-[36px] h-[36px] rounded flex justify-center items-center`}
                                    onClick={() =>
                                      toggleSeatReturnSelection(seatId)
                                    }
                                  >
                                    {seatName}
                                  </div>
                                );
                              })}
                        </div>
                        <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                          {seatDetails?.data.length > 0 &&
                            seatDetails.data
                              .slice(24, 36)
                              .map((data, index) => {
                                const seatId = data.seatId;
                                const isSeatSelectedReturn =
                                  selectedSeatsReturn.hasOwnProperty(seatId);
                                const seatName = isSeatSelectedReturn
                                  ? selectedSeatsReturn[seatId]
                                  : index + 25;

                                return (
                                  <div
                                    key={seatId}
                                    className={`bg-${
                                      data.booked
                                        ? "gray-300"
                                        : isSeatSelectedReturn
                                        ? "[#7126B5]"
                                        : "[#73CA5C]"
                                    } w-[36px] h-[36px] rounded flex justify-center items-center`}
                                    onClick={() =>
                                      toggleSeatReturnSelection(seatId)
                                    }
                                  >
                                    {seatName}
                                  </div>
                                );
                              })}
                        </div>

                        <div className="kotak2 grid grid-cols-1 gap-3 mt-2 flex text-center text-[12px]">
                          {Array.from({ length: 12 }, (_, index) => (
                            <div
                              key={index + 1}
                              className="bg-[#F2F2F2] px-[5px] text-[#8A8A8A] w-[16px] h-[36px] rounded flex justify-center items-center"
                            >
                              {index + 1}
                            </div>
                          ))}
                        </div>

                        <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                          {seatDetails?.data.length > 0 &&
                            seatDetails.data
                              .slice(36, 48)
                              .map((data, index) => {
                                const seatId = data.seatId;
                                const isSeatSelectedReturn =
                                  selectedSeatsReturn.hasOwnProperty(seatId);
                                const seatName = isSeatSelectedReturn
                                  ? selectedSeatsReturn[seatId]
                                  : index + 37;

                                return (
                                  <div
                                    key={seatId}
                                    className={`bg-${
                                      data.booked
                                        ? "gray-300"
                                        : isSeatSelectedReturn
                                        ? "[#7126B5]"
                                        : "[#73CA5C]"
                                    } w-[36px] h-[36px] rounded flex justify-center items-center`}
                                    onClick={() =>
                                      toggleSeatReturnSelection(seatId)
                                    }
                                  >
                                    {seatName}
                                  </div>
                                );
                              })}
                        </div>
                        <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                          {seatDetails?.data.length > 0 &&
                            seatDetails.data
                              .slice(48, 60)
                              .map((data, index) => {
                                const seatId = data.seatId;
                                const isSeatSelectedReturn =
                                  selectedSeatsReturn.hasOwnProperty(seatId);
                                const seatName = isSeatSelectedReturn
                                  ? selectedSeatsReturn[seatId]
                                  : index + 49;

                                return (
                                  <div
                                    key={seatId}
                                    className={`bg-${
                                      data.booked
                                        ? "gray-300"
                                        : isSeatSelectedReturn
                                        ? "[#7126B5]"
                                        : "[#73CA5C]"
                                    } w-[36px] h-[36px] rounded flex justify-center items-center`}
                                    onClick={() =>
                                      toggleSeatReturnSelection(seatId)
                                    }
                                  >
                                    {seatName}
                                  </div>
                                );
                              })}
                        </div>
                        <div className="kotak1 grid grid-cols-1 gap-3 mt-2 text-[#F2F2F2]">
                          {seatDetails?.data.length > 0 &&
                            seatDetails.data
                              .slice(60, 72)
                              .map((data, index) => {
                                const seatId = data.seatId;
                                const isSeatSelectedReturn =
                                  selectedSeatsReturn.hasOwnProperty(seatId);
                                const seatName = isSeatSelectedReturn
                                  ? selectedSeatsReturn[seatId]
                                  : index + 61;

                                return (
                                  <div
                                    key={seatId}
                                    className={`bg-${
                                      data.booked
                                        ? "gray-300"
                                        : isSeatSelectedReturn
                                        ? "[#7126B5]"
                                        : "[#73CA5C]"
                                    } w-[36px] h-[36px] rounded flex justify-center items-center`}
                                    onClick={() =>
                                      toggleSeatReturnSelection(seatId)
                                    }
                                  >
                                    {seatName}
                                  </div>
                                );
                              })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="pt-[34px] pb-[132px]">
              <div
                onClick={handleSubmit}
                className="text-center bg-[#7126B5] py-[16px] px-[10px] rounded-[12px] shadow-md"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <h1
                  type="submit"
                  className="text-[14px] sm:text-[16px] text-[#FFFFFF]"
                >
                  Simpan
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="colom_nomor">
          <div className="sm:pl-[28px]">
            <div className="detail">
              <h2 className="font-bold text-[18px] sm:text-[18px]">
                Detail Penerbangan
              </h2>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold text-[12px] sm:text-[14px]">
                  {formatDateTime(depDateTime)}
                </h1>
              </div>
              <div>
                <h1 className="font-bold text-[10px] text-[#A06ECE] pl-[158px] sm:text-[12px]">
                  Keberangkatan
                </h1>
              </div>
            </div>
            <div className="tanggal">
              <div>
                <h1 className="font-light text-[12px] sm:text-[14px]">
                  {formatDate(depDateTime)}
                </h1>
              </div>
            </div>
            <div className="bandara-term">
              <h1 className="font-medium text-[12px] sm:text-[14px]">
                {flightData.flight_data.dep.depAirportName}
              </h1>
            </div>
            <div className="line pt-[16px]">
              <div className="border-[1px] border-gray-300"></div>
            </div>
            <div className="pt-[8px] flex jutify-between items-center gap-[8px]">
              <div>
                <div>
                  <img src={Crown} alt="transferimage" />
                </div>
              </div>
              <div className="informasi text-[12px] sm:text-[14px]">
                <div>
                  <h1 className="font-bold text-[#151515]">
                    {flightData.flight_data.dep.airlineName} -{" "}
                    {flightData.flight_data.dep.seatClassName}
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold text-[#151515]">
                    {flightData.flight_data.dep.airplaneModel}
                  </h1>
                </div>
                <div className="pt-[18px]">
                  <div>
                    <h1 className="font-bold text-[#151515]">Informasi</h1>
                  </div>
                  <div>
                    <h1 className="font-light text-[12px]">Baggage 20 kg</h1>
                  </div>
                  <div>
                    <h1 className="font-light">Cabin baggage 7 kg</h1>
                  </div>
                  <div>
                    <h1 className="font-light">In Flight Entertainment</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="line pt-[8px]">
              <div className="border-[1px] border-gray-300"></div>
            </div>
            <div className="pt-[12px]">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-bold text-[12px] sm:text-[14px]">
                    {formatDateTime(arrDateTime)}
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold text-[#A06ECE] pl-[158px] text-[10px] sm:text-[12px]">
                    {/* {bookingMessage.data[0].status.name} */}
                  </h1>
                </div>
              </div>
              <div className="tanggal">
                <div className="text-[12px] text-[12px] sm:text-[14px]">
                  <h1 className="font-light">{formatDate(arrDateTime)}</h1>
                </div>
              </div>
              <div className="bandara-term text-[12px] sm:text-[14px]">
                <h1 className="font-medium">
                  {flightData.flight_data.dep.arrAirportName}
                </h1>
              </div>
            </div>
            <div className="line pt-[16px]">
              <div className="border-[1px] border-gray-300"></div>
            </div>
            <div className="pt-[8px] text-[12px] sm:text-[14px]">
              <div>
                <h1 className="font-bold =">Rincian Penumpang</h1>
              </div>
              <div className="flex justify-between text-[12px] sm:text-[14px]">
                <div>
                  <h1 className="font-light">
                    {flightData.user_data.passengers.passengers_detail.adult}{" "}
                    Adult
                  </h1>
                  <h1 className="font-light">
                    {flightData.user_data.passengers.passengers_detail.child}{" "}
                    Baby
                  </h1>
                  <h1 className="font-light">
                    {flightData.user_data.passengers.passengers_detail.baby}{" "}
                    Anak
                  </h1>
                  <h1 className="font-light"></h1>
                </div>
                {/* <div className="text-end">
                  <h1 className="font-light">IDR 9.550.000</h1>
                  <h1 className="font-light">IDR 0</h1>
                  <h1 className="font-light">IDR 300.000</h1>
                </div> */}
              </div>
            </div>
            <div className="line pt-[4px]">
              <div className="border-[1px] border-gray-300"></div>
            </div>
            <div className="flex justify-between pt-[8px]">
              <div className="text-[14px] sm:text-[16px]">
                <h1 className="font-bold">Total</h1>
              </div>
              <div className="text-[14px] sm:text-[18px]">
                <h1 className="font-bold text-[18px] text-[#7126B5]">
                  {/* {formatCurrency(bookingMessage.data[0].booking.totalPrice)} */}
                  {formatCurrency(
                    flightData.flight_data.dep.price *
                      flightData.user_data.passengers.count_passengers
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
