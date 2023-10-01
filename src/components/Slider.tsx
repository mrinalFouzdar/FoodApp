"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crspy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we dleiver your order wherever you ar in IND",
    image: "/slide2.png",
  },
];

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

//   useEffect(() => {
//     const Interval = setInterval(
//       () => setSliderIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
//       2000
//     );
//     return () => clearInterval(Interval);
//   }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] mid:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
        {/* TEXT CONTAINER */}

      <div className="flex-1 flex justify-center items-center flex-col gap-8 font-bold text-red-500 ">
        <h1 className="text-5xl text-center px-2 uppercase md:p-10 md:text-6xl xl:text-7xl">
            {data[sliderIndex].title}
        </h1>
        <button className="bg-red-500 text-white text-xl px-4 py-2 rounded-md cursor-pointer">
          Order Now
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative ">
        <Image src={data[sliderIndex].image} alt="slid" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Slider;
