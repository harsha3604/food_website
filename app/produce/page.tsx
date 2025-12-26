import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
export const metadata = {
  title: "Our Produce",
};

const ExploreProducts = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#87a96b] mb-6">
          Explore our products
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-5xl">
          Our carefully curated selection of products is designed to cater to
          your specific needs and preferences. Each item in our collection
          represents our commitment to quality, functionality, and style. Browse
          through our offerings to find detailed descriptions, features, and
          specifications that help you make informed choices. Whether you are
          looking for everyday essentials, specialized items, or something
          unique, we have something to suit every taste and requirement.
        </p>
      </div>
    </section>
  );
};

export default function ProducePage() {
  return (
    <>
      <Navbar />
      <ExploreProducts />
      <section className="py-20">
        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
