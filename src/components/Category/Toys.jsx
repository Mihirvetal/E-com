/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "../Shimmer";
import Show from "../Cart/Show";
const Toys = () => {
  const [data, setData] = useState([]);
  const [shimmer, setShimmer] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories/5/products")
      .then((res) => {
        setData(res.data);
        setShimmer(false);
        console.log(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);
  if (shimmer) {
    return <Shimmer />;
  }
  const text = "Toys";
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Show
        text={text}
        search={search}
        setSearch={setSearch}
        filteredData={filteredData}
      />
    </>
  );
};

export default Toys;
