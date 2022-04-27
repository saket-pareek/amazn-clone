import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";

const checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0">
          {/* ------------------ Left ------------------ */}
          <div className="mt-4 flex-grow mx-4">
            <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" />
            <div className="p-6 bg-white">
              <h1 className="text-3xl text-gray-900 border-b pb-6">{items.length === 0 ? "Your Amazon Basket is empty." : "Shopping Basket"}</h1>
              <CheckoutProduct />
            </div>
          </div>
          {/* ------------------ Right ----------------- */}

          {items.length > 0 ? (
            <div className="bg-white p-10">
              <div>
                {`Subtotal (${items.length}) items: `}
                <Currency quantity={total} Currency="USD" />
              </div>
              <button
                disabled={!session}
                className={`button w-full px-10 whitespace-nowrap mt-2 ${!session ? "from-gray-600 to-gray-300 cursor-not-allowed text-gray-200" : ""}`}>
                {!session ? "Sign in to Checkout" : "Proceed To Ckeckout"}
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default checkout;
