import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const min = 1;
const max = 5;

const Product = ({ category, image, title, description, price }) => {
  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    setRating(Math.floor(Math.random() * (max - min + 1) + min));
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="bg-white p-10 relative flex flex-col z-20">
      <h4 className="absolute right-2 top-2 text-xs text-gray-400 italic">{category}</h4>
      <div className="relative w-full h-48">
        <Image className="" src={image} layout="fill" objectFit="contain"></Image>
      </div>
      <h1 className="my-4">{title}</h1>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-3 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-3 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-gray-500 text-xs">Free Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add To Basket</button>
    </div>
  );
};

export default Product;
