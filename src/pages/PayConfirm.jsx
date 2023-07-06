import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPayconfirm } from "../redux/actions/payconfirmActions";
import Crown from "../assets/crown.svg";
import { useNavigate } from "react-router-dom";

const PayConfirm = () => {
  const navigate = useNavigate();
  const flightData = JSON.parse(localStorage.getItem("flight_data"));
  const bookingMessage = JSON.parse(localStorage.getItem("bookingMessage"));
  const [photo_confirmation, setPhoto_confirmation] = useState(null);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const bookingCode = bookingMessage.data[0].booking.bookingCode;
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(amount);
  };
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
  // const arrivalDate = bookingMessage.data[0].booking.departFlight.arrivalDate;
  const arrivalTime = bookingMessage.data[0].booking.departFlight.arrivalDate;
  const departureDate =
    bookingMessage.data[0].booking.departFlight.departureDate;
  const departureTime =
    bookingMessage.data[0].booking.departFlight.departureDate;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto_confirmation(file);
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };
  const [isLoading, setIsLoading] = useState(false);
  const handleData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("booking_code", bookingCode);
    formData.append("photo_confirmation", photo_confirmation);
    setIsLoading(true);
    dispatch(getPayconfirm(formData, navigate));
  };

  return (
    <div>
      <div
        className={`w-screen h-screen bg-gray-400/50 absolute top-0 left-0 flex items-center justify-center ${
          isLoading === false && "hidden"
        }`}
      >
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="pt-[27px] sm:pt-[47px] pb-[20px] px-[50px] sm:px-[100px] xl:px-[260px] shadow-md">
        <div className="text-stage flex gap-[8px] text-[16px] sm:text-[20px]">
          <h1 className="font-bold text-[#8A8A8A]">Isi Data Diri</h1>
          <h1 className="font-bold text-[#8A8A8A]">{">"}</h1>
          <h1 className="font-bold">Bayar</h1>
          <h1 className="font-bold text-[#8A8A8A]">{">"}</h1>
          <h1 className="font-bold text-[#8A8A8A]">Selesai</h1>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center sm:flex-row gap-[16px] pt-[30px] sm:w-full sm:justify-center sm:items-start xl:px-[285px]">
        <div className="pembayaran">
          <div className="px-[16px] sm:w-[518px]">
            <div className="data_pembayaran text-[18px] sm:text-[20px]">
              <h1 className="font-bold">Isi Bukti Pembayaran</h1>
            </div>
            <div className="flex items-center justify-center w-full pt-[16px]">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="w-[150px] h-[150px] mb-3"
                    />
                  ) : (
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                  )}
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <div className="pt-[34px] pb-[132px]">
              <div
                onClick={handleData}
                className="text-center bg-[#7126B5] py-[16px] px-[12px] rounded-[12px] shadow-md"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <h1 className="text-[14px] sm:text-[16px] text-[#FFFFFF]">
                  Kirim Bukti Pembayaran
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="booking px-[16px] sm:w-[518px]">
          <div className="flex gap-[5px] text-[16px] sm:text-[18px]">
            <div>
              <h1 className="font-bold">Booking Code:</h1>
            </div>
            <div>
              <h1 className="font-bold text-[#7126B5]">
                {bookingMessage.data[0].booking.bookingCode}
              </h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-[14px] sm:text-[16px]">
                {formatDateTime(departureTime)}
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-[10px] sm:text-[12px] text-[#A06ECE] pl-[158px]">
                Keberangkatan
              </h1>
            </div>
          </div>
          <div className="tanggal">
            <div>
              <h1 className="font-light text-[14px] sm:text-[16px]">
                {formatDate(departureDate)}
              </h1>
            </div>
          </div>
          <div className="bandara-term">
            <h1 className="font-medium text-[12px] sm:text-[14px]">
              {
                bookingMessage.data[0].booking.departFlight.departureAirport
                  .name
              }
            </h1>
          </div>
          <div className="line pt-[16px]">
            <div className="border-[1px] border-[#D0D0D0]"></div>
          </div>
          <div className="pt-[8px] flex jutify-between items-center gap-[8px] text-[12px] sm:text-[14px]">
            <div>
              <div>
                <img src={Crown} alt="tranferimage" />
              </div>
            </div>
            <div className="informasi">
              <div>
                <h1 className="font-bold text-[#151515]">
                  {bookingMessage.data[0].booking.departFlight.airline.name}
                </h1>
              </div>
              <div>
                <h1 className="font-bold text-[#151515]">
                  {bookingMessage.data[0].booking.departFlight.airplane.model}
                </h1>
              </div>
              <div className="pt-[18px]">
                <div>
                  <h1 className="font-bold text-[#151515]">Informasi</h1>
                </div>
                <div>
                  <h1 className="font-light">Baggage 20 kg</h1>
                </div>
                <div>
                  <h1 className="font-light">Cabin baggage 7 kg</h1>
                </div>
                <div>
                  <h1 className="font-light">
                    {" "}
                    {bookingMessage.data[0].status.name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="line pt-[8px]">
            <div className="border-[1px] border-[#D0D0D0]"></div>
          </div>
          <div className="pt-[12px] text-[12px] sm:text-[14px]">
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">{formatDateTime(arrivalTime)}</h1>
              </div>
              <div>
                <h1 className="font-bold text-[10px] sm:text-[12px] text-[#A06ECE] pl-[158px]">
                  Kedatangan
                </h1>
              </div>
            </div>
            <div className="tanggal">
              <div>
                <h1 className="font-light">{formatDate(departureDate)}</h1>
              </div>
            </div>
            <div className="bandara-term">
              <h1 className="font-medium">
                {
                  bookingMessage.data[0].booking.departFlight.arrivalAirport
                    .name
                }
              </h1>
            </div>
          </div>
          <div className="line pt-[16px]">
            <div className="border-[1px] border-[#D0D0D0]"></div>
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
                  {flightData.user_data.passengers.passengers_detail.baby} Baby
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
            <div className="border-[1px] border-[#D0D0D0]"></div>
          </div>
          <div className="flex justify-between pt-[8px]">
            <div>
              <h1 className="font-bold text-[14px] sm:text-[16px]">Total</h1>
            </div>
            <div>
              <h1 className="font-bold text-[16px] sm:text-[18px] text-[#7126B5]">
                {formatCurrency(bookingMessage.data[0].booking.totalPrice)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayConfirm;
