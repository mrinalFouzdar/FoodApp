"use client";
import CartIcon from "@/components/CartIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const link = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working hour", url: "/" },
  { id: 4, title: "Contruct", url: "/" },
];

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  let user = false;
  return (
    <div>
      {showMenu ? (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setShowMenu(false)}
        />
      ) : (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setShowMenu(true)}
        />
      )}

      {showMenu && (
        <div className="uppercase bg-red-500 absolute text-white left-0 top-24 w-full  h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-8 z-10">
          {link.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              onClick={() => setShowMenu(false)}
            >
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setShowMenu(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setShowMenu(false)}>
              Orders
            </Link>
          )}

          <Link href="/cart" onClick={() => setShowMenu(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
