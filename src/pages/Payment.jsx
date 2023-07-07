import React, { useEffect, useState } from "react";
import { ReactComponent as Mastercard } from "../assets/mastercard.svg";
import { ReactComponent as Paypal } from "../assets/paypal.svg";
import { ReactComponent as Visa } from "../assets/visa.svg";
import { ReactComponent as Amex } from "../assets/amex.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Crown from "../assets/crown.svg";
import {
  getTransDetails,
  getTransDetailsGo,
  getTransDetailsVA,
} from "../redux/actions/transactionActions";

import { getBooking } from "../redux/actions/bookingActions";

const Payment = () => {
  // const { bookingDetails } = useSelector((state) => state);
  const flightData = JSON.parse(localStorage.getItem("flight_data"));
  const { booking } = useSelector((state) => state);
  const bookingMessage = JSON.parse(localStorage.getItem("bookingMessage"));
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  // const [bankVa, setBankVa] = useState("");
  const [selectedBank, setSelectedBank] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const bookingCode = bookingMessage.data[0].booking.bookingCode;
  const totalPrice = bookingMessage.data[0].booking.totalPrice;
  const [isOpen, setIsOpen] = useState({
    gopay: false,
    va: false,
    creditCard: false,
  });
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
  const arrivalDate = bookingMessage.data[0].booking.departFlight.arrivalDate;
  const arrivalTime = bookingMessage.data[0].booking.departFlight.arrivalDate;
  const departureDate =
    bookingMessage.data[0].booking.departFlight.departureDate;
  const departureTime =
    bookingMessage.data[0].booking.departFlight.departureDate;

  const toggleAccordion = (accordionId) => {
    // Buat salinan state isOpen
    const updatedAccordionState = { ...isOpen };

    // Toggle nilai isOpen sesuai dengan accordionId
    updatedAccordionState[accordionId] = !updatedAccordionState[accordionId];

    // Perbarui state isOpen
    setIsOpen(updatedAccordionState);
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleDataGo = (e) => {
    e.preventDefault();
    const paygo = {
      bookingCode: bookingCode,
      method: "gopay",
      amount: totalPrice,
      phoneNumber: phoneNumber,
    };
    setIsLoading(true);
    dispatch(getTransDetailsGo(paygo, navigate));
  };

  const handleDataVA = (e) => {
    e.preventDefault();
    let bankVaValue;

    switch (selectedBank) {
      case "BCA":
        bankVaValue = 1;
        break;
      case "BRI":
        bankVaValue = 2;
        break;
      case "Mandiri":
        bankVaValue = 3;
        break;
      case "BNI":
        bankVaValue = 4;
        break;
      default:
        bankVaValue = 0;
    }

    const payva = {
      bookingCode: bookingCode,
      method: "bank_va",
      amount: totalPrice,
      bankVa: bankVaValue,
    };
    setIsLoading(true);
    dispatch(getTransDetailsVA(payva, navigate));
  };

  const handleData = (e) => {
    e.preventDefault();
    const pay = {
      bookingCode: bookingCode,
      method: "credit_card",
      amount: totalPrice,
      cardNumber: cardNumber,
      cardCvv: cardCvv,
      cardHolderName: cardHolderName,
    };
    // setIsLoading(true);
    dispatch(getTransDetails(pay, navigate));
  };

  useEffect(() => {
    dispatch(getBooking());
  }, [dispatch]);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(900); // 900 detik = 15 menit

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate("/");
    }
  }, [timeLeft, navigate]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
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
        <div className="flex items-center py-[10px] px-[16px]">
          <div className="waktu rounded-[12px] bg-[#FF0000] px-[25px] py-3   w-[936px] items-center">
            <h1 className="waktu_aja text-white text-[16px] sm:text-[20px] font-medium text-center">
              Selesaikan Pembayaran Dalam {formatTime(timeLeft)}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center sm:flex-row gap-[16px] pt-[30px] sm:w-full sm:justify-center sm:items-start xl:px-[285px]">
        <div className="pembayaran">
          <div className="px-[16px] sm:w-[518px] w-[350px]">
            <div className="data_pembayaran text-[18px] sm:text-[20px]">
              <h1 className="font-bold">Isi Data Pembayaran</h1>
            </div>
            <div className="pt-[20px]">
              <div className="border rounded-md mb-4">
                <button
                  className="w-full px-4 py-2 bg-[#7126B5] text-white rounded-[8px] text-left"
                  onClick={() => toggleAccordion("gopay")}
                >
                  Gopay
                </button>
                {isOpen.gopay && (
                  <div className="px-4 py-2">
                    <div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="pembayaran pt-[24px] text-[14px] sm:text-[16px]">
                          <div className="text-left">
                            <h1 className="font-medium">Gopay</h1>
                          </div>
                          <div>
                            <form className="font-light">
                              <input
                                type="text"
                                value={phoneNumber}
                                name="phoneNumber"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="08676*****"
                                className="outline-none rounded-[5px] bg-transparent py-[8px] border-b border-[#D0D0D0] w-[296px]"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="pt-[34px] pb-[34px]">
                        <div
                          type="submit"
                          onClick={handleDataGo}
                          className="text-center bg-[#7126B5] py-[16px] px-[12px] rounded-[12px] shadow-md"
                          style={{
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          <h1 className="text-[14px] sm:text-[16px] text-[#FFFFFF]">
                            Simpan
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="border rounded-md mb-4">
              <button
                className="w-full px-4 py-2 bg-[#7126B5] text-white rounded-[8px] text-left"
                onClick={() => toggleAccordion("va")}
              >
                Virtual Account
              </button>
              {isOpen.va && (
                <div className="px-4 py-2">
                  <div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="pembayaran pt-[24px] text-[14px] sm:text-[16px]">
                        <div className="text-left">
                          <h1 className="font-medium">Bank VA</h1>
                        </div>
                        <div>
                          <form className="font-light">
                            <select
                              value={selectedBank}
                              onChange={(e) => setSelectedBank(e.target.value)}
                              className="outline-none rounded-[5px] sm:rounded-[5px] bg-transparent py-[8px] border-b border-[#D0D0D0] w-[296px] focus:bg-white"
                            >
                              <option value="">Pilih bank</option>
                              <option value="BCA">BCA</option>
                              <option value="BRI">BRI</option>
                              <option value="Mandiri">Mandiri</option>
                              <option value="BNI">BNI</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="pt-[34px] pb-[34px]">
                      <div
                        type="submit"
                        onClick={handleDataVA}
                        className="text-center bg-[#7126B5] py-[16px] px-[12px] rounded-[12px] shadow-md"
                        style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
                      >
                        <h1 className="text-[14px] sm:text-[16px] text-[#FFFFFF]">
                          Simpan
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="border rounded-md mb-4">
              <button
                className="w-full px-4 py-2 bg-[#7126B5] text-white rounded-[8px] text-left"
                onClick={() => toggleAccordion("creditCard")}
              >
                Credit Card
              </button>
              {isOpen.creditCard && (
                <div className="px-4 py-2">
                  <div>
                    <div className="flex justify-center pt-[28px] gap-[16px]">
                      <div>
                        <Mastercard />
                      </div>
                      <div>
                        <Visa />
                      </div>
                      <div>
                        <Amex />
                      </div>
                      <div>
                        <Paypal />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="pembayaran pt-[24px] text-[14px] sm:text-[16px]">
                        <div className="text-left">
                          <h1 className="font-medium">Card number</h1>
                        </div>
                        <div>
                          <form className="font-light">
                            <input
                              type="text"
                              value={cardNumber}
                              name="cardNumber"
                              onChange={(e) => setCardNumber(e.target.value)}
                              placeholder="4480 0000 0000 0000"
                              className="outline-none rounded-[5px] sm:rounded-[5px] bg-transparent py-[8px] border-b border-[#D0D0D0] w-[296px]"
                            />
                          </form>
                        </div>
                        <div className="pt-[18px] text-left">
                          <h1 className="font-medium text-left">
                            Card holder name
                          </h1>
                        </div>
                        <div>
                          <form className="font-light">
                            <input
                              type="text"
                              name="cardHolderName"
                              value={cardHolderName}
                              onChange={(e) =>
                                setCardHolderName(e.target.value)
                              }
                              placeholder="John Doe"
                              className="outline-none rounded-[5px] sm:rounded-[5px] bg-transparent py-[8px] border-b border-[#D0D0D0] w-[296px]"
                            />
                          </form>
                        </div>
                        <div className="flex justify-center gap-[32px]">
                          <div>
                            <div className="pt-[18px]">
                              <h1 className="font-medium">CVV</h1>
                            </div>
                            <div>
                              <form className="font-light">
                                <input
                                  type="text"
                                  value={cardCvv}
                                  name="cardCvv"
                                  onChange={(e) => setCardCvv(e.target.value)}
                                  placeholder="000"
                                  className="outline-none rounded-[5px] sm:rounded-[5px] bg-transparent py-[8px] border-b border-[#D0D0D0] w-[132px]"
                                />
                              </form>
                            </div>
                          </div>
                          <div>
                            <div className="pt-[18px]">
                              <h1 className="font-medium">Expiry date</h1>
                            </div>
                            <div>
                              <form className="font-light">
                                <input
                                  type="text"
                                  placeholder="07/24"
                                  className="outline-none bg-transparent py-[8px] border-b border-[#D0D0D0] w-[132px]"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-[34px] pb-[34px]">
                      <div
                        type="submit"
                        onClick={handleData}
                        className="text-center bg-[#7126B5] py-[16px] px-[12px] rounded-[12px] shadow-md"
                        style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
                      >
                        <h1 className="text-[14px] sm:text-[16px] text-[#FFFFFF]">
                          Simpan
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                <img src={Crown} alt="transferimage" />
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
                <h1 className="font-bold"> {formatDateTime(arrivalTime)}</h1>
              </div>
              <div>
                <h1 className="font-bold text-[10px] sm:text-[12px] text-[#A06ECE] pl-[158px]">
                  Kedatangan
                </h1>
              </div>
            </div>
            <div className="tanggal">
              <div>
                <h1 className="font-light">{formatDate(arrivalDate)}</h1>
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
                <h1 className="font-light">
                  {flightData.user_data.passengers.passengers_detail.child} Anak
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

export default Payment;
