"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../types/product";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string | number) => void;
  getQuantity: (productId: string | number) => number;
  updateQuantity: (productId: string | number, quantity: number) => void;
  isInCart: (productId: string | number) => boolean;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Use lazy initialization to load from localStorage only once
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error("Error loading cart:", error);
        return [];
      }
    }
    return [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, quantity }];
    });
  };

  const getQuantity = (productId: string | number) => {
    const item = cart.find(
      (item) => String(item.product.id) === String(productId)
    );
    return item ? item.quantity : 1;
  };

  const updateQuantity = (productId: string | number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string | number) => {
    setCart((prev) =>
      prev.filter((item) => String(item.product.id) !== String(productId))
    );
  };

  const isInCart = (productId: string | number) => {
    return cart.some((item) => String(item.product.id) === String(productId));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getQuantity,
        removeFromCart,
        updateQuantity,
        isInCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCat must be used within a CartProvider");
  }
  return context;
}
