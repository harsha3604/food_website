"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "OUR PRODUCE", href: "/produce" },
    { label: "CONTACT", href: "/contact" },
    { label: "WISHLIST", href: "/wishlist" },
    { label: "CART", href: "/cart" },
  ];

  const renderNavItem = (item: { label: string; href: string }) => {
    const isActive = pathname === item.href;

    switch (item.href) {
      case "/wishlist":
        return (
          <Link key={item.href} href={item.href} className={navClass(isActive)}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  fill="currentColor"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full min-w-[20px] h-[20px] flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
        );

      case "/cart":
        return (
          <Link key={item.href} href={item.href} className={navClass(isActive)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
              className="w-6 h-6"
              aria-hidden="true"
            >
              {/* Wheels */}
              <path
                d="M1096.71 1551.55c0 48.546-19.683 92.508-51.502 124.331-31.817 31.82-75.772 51.506-124.317 51.506-48.484 0-92.398-19.72-124.247-51.602-31.804-31.833-51.451-75.766-51.451-124.236 0-48.487 19.644-92.415 51.44-124.243 31.851-31.881 75.77-51.595 124.258-51.595 48.55 0 92.51 19.677 124.33 51.5 31.811 31.816 51.49 75.773 51.49 124.338z"
                fill="currentColor"
              />
              <path
                d="M1008.8 1551.55c0 24.265-9.837 46.238-25.742 62.144-15.903 15.904-37.872 25.744-62.136 25.744-24.234 0-46.183-9.856-62.102-25.792-15.897-15.91-25.716-37.87-25.716-62.096 0-24.235 9.818-46.19 25.71-62.099 15.92-15.935 37.872-25.788 62.108-25.788 24.266 0 46.238 9.835 62.142 25.74 15.901 15.903 25.736 37.874 25.736 62.147z"
                fill="currentColor"
              />

              <path
                d="M1551.82 1551.55c0 48.546-19.683 92.508-51.502 124.331-31.817 31.82-75.772 51.506-124.317 51.506-48.484 0-92.398-19.72-124.247-51.602-31.804-31.833-51.451-75.766-51.451-124.236 0-48.487 19.644-92.415 51.44-124.243 31.851-31.881 75.77-51.595 124.258-51.595 48.55 0 92.51 19.677 124.33 51.5 31.811 31.816 51.49 75.773 51.49 124.338z"
                fill="currentColor"
              />
              <path
                d="M1463.91 1551.55c0 24.265-9.837 46.238-25.742 62.144-15.902 15.904-37.872 25.744-62.136 25.744-24.233 0-46.183-9.856-62.102-25.792-15.896-15.91-25.716-37.87-25.716-62.096 0-24.235 9.818-46.19 25.71-62.099 15.92-15.935 37.872-25.788 62.108-25.788 24.266 0 46.238 9.835 62.142 25.74 15.901 15.903 25.736 37.874 25.736 62.147z"
                fill="currentColor"
              />

              {/* Cart body */}
              <path
                d="m295.859 320.612 204.466 80.375 162.417 801.508h81.559l-64.108 207.325c-4.96 15.992 7.01 32.3 23.754 32.3h44.705v64h-44.705c-48.89 0-84.41-46.63-69.53-94.31l38.47-124.12c-35.4-3.6-57.17-26.27-63.61-61.47L460.54 453.987l-187.931-73.875 23.25-59.5z"
                fill="currentColor"
              />

              {/* Basket */}
              <path
                d="m561.441 444.597 1172.7 50.967c22.089 12.12 37.505 34.238 41.255 59.146l-237.924 703.264c-13.668 9.964-30.267 15.709-47.76 15.709H746.46L561.441 444.597z"
                fill="currentColor"
              />
              <path
                d="m1168.42 470.977 565.721 24.587c22.089 12.12 37.505 34.238 41.255 59.146l-237.924 703.264c-13.668 9.964-30.267 15.709-47.76 15.709H1168.42V470.977z"
                fill="currentColor"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full min-w-[20px] h-[20px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        );

      default:
        return (
          <Link key={item.href} href={item.href} className={navClass(isActive)}>
            {item.label}
          </Link>
        );
    }
  };

  const navClass = (isActive = false) =>
    `px-5 py-2 rounded-md transition relative
     ${
       isActive
         ? "bg-[#87a96b] text-white"
         : "hover:bg-[#87a96b] hover:text-white text-gray-600"
     }`;

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Sree Krithi Farms" width={100} height={100} />
          <h1 className="text-4xl md:text-5xl font-serif text-[#87a96b]">
            Sree Krithi Farms
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-base tracking-wider">
          {navItems.map(renderNavItem)}
        </nav>
      </div>
    </header>
  );
}
