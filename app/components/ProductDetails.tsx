"use client";

import { Product } from "@/app/types/product";
import Image from "next/image";
import ProductDescription from "@/app/components/ProductDescription";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  const { addToCart, getQuantity, isInCart } = useCart();
  const [quantity, setQuantity] = useState(() =>
    isInCart(product.id) ? getQuantity(product.id) : 1
  );

  const handleWishlistClick = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT: Image */}
      <div className="relative w-full h-[420px] rounded-lg p-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* RIGHT: Details */}
      <div>
        <h1 className="text-3xl font-semibold text-[#87a96b]">
          {product.name}
        </h1>

        {product.soldOut && (
          <span className="inline-block mt-2 bg-gray-700 text-white text-sm px-3 py-1">
            Sold out
          </span>
        )}

        <p className="mt-4 text-2xl font-bold text-[#87a96b]">
          ${product.price.toFixed(2)}
        </p>

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
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded px-3 py-2 text-[#87a96b] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </select>

            <button
              disabled={product.soldOut}
              onClick={() => addToCart(product, quantity)}
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

            {/* Wishlist / Heart */}
            <button
              onClick={handleWishlistClick}
              aria-label={
                inWishlist ? "Remove from wishlist" : "Add to wishlist"
              }
              className="
                h-12
                w-12
                rounded-md
                transition
                flex
                items-center
                justify-center
                bg-transparent
                hover:bg-gray-100
              "
              style={{
                borderColor: inWishlist ? "#ef4444" : "#87a96b",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill={inWishlist ? "#ef4444" : "none"}
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke={inWishlist ? "#ef4444" : "#87a96b"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 w-full h-px bg-gray-300 opacity-50" />

        <ProductDescription sections={product.description} />
      </div>
    </div>
  );
}
