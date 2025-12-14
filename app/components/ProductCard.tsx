import Image from "next/image";
import { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border-r border-b border-[#737373]/40 p-6 text-center">
      <div className="relative w-full h-40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-green-600 font-bold">${product.price}</p>
      <button className="mt-2 bg-green-700 text-white w-full py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
}
