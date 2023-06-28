import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPayconfirm } from "../redux/actions/payconfirmActions";

const PayConfirm = () => {
  const [photo_confirmation, setPhoto_confirmation] = useState();
  const dispatch = useDispatch();
  const handleData = (e) => {
    e.preventDefault();
    const payconfirm = {
      booking_code: "6I5HVLUD",
      photo_confirmation: photo_confirmation,
    };
    dispatch(getPayconfirm(payconfirm));
  };
  return (
    <div>
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
              Selesaikan Pembayaran sampai 10 Maret 2023 12:00
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center sm:flex-row gap-[16px] pt-[30px] sm:w-full sm:justify-center sm:items-start xl:px-[285px]">
        <div className="pembayaran">
          <div className="px-[16px] sm:w-[518px]">
            <div className="data_pembayaran text-[18px] sm:text-[20px]">
              <h1 className="font-bold">Isi Bukti Pembayaran</h1>
            </div>
            <div class="flex items-center justify-center w-full pt-[16px]">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
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
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
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
              <h1 className="font-bold">Booking Code: </h1>
            </div>
            <div>
              <h1 className="font-bold text-[#7126B5]">6723y2GHK</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-[14px] sm:text-[16px]">07.00</h1>
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
                3 Maret 2023
              </h1>
            </div>
          </div>
          <div className="bandara-term">
            <h1 className="font-medium text-[12px] sm:text-[14px]">
              Soekarno Hatta - Terminal 1A Domestik
            </h1>
          </div>
          <div className="line pt-[16px]">
            <div className="border-[1px] border-[#D0D0D0]"></div>
          </div>
          <div className="pt-[8px] flex jutify-between items-center gap-[8px] text-[12px] sm:text-[14px]">
            <div className="informasi">
              <div>
                <h1 className="font-bold text-[#151515]">Jet Air - Economy</h1>
              </div>
              <div>
                <h1 className="font-bold text-[#151515]">JT - 203</h1>
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
                  <h1 className="font-light">In Flight Entertainment</h1>
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
                <h1 className="font-bold">11.00</h1>
              </div>
              <div>
                <h1 className="font-bold text-[10px] sm:text-[12px] text-[#A06ECE] pl-[158px]">
                  Keberangkatan
                </h1>
              </div>
            </div>
            <div className="tanggal">
              <div>
                <h1 className="font-light">3 Maret 2023</h1>
              </div>
            </div>
            <div className="bandara-term">
              <h1 className="font-medium">Melbourne International Airport</h1>
            </div>
          </div>
          <div className="line pt-[16px]">
            <div className="border-[1px] border-[#D0D0D0]"></div>
          </div>
          <div className="pt-[8px] text-[12px] sm:text-[14px]">
            <div>
              <h1 className="font-bold =">Rincian Harga</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="font-light">2 Adults</h1>
                <h1 className="font-light">1 Baby</h1>
                <h1 className="font-light">Text</h1>
              </div>
              <div className="text-end">
                <h1 className="font-light">IDR 9.550.000</h1>
                <h1 className="font-light">IDR 0</h1>
                <h1 className="font-light">IDR 300.000</h1>
              </div>
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
                IDR 9.850.000
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayConfirm;
