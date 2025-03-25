"use client";import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless noise-cancellation headphone",
      price: 249.99,
      seller: "AudioTech Pro",
      image: "/headphone.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Fitness tracker watch",
      price: 249.99,
      seller: "Asyra Regon",
      image: "/headphone.jpg",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 50.23;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <button className="text-gray-500 mb-4">&larr; Continue shopping</button>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center gap-4 border-b pb-4 mb-4"
            >
              <img src={item.image} alt={item.name} className="w-24 h-24" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">Seller: {item.seller}</p>
                <p className="font-semibold">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 border"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 border"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold mt-2">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500"
              >
                <FaTrash /> Remove
              </button>
            </div>
          ))}
          <button className="border px-4 py-2 rounded-md">View saved item</button>
        </div>
        <div className="bg-gray-100 p-4 rounded-md w-full md:w-1/3">
          <h3 className="font-bold text-lg">Order Summary</h3>
          <p className="flex justify-between mt-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </p>
          <p className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </p>
          <div className="mt-4">
            <label className="block text-sm">Shipping method</label>
            <select className="w-full border p-2 rounded-md mt-1">
              <option>Standard shipping $50.4</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm">Promo code</label>
            <div className="flex mt-1">
              <input
                type="text"
                className="w-full border p-2 rounded-l-md"
                placeholder="Enter code"
              />
              <button className="bg-gray-300 px-4 rounded-r-md">Apply</button>
            </div>
          </div>
          <button className="bg-black text-white w-full py-2 mt-4 rounded-md">
            Proceed to checkout
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Items in your cart are not reserved. Checkout now to secure your
            products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;