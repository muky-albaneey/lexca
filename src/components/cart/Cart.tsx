"use client";
import Image from "next/image";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Wireless noise-cancellation headphone",
    seller: "AudioTech Pro",
    price: 249.99,
    image: "/cart.svg",
  },
  {
    id: 2,
    name: "Smart Fitness tracker watch",
    seller: "asyra regon",
    price: 249.99,
    image: "/cart.svg",
  },
];

export default function Cart() {
  const [quantities, setQuantities] = useState(products.map(() => 1));
  const [isSavedItemsOpen, setIsSavedItemsOpen] = useState(false);

  const updateQuantity = (index, amount) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q + amount) : q))
    );
  };

  const subtotal = products.reduce(
    (sum, p, i) => sum + p.price * quantities[i],
    0
  );
  const shipping = 50.23;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <a href="#" className="text-gray-600">&larr; Continue shopping</a>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center border-b py-4 gap-4"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={542}
                height={112}
                className="object-cover rounded-lg md:hidden"
              />
              <Image
                src={product.image}
                alt={product.name}
                width={112}
                height={112}
                className="object-cover rounded-lg hidden md:block"
              />
              <div className="flex md:items-center md:justify-between md:flex-row flex-col">
                <section className="flex-[2]">
                  <h3>Product</h3>
                  <h2 className="md:text-lg text-3xl font-semibold">{product.name}</h2>
                  <p className="text-gray-500 text-sm">Seller: {product.seller}</p>
                </section>

                <section className="flex-1 md:text-center">
                  <span>Price</span>
                  <p className="font-semibold mt-2">${product.price.toFixed(2)}</p>
                </section>

                <section className="md:text-center w-[5rem]">
                  <h3>Quantity</h3>
                  <div className="flex items-center justify-center mt-2 border rounded">
                    <button onClick={() => updateQuantity(index, -1)}> - </button>
                    <span className="mx-3">{quantities[index]}</span>
                    <button onClick={() => updateQuantity(index, 1)}> + </button>
                  </div>
                </section>

                <section className="flex-1 md:text-right md:relative md:top-8 gap-4 flex flex-col">
                  <p className="font-semibold ">${(product.price * quantities[index]).toFixed(2)}</p>
                  <button className="text-red-500 flex items-center gap-1 md:ml-6">
                    <FaTrash /> Remove
                  </button>
                </section>
              </div>
            </div>
          ))}
          <h2 className="font-semibold mt-6">Saved for later (2)</h2>
          <button className="border px-4 py-2 mt-2" onClick={() => setIsSavedItemsOpen(true)}>
            View saved item
          </button>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Your Cart ({products.length})</h2>
          <div className="mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping</span> <span>${shipping.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-500">
              <span>Tax (%8)</span> <span>${tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-bold text-lg">
              <span>Total</span> <span>${total.toFixed(2)}</span>
            </p>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Shipping method</label>
            <select className="w-full border p-2 mt-1 rounded">
              <option>Standard shipping $50.4</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Promo code</label>
            <div className="flex mt-1">
              <input type="text" className="border p-2 flex-1 rounded-l" />
              <button className="bg-gray-200 px-4 rounded-r">Apply</button>
            </div>
          </div>
          <button className="bg-black text-white w-full py-3 mt-4 rounded">
            Proceed to checkout
          </button>
          <p className="mt-2 text-sm text-gray-500 border-t pt-2">
            Items in your cart are not reserved. Checkout now to secure your products.
          </p>
        </div>
      </div>

      {/* Saved Items Modal */}
      <div style={{ background:'rgba(0,0,0,.6)' }} className={`fixed inset-0 transition-opacity ${isSavedItemsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
           onClick={() => setIsSavedItemsOpen(false)}>
      </div>

      <div className={`fixed top-0 right-0 h-full w-60 md:w-96 bg-white shadow-xl transition-transform transform ${isSavedItemsOpen ? "translate-x-0" : "translate-x-full"}`}
           style={{ transition: "transform 0.3s ease-in-out" }}>
        <div className="p-4">
          <h2 className="text-lg font-bold">Saved for later</h2>
          <p className="text-sm text-gray-500">Items you've saved for a future purchase.</p>
          
          <button className="absolute top-3 right-4 text-gray-600" onClick={() => setIsSavedItemsOpen(false)}>✕</button>

          {/* Saved Items List */}
          <div className="mt-4 space-y-4">
            {[
              { id: 1, name: "Portable bluetooth speaker", price: 79.99, image: "/cart.svg" },
              { id: 2, name: "Ergonomic office chair", price: 100.34, image: "/cart.svg" },
            ].map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-2">
                <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <button className="text-red-500">✕</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
