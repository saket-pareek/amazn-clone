import React from "react";
import Image from "next/image";
import { SearchIcon, ShoppingCartIcon, MenuIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const router = useRouter();
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  return (
    <header>
      {/* ------------------------------------------ */}
      {/*                   Top Nav                  */}
      {/* ------------------------------------------ */}
      <div className="flex items-center bg-amazon_blue py-2 text-white">
        {/* ------------------ Logo ------------------ */}
        <div className="mt-3 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => {
              router.push("/");
            }}
            className="cursor-pointer"
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
          />
        </div>
        {/* ----------------- Search ----------------- */}
        <div className="hidden sm:flex flex-grow bg-yellow-400 hover:bg-yellow-500 rounded-md h-10 items-center text-black cursor-pointer">
          <input type="text" className="focus:outline-none h-full p-2 w-6 flex-grow flex-shrink rounded-l-md px-4" />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* ------------------ Links ----------------- */}
        <div className="flex items-center space-x-4 px-4 lg:space-x-8 lg:px-6 text-xs md:text-sm whitespace-nowrap">
          <div
            onClick={() => {
              !session ? signIn() : signOut();
            }}
            className="link">
            <p className="capitalize">{session ? `Hello, ${session.user.name}` : `Sign In`}</p>
            <p className="font-extrabold">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold">& Orders</p>
          </div>
          <div
            onClick={() => {
              router.push("/checkout");
            }}
            className="link relative flex items-center">
            <div className="absolute right-0 md:right-6 -top-1 rounded-full bg-yellow-400 w-4 h-4 lg:w-5 lg:h-5 flex justify-center items-center text-black text-xs font-semibold">
              {items.length}
            </div>
            <ShoppingCartIcon className="h-8 lg:h-10" />
            <p className="hidden md:inline-flex mt-2 font-extrabold">Cart</p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------ */}
      {/*                 Bottom Nav                 */}
      {/* ------------------------------------------ */}
      <div className="bottom-nav flex bg-amazon_blue-light px-4 py-2 text-white">
        <ul className="list flex items-center space-x-4">
          <li className="link flex items-center">
            <MenuIcon className="h-3 sm:h-4 lg:h-6 mr-1" />
            All
          </li>
          <li className="link">Prime Video</li>
          <li className="link">Amazon Business</li>
          <li className="link">Today's Deals</li>
          <li className="link hidden lg:inline-flex">Electronics</li>
          <li className="link hidden lg:inline-flex">Food & Grocery</li>
          <li className="link hidden lg:inline-flex">Prime</li>
          <li className="link hidden lg:inline-flex">Buy Again</li>
          <li className="link hidden lg:inline-flex">Shopper Toolkit</li>
          <li className="link hidden lg:inline-flex">Electronics</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
