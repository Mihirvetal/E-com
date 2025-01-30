/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import Payment from "../Cart/Payment";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalValue = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-center text-3xl">Add Some Product!</p>
      ) : (
        <div className="w-300 m-auto">
          <ul className="grid grid-cols-4 m-auto gap-5 mt-10">
            {cart.map((item) => (
              <div
                key={item.id}
                className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-50 rounded-lg"
              >
                <img
                  className="w-80 rounded-xl"
                  src={
                    typeof item.images[0] === "string"
                      ? item.images[0].replace(/[\[\]\""]/g, "")
                      : "https://i.imgur.com/KIGW49u.jpeg"
                  }
                  alt={item.title}
                />
                <div className="flex items-center justify-between">
                  <h2 className="text-wrap text-xl w-60">{item.title}</h2>
                  <h1 className="text-2xl">${item.price}</h1>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </ul>
          <div className="mt-4 text-xl">
            <p className="text-center">Total: ${totalValue.toFixed(2)}</p>
          </div>
          <h1 className="hidden"><Payment  amount={totalValue.toFixed(2)}/></h1>
          <div className="flex justify-center mt-4">
            <Link to="/payment">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Checkout
              </button>
            </Link>
          </div>
          <button
            onClick={clearCart}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
