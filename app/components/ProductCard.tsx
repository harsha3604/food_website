"use client";

import Image from "next/image";
import { Product } from "../types/product";
import Link from "next/link";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "../context/CartContext";

export type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart, removeFromCart, isInCart } = useCart();

  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!inCart && !product.soldOut) {
      addToCart(product);
    }
  };

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div
        className="
          group
          p-4
          text-center
          overflow-hidden
          transition-shadow
          duration-300
          hover:shadow-lg
          h-[350px]
          flex
          flex-col
        "
      >
        {/* IMAGE */}
        <div className="relative w-full h-45 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 25vw"
          />

          {product.soldOut && (
            <span className="absolute top-2 right-2 bg-gray-700 text-white text-xs px-3 py-1 uppercase tracking-wide">
              Sold out
            </span>
          )}
        </div>

        {/* TITLE + PRICE */}
        <div className="mt-3 flex-grow">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-green-600 font-bold">${product.price}</p>
        </div>

        {/* HOVER REVEAL ACTION */}
        <div
          className="
            max-h-0
            opacity-0
            translate-y-2
            overflow-hidden
            transition-all
            duration-300
            ease-out
            group-hover:max-h-16
            group-hover:opacity-100
            group-hover:translate-y-0
          "
        >
          <div className="mt-2 flex items-center gap-2">
            {/* Add to Cart / Notify */}
            <button
              disabled={product.soldOut || inCart}
              onClick={handleCartClick}
              className="
                flex-1
                h-12
                rounded-md
                text-white
                transition
                disabled:bg-gray-400
                disabled:cursor-not-allowed
                bg-[#87a96b]
                hover:bg-[#87a96b]/90
                flex
                items-center
                justify-center
              "
            >
              {product.soldOut
                ? "Sold Out"
                : inCart
                ? "In Cart"
                : "Add to Cart"}
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
      </div>
    </Link>
  );
}
