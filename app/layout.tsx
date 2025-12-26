import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { WishlistProvider } from "@/app/context/WishlistContext";
import { CartProvider } from "./context/CartContext";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Sree Krithi Farms",
    template: "%s | Sree Krithi Farms",
  },
  description:
    "Fresh farm produce, tropical fruits, and festival leaves from Sree Krithi Farms.",
  icons: "logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="font-sans">
        <CartProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
