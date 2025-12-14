"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "OUR PRODUCE", href: "/produce" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Sree Krithi Farms"
            width={100}
            height={100}
            priority
          />
          <h1 className="text-4xl md:text-5xl font-serif text-[#87a96b] tracking-wide">
            Sree Krithi Farms
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-base tracking-wider text-gray-600">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <span
                key={item.label}
                className={`cursor-pointer px-5 py-2 rounded-md transition
          ${
            isActive
              ? "bg-[#87a96b] text-[#ffffff]"
              : "hover:text-[#ffffff] hover:bg-[#87a96b]"
          }`}
              >
                {item.label}
              </span>
            );
          })}

          {/* Cart placeholder */}
          <span className="relative cursor-pointer">
            🛒
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1">
              1
            </span>
          </span>
        </nav>
      </div>
    </header>
  );
}
