"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { Product } from "../types/product";

export default function ProductSection() {
  return (
    <section className="py-20 relative">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12 px-6 text-left">
        <h2 className="text-4xl font-serif text-[#87a96b] mb-4">
          Our commitment to quality
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At SreeKrithi Farms, we take pride in the quality of our produce.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
