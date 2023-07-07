import React from "react";
import { ReactComponent as Illustration } from "../assets/illustration.svg";
import { useNavigate } from "react-router";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pt-[27px] sm:pt-[47px] pb-[20px] px-[50px] sm:px-[100px] xl:px-[260px] shadow-md">
        <div className="text-stage flex gap-[8px] text-[16px] sm:text-[20px]">
          <h1 className="font-bold text-[#8A8A8A]">Isi Data Diri</h1>
          <h1 className="font-bold text-[#8A8A8A]">{">"}</h1>
          <h1 className="font-bold text-[#8A8A8A]">Bayar</h1>
          <h1 className="font-bold text-[#8A8A8A]">{">"}</h1>
          <h1 className="font-bold">Selesai</h1>
        </div>
        <div className="flex items-center py-[10px] px-[16px]">
          <div className="rounded-[12px] bg-[#73CA5C] px-[25px] py-3 w-[936px] items-center">
            <h1 className="text-white font-medium text-center text-[16px] sm:text-[20px]">
              Terimakasih atas pembayaran transaksi
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-[90px]">
        <div className="sm:px-[285px] flex flex-col items-center">
          <div>
            <div className="w-[204px]">
              <Illustration />
            </div>
          </div>
          <div className="text-center pt-[18px] text-[12px] sm:text-[14px]">
            <div>
              <h1 className="text-[#7126B5]">Selamat!</h1>
            </div>
            <div>
              <h1>Transaksi Pembayaran Tiket sukses!</h1>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-[12px] text-[14px] sm:text-[16px]">
            <div className="pt-[32px]">
              <div
                className="w-[347px] text-center bg-[#7126B5] py-[16px] px-[12px] rounded-[12px] shadow-md"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
                onClick={() => navigate("/history")}
              >
                <h1 className="text-[#FFFFFF]">Terbitkan Tiket</h1>
              </div>
            </div>
            <div className="pt-[5px] sm:pt-[10px] pb-[132px]">
              <div
                className="w-[347px] text-center bg-[#D0B7E6] py-[16px] px-[12px] rounded-[12px] shadow-md"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
                onClick={() => navigate("/")}
              >
                <h1 className="text-[#FFFFFF]">Cari Penerbangan Lain</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
