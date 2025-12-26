"use client";

import { useWishlist } from "@/app/context/WishlistContext";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif text-[#87a96b] mb-8">
            My Wishlist
          </h1>
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-6">Your wishlist is empty</p>
            <Link
              href="/produce"
              className="inline-block px-8 py-3 bg-[#87a96b] text-white rounded-md hover:bg-[#87a96b]/90 transition"
            >
              Browse Products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif text-[#87a96b] mb-8">
          My Wishlist ({wishlist.length})
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/product/${product.id}`} className="block">
                <ProductCard key={product.id} product={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
