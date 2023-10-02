import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div className="flex flex-wrap">
      {pizzas.map((item) => (
        <Link
          key={item.id}
          className="w-full h-[60vh] sm:w-1/2 md:w-1/3 
          border-b-2 border-r-2 border-red-400 p-4 
          flex flex-col justify-around group even:bg-fuchsia-50"
          href={`/product/${item.id}`}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}

          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold text-red-500">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden  text-2xl">₹ {item.price}</h2>
            <button className="hidden group-hover:block bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
