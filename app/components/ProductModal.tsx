"use client";

import Image from "next/image";
import { Product } from "../types/product";
import ProductDescription from "./ProductDescription";

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      {/* Modal Card */}
      <div className="relative bg-white max-w-5xl w-full mx-6 rounded-xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* LEFT: Image */}
          <div className="relative w-full h-[400px] bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain rounded-md"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col gap-4">
            {/* Product Name */}
            <h2 className="text-3xl font-serif text-[#87a96b]">
              {product.name}
            </h2>

            {/* Price */}
            <p className="text-2xl font-semibold text-[#87a96b]">
              ${product.price.toFixed(2)}
            </p>

            {/* Sold Out Badge */}
            {product.soldOut && (
              <span className="inline-block bg-gray-700 text-white text-sm px-3 py-1 w-fit">
                Sold out
              </span>
            )}

            {/* Actions */}
            <div className="mt-6 space-y-4">
              {/* SOLD OUT STATE */}
              {product.soldOut && (
                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-sm mb-3 text-gray-700">
                    Let me know when this product is back in stock.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 border px-3 py-2 rounded focus:outline-none"
                    />
                    <button className="bg-[#87a96b] text-white px-4 rounded">
                      Send
                    </button>
                  </div>
                </div>
              )}

              {/* BUY / WISHLIST ROW */}
              <div className="flex items-center gap-4">
                {/* Quantity Dropdown */}
                <select
                  disabled={product.soldOut}
                  className="border rounded px-3 py-2 text-[#87a96b] disabled:opacity-50 disabled:cursor-not-allowed"
                  defaultValue={1}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>

                {/* Buy Button */}
                <button
                  disabled={product.soldOut}
                  className={`px-6 py-2 rounded text-white font-medium transition
                    ${
                      product.soldOut
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#87a96b] hover:opacity-90"
                    }
                  `}
                >
                  {product.soldOut ? "Out of Stock" : "Buy"}
                </button>

                {/* Wishlist Button */}
                <button
                  aria-label="Add to wishlist"
                  className="p-2 rounded border border-[#87a96b] text-[#87a96b] hover:bg-[#87a96b]/10 transition"
                >
                  ♥
                </button>
              </div>
            </div>
            <div className="w-full h-px bg-gray-400 opacity-50" />
            <ProductDescription sections={product.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
