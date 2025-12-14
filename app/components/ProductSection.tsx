import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductSection() {
  return (
    <section className="py-20">
      {/* Description */}
      <div className="max-w-5xl mx-auto mb-12 px-6 text-left">
        <h2 className="text-4xl font-serif text-[#87a96b] mb-4">
          Our commitment to quality
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At SreeKrithi Farms, we take pride in the quality of our produce. Our
          fruits and farm products are carefully grown and harvested to ensure
          they meet the highest standards.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#737373]/40">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
