"use client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <div className="max-w-5xl mx-auto p-4">
      <a href="#" className="text-gray-600">&larr; Back to Cart</a>
      <h1 className="text-2xl font-bold text-center mt-4">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {/* Left Section - Shipping & Payment */}
        <div className="md:col-span-2 space-y-6">
          {/* Shipping Information */}
          <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Shipping Information</h2>
            <p className="text-gray-500 text-sm">Enter your shipping address</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            </div>
            <label className="block text-sm font-medium mt-4">Email Address</label>
            <input type="email" className="w-full border p-2 rounded" />

            <label className="block text-sm font-medium mt-4">Street Address</label>
            <input type="text" className="w-full border p-2 rounded" />

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">City</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <select className="w-full border p-2 rounded">
                  <option>Select state</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">ZIP Code</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            </div>
            <label className="block text-sm font-medium mt-4">Phone Number</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>

          {/* Payment Method */}
          <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Payment Method</h2>
            <p className="text-gray-500 text-sm">Select your preferred payment method</p>
            <div className="flex mt-4 border-b">
              {[
                { id: "creditCard", label: "Credit Card" },
                { id: "paypal", label: "PayPal" },
                { id: "applePay", label: "Apple Pay" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setPaymentMethod(id)}
                  className={`flex-1 p-2 text-center ${
                    paymentMethod === id ? "border-b-2 border-black font-bold" : "text-gray-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {paymentMethod === "creditCard" && (
              <div className="mt-4">
                <label className="block text-sm font-medium">Card Number</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="1234 5678 9012 3456" />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium">Expiry Date</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">CVV</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="123" />
                  </div>
                </div>
                <label className="block text-sm font-medium mt-4">Name on Card</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            )}
          </div>
        </div>

        {/* Order Summary (Right Side on Desktop, Bottom on Mobile) */}
        <div className="border p-4 rounded-lg shadow-md md:self-start">
          <h2 className="text-lg font-bold">Order Summary</h2>
          <p className="text-gray-500 text-sm">Review your order details</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span> <span>$509.97</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span> <span>$5.99</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Tax</span> <span>$40.80</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span> <span>$556.76</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500 border-t pt-2">
            Your payment information is encrypted and secure. We never store your full credit card details.
          </p>
          <button className="bg-black text-white w-full py-3 mt-4 rounded">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
