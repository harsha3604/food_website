"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../types/product";

type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string | number) => void;
  isInWishlist: (productId: string | number) => boolean;
  wishlistCount: number;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  // Use lazy initialization to load from localStorage only once
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem("wishlist");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error("Error loading wishlist:", error);
        return [];
      }
    }
    return [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId: string | number) => {
    setWishlist((prev) =>
      prev.filter((item) => String(item.id) !== String(productId))
    );
  };

  const isInWishlist = (productId: string | number) => {
    return wishlist.some((item) => String(item.id) === String(productId));
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
