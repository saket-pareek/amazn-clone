import React from "react";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} class="main grid grid-cols-4 gap-y-5 p-10 xl:grid xl:grid-cols-5 xl:gap-x-10">
          <section class="image md:cols-span-1 col-span-full flex justify-center sm:col-span-2 sm:row-span-2 xl:col-span-1">
            <img class="w-36 object-contain xl:w-40" src={item.image} alt="" />
          </section>
          <section class="content md:cols-span-2 col-span-full flex-col space-y-2 text-center sm:col-span-2 sm:flex sm:text-left xl:col-span-3 xl:row-span-2">
            <h1 class="text-lg">{item.title}</h1>
            <div className="flex justify-center sm:justify-start">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
            <h4 class="text-sm line-clamp-2">{item.description}</h4>
            <div className="">
              <Currency quantity={item.price} currency="USD" />
            </div>
            {item.hasPrime && (
              <div className="flex items-center justify-center sm:justify-start space-x-3 -mt-5">
                <img className="w-16" src="https://links.papareact.com/fdw" alt="" />
                <p className="text-gray-500 text-sm">Free Next-day Delivery</p>
              </div>
            )}
          </section>
          <section class="col-span-full space-y-4 self-center sm:col-span-2 xl:col-span-1 xl:row-span-2">
            <button onClick={() => dispatch(addToBasket(item))} class="button px-2 w-full">
              Add to Cart
            </button>
            <button onClick={() => dispatch(removeFromBasket(i))} class="button px-2 w-full">
              Remove from Cart
            </button>
          </section>
        </div>
      ))}
    </div>
  );
};

export default CheckoutProduct;
