import React from "react";
import ChoosePlan from "../Components/ChoosePlan";

function Home() {
  const cardData = [
    {
      from: "Jakarta",
      to: "Denpasar-Bali Island",
      img: "https://images.pexels.com/photos/4553367/pexels-photo-4553367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      airline: "Garuda Indonesia",
      price: "800.000",
      banner: "Limited!",
      dateRange: "20 - 30 March",
    },
    {
      from: "Jakarta",
      to: "Mataram",
      img: "https://images.pexels.com/photos/4741215/pexels-photo-4741215.jpeg?auto=compress&cs=tinysrgb&w=1600",
      airline: "Garuda Indonesia",
      price: "800.000",
      banner: "50% OFF",
      dateRange: "20 - 30 March",
    },
  ];

  return (
    <div>
      {/* PURPLE TAPE */}
      <div className="xl:mt-24 lg:mt-[50px] sm:mt-[30px] mt-[56px] w-screen h-[150px]  bg-gradient-to-r from-violet-800/50 to-violet-200 flex justify-center items-center">
        {/* DISCOUNT BANNER */}
        <div className="w-[1213px] h-48 md:h-[232px] xl:rounded-[20px] lg:rounded-none bg-white relative overflow-hidden">
          {/* TITTLE BANNER */}
          <div className="w-full h-full flex flex-col justify-center md:justify-start absolute bg-gradient-to-r from-orange-100 to-orange-50/30 font-bold text-center md:text-left text-2xl md:text-4xl italic md:pl-[63px] md:pt-[45px]">
            <h1 className="text-neutral-700 leading-snug drop-shadow-[0_35px_0_35px_rgba(0,0,0,0.25)]">
              Grab Your Tickets Now <br /> And
              <span className="text-purple-800"> Unlock Up to 85% OFF!</span>
            </h1>
          </div>
          {/* TITTLE IMAGE */}
          <div className="w-full h-full flex">
            {/* <div className="w-1/3" /> */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/3140205/pexels-photo-3140205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* CARD CHOOSE PLAN */}
      <div className="mx-auto max-w-[968px]">
        <ChoosePlan />
      </div>

      {/* Favorite Destination */}
      <div className="my-6 mx-4 md:mx-auto max-w-[968px]">
        <h2 className="font-semibold text-neutral-700 text-lg md:text-2xl mb-3">
          Favorite Destination
        </h2>
        {/* Selector Button */}
        <div className="flex mb-5 gap-2.5 md:gap-4">
          {/* Map Button Here */}
          <button className=" py-3 md:py-[14px] px-4 md:px-[24px] text-xs md:text-base bg-purple-800 text-white font-semibold rounded-lg">
            Semua
          </button>
          <button className=" py-3 md:py-[14px] px-4 md:px-[24px] text-xs md:text-base bg-violet-300/50 text-purple-900 font-medium rounded-lg">
            Asia
          </button>
        </div>
        {/* Destination Cards */}
        <div className="flex gap-4 md:gap-6 ">
          {/* Map Card Here */}
          {cardData.map((data, key) => (
            <div
              key={key}
              className=" w-40 md:w-[180px] h-48 md:h-[200px] p-2 shadow-[0_0_6px_rgba(0,0,0,0.1)] md:shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-lg flex flex-col"
            >
              {/* Image */}
              <div
                className="w-full h-full flex justify-end bg-cover bg-center rounded-md overflow-hidden"
                style={{
                  backgroundImage: `url(${data.img})`,
                }}
              >
                {/* Tag */}
                <div className="h-fit bg-purple-700/50 text-white font-semibold md:font-medium py-[4px] pl-4 md:pl-[22px] pr-[10px] rounded-l-full text-[11px] md:text-[13px] mt-1">
                  Limited!
                </div>
              </div>
              <div className="w-full h-fit flex flex-col gap-[2px] mt-1">
                <h1 className="text-xs md:text-[14px] font-medium truncate">
                  {data.from} -&gt; {data.to}{" "}
                </h1>
                <p className="text-[9px] md:text-[10px] font-bold text-purple-700">
                  AirAsia
                </p>
                <p className="text-[10px] md:text-[11px] text-neutral-400 font-medium">
                  20 - 30 March 2023
                </p>
                <p className="text-[12px] md:text-[13px]">
                  Start From{" "}
                  <span className="text-red-500 font-semibold">
                    IDR 950.000
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
