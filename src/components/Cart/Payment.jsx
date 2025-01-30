/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useCart } from "../Cart/CartContext";

const Payment = () => {
  const { cart } = useCart();

  const totalValue = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve();
        script.onerror = () => reject("Failed to load Razorpay script.");
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript()
      .then(() => {
        const options = {
          key: "rzp_test_SrQbLc4p6dZyNg",
          amount: totalValue * 100,
          currency: "INR",
          name: "Sasta Bazaar",
          description: "Payment",
          image:
            "https://i.pinimg.com/736x/6f/30/3b/6f303b63aae1b7307a9436e276f7869f.jpg",
          handler: function (response) {
            alert(
              `Payment successful! Payment ID: ${response.razorpay_payment_id}`
            );
          },
          prefill: {
            name: "HathiRam Choudhary",
            email: "hathiramchoudhary01@example.com",
            contact: "9876543210",
          },
          notes: {
            address: "address for order delivery",
          },
          theme: {
            color: "#F37254",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      })
      .catch((error) => {
        alert(error);
      });
  }, [totalValue]);

  return (
    <div>
      <h2 className="text-center text-3xl">Proceed with Payment</h2>
      <p className="text-center">Total: ₹{totalValue}</p>
    </div>
  );
};

export default Payment;
