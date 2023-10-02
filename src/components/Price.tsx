"use client";
import React, { useState, useEffect } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuanity] = useState(1);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[select].additionalPrice : price)
    );
  }, [quantity,select, options,price]);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl"> ₹ {total.toFixed(2)}</h2>

      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="p-2 ring-1 ring-red-500 rounded-md cursor-pointer min-w-[6rem]"
            style={{
              backgroundColor: index === select ? "rgb(239 68 68)" : "white",
              color: index === select ? "white" : "rgb(239 68 68)",
            }}
            onClick={() => setSelect(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/*   QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuanity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuanity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="bg-red-500 w-56 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
function useEfect(arg0: any) {
  throw new Error("Function not implemented.");
}
