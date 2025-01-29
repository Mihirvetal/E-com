/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2></h2>;
  if (error) return <h2>{error}</h2>;
  if (!product) return <h2></h2>;

  return (
    <div className="flex flex-col items-center w-300 m-auto p-5 ">
      <img
        src={product.images?.[0] || "https://i.imgur.com/KIGW49u.jpeg"}
        alt={product.title}
        className="w-100 h-100 object-cover rounded-xl"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-lg w-150 mt-2">{product.description}</p>
      <h2 className="text-xl font-semibold mt-2">${product.price}</h2>
    </div>
  );
};

export default ProductsDetails;
