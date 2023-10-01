import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    // <Link href="/cart">
    <div className="flex gap-6 items-center">
      <div className="relative w-8 h-8 md:w-6 md:h-6">
        <Image src="/cart.png" alt="cartButton" fill />
      </div>
      <span>Cart (3)</span>
    </div>
    // </Link>
  );
};

export default CartIcon;
