/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Show = ({ text, search, setSearch, filteredData, addToCart }) => {
  return (
    <>
      <div className="text-center">
        <h1>{text}</h1>
        <input
          type="text"
          className="w-full max-w-md px-4 py-2 border-2 border-amber-400 bg-amber-100 rounded-lg text-lg outline-none transition-all focus:border-amber-500 focus:bg-amber-50 focus:ring-2 focus:ring-amber-300"
          placeholder="Search for a product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-300 m-auto">
        <ul className="grid grid-cols-4 m-auto gap-5 mt-10">
          {filteredData.map((item) => (
            <div className="" key={item.id}>
              <Link to={`/products/${item.id}`}>
                <img
                  className="w-80 rounded-xl"
                  src={
                    typeof item.images[0] === "string"
                      ? item.images[0].replace(/[\[\]\""]/g, "")
                      : "https://i.imgur.com/KIGW49u.jpeg"
                  }
                  alt={item.title}
                />
                <span className="bg-sky-100 text-xl relative bottom-8.5 left-1.5 p-1 rounded-xl">
                  {item.category.name === "chothes nag insta"
                    ? "Clothes"
                    : item.category.name}
                </span>
                <div className="flex items-center justify-between">
                  <h2 className="text-wrap text-xl w-60">{item.title}</h2>
                  <h1 className="text-2xl">${item.price}</h1>
                </div>
              </Link>
              <button
                onClick={() => addToCart(item)} // Trigger addToCart function from props
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Show;
