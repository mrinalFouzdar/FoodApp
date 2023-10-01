import Menu from "@/app/menu/page";
import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  let user = false;
  return (
    <div className="h-12 text-red-500 p-4  flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINK */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Working Hours</Link>
      </div>


      <div className="md:font-bold flex-1 md:text-center text-xl">
        <Link href="/">FOOD House</Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIFGT LINK */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-3 px-2 py-1 bg-orange-300 cursor-pointer  rounded-md">
          <Image src='/phone.png' alt="phone" width={20} height={20}/>
          <span>903993839</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
