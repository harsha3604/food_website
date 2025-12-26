"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-serif text-[#87a96b] mb-10">Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* LEFT: CART ITEMS */}
            <div className="md:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between border-b pb-6"
                >
                  {/* Product */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <Link
                      href={`/product/${item.product.id}`}
                      className="text-[#87a96b] hover:underline"
                    >
                      {item.product.name}
                    </Link>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">Quantity</span>

                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.product.id, Number(e.target.value))
                      }
                      className="border border-[#87a96b] rounded px-3 py-2 text-[#87a96b]"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        )
                      )}
                    </select>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-400 hover:text-red-500 text-xl"
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>

                  {/* Price */}
                  <div className="font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: SUMMARY */}
            <div className="border p-6 h-fit space-y-6">
              <div className="flex justify-between text-gray-600">
                <span>Free pick-up</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between text-lg font-semibold">
                <span>Total amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>

              <button className="w-full bg-[#87a96b] text-white py-3 rounded hover:opacity-90 transition">
                Go to checkout
              </button>
            </div>
          </div>
        )}

        {/* CONTINUE SHOPPING */}
        <div className="mt-10">
          <Link href="/produce" className="text-[#87a96b] hover:underline">
            « Continue shopping
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
