"use client";
import { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [shippingMethod, setShippingMethod] = useState("standard");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <a href="#" className="text-gray-600 flex items-center gap-1 mb-6">
        <IoIosArrowBack /> Back to Cart
      </a>
      
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          {/* Shipping Information */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Shipping Information</h2>
            <p className="text-gray-500 text-sm mb-4">Enter your shipping address</p>
            <div className="grid grid-cols-2 gap-4">
              <label>First Name<input type="text" className="border p-2 rounded w-full" /></label>
              <label>Last Name<input type="text" className="border p-2 rounded w-full" /></label>
              <label>Email Address<input type="email" className="border p-2 rounded w-full" /></label>
              <label>Street Address<input type="text" className="border p-2 rounded w-full" /></label>
              <label>City<input type="text" className="border p-2 rounded w-full" /></label>
              <label>State<select className="border p-2 rounded w-full">
                <option>Select state</option>
                <option>sokoto</option>
                <option>niger state</option>
                <option>Select state</option>
                </select></label>
              <label>ZIP Code<input type="text" className="border p-2 rounded w-full" /></label>
              <label>Phone Number<input type="text" className="border p-2 rounded w-full" /></label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Payment Method</h2>
            <p className="text-gray-500 text-sm mb-4">Select your preferred payment method</p>
            <div className="flex gap-4">
              <button onClick={() => setPaymentMethod("credit")} className={`p-2 rounded border ${paymentMethod === "credit" ? "border-black" : "border-gray-300"}`}>Credit Card</button>
              <button onClick={() => setPaymentMethod("paypal")} className={`p-2 rounded border ${paymentMethod === "paypal" ? "border-black" : "border-gray-300"}`}>PayPal</button>
              <button onClick={() => setPaymentMethod("apple")} className={`p-2 rounded border ${paymentMethod === "apple" ? "border-black" : "border-gray-300"}`}>Apple Pay</button>
            </div>
            {paymentMethod === "credit" && (
              <div className="mt-4 space-y-2">
                <input type="text" placeholder="Card Number" className="border p-2 rounded w-full" />
                <div className="grid grid-cols-3 gap-4">
                  <input type="text" placeholder="MM/YY" className="border p-2 rounded" />
                  <input type="text" placeholder="CVV" className="border p-2 rounded" />
                  <input type="text" placeholder="Name on Card" className="border p-2 rounded" />
                </div>
              </div>
            )}
          </div>

          {/* Shipping Method */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Shipping Method</h2>
            <p className="text-gray-500 text-sm mb-4">Select your preferred shipping method</p>
            <div className="space-y-2">
              <div className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${shippingMethod === "standard" ? "border-black" : "border-gray-300"}`} onClick={() => setShippingMethod("standard")}> 
                <input type="radio" checked={shippingMethod === "standard"} readOnly className="mr-2" />
                <span>Standard Shipping</span>
                <span>$5.99<br/><span className="text-sm text-gray-500">3-5 business days</span></span>
              </div>
              <div className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${shippingMethod === "express" ? "border-black" : "border-gray-300"}`} onClick={() => setShippingMethod("express")}> 
                <input type="radio" checked={shippingMethod === "express"} readOnly className="mr-2" />
                <span>Express Shipping</span>
                <span>$15.99<br/><span className="text-sm text-gray-500">1-2 business days</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-lg font-bold">Order Summary</h2>
          <p className="text-gray-500 text-sm mb-4">Review your order details</p>
          <div className="space-y-2">
            <div className="flex justify-between"><span>Wireless Noise-Cancelling Headphone</span><span>$249.99</span></div>
            <div className="flex justify-between"><span>Smart Fitness Tracker Watch (x2)</span><span>$259.98</span></div>
          </div>
          <hr className="my-4" />
          <p className="flex justify-between"><span>Subtotal</span> <span>$509.97</span></p>
          <p className="flex justify-between"><span>Shipping</span> <span>$5.99</span></p>
          <p className="flex justify-between"><span>Tax</span> <span>$40.80</span></p>
          <p className="flex justify-between font-bold text-lg"><span>Total</span> <span>$556.76</span></p>
          <button className="bg-black text-white w-full py-3 mt-4 rounded flex items-center justify-center gap-2">
            <FaRegCreditCard /> Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
