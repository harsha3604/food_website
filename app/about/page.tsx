import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutStorySection from "../components/AboutStorySection";
import amla from "@/public/images/about-amla.webp";
import cropland from "@/public/images/about-cropland.webp";
import custard from "@/public/images/about-custard-apple.webp";
import Image from "next/image";
export const metadata = {
  title: "About Us",
};

const HeroSection = () => {
  return (
    <section className="bg-[#f7f7f5]">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-serif text-[#87a96b] mb-6">
          Bringing Farm Freshness to Your Table
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Welcome to sree krithi farms, your local source for fresh,
          high-quality fruits and vegetables. We are dedicated to bring the farm
          produce directly to your table, ensuring you enjoy the best of what
          nature has to offer.
        </p>
      </div>
    </section>
  );
};

const OurOfferings = () => {
  return (
    <section className="bg-[#f7f7f5]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-serif text-[#87a96b] mb-4">
            Our offerings
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At sree krithi farms, we pride ourselves on providing a wide variety
            of tropical fruits, fresh produce, and leaves perfect for festivals
            and everyday enjoyment. Discover what makes our selection special.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tropical Fruits */}
          <div>
            <div className="relative w-full h-[360px] mb-6">
              <Image
                src="/images/about-mango-tree.webp"
                alt="Tropical fruits"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-3xl font-serif text-[#87a96b] mb-3">
              Tropical fruits
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Experience the exotic flavors of our carefully selected tropical
              fruits. From mangoes to papayas, we bring the taste of the tropics
              to your table.
            </p>
          </div>

          {/* Festival Leaves */}
          <div>
            <div className="relative w-full h-[360px] mb-6">
              <Image
                src="/images/about-mango-leaves.webp"
                alt="Festival leaves"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-3xl font-serif text-[#87a96b] mb-3">
              Festival leaves
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Find the perfect leaves for your festive celebrations. We offer a
              variety of traditional and essential leaves to enhance your
              special occasions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutStorySection
        imageSrc={amla}
        title="Our Story"
        description="Sree krithi farms was founded with a simple mission: to provide our community with access to the freshest, most delicious produce possible. We believe that everyone deserves to enjoy the taste and health benefits of locally grown fruits and vegetables."
        ctaText="Explore our produce"
      />
      <AboutStorySection
        imageSrc={cropland}
        title="Our Commitment"
        description="We are committed to sustainable farming practices that protect our environment and ensure the long-term health of our land. We carefully select our crops and use responsible growing methods to deliver the highest quality produce to you."
        ctaText="Contact us"
        ctaHref="/contact"
        swap
      />
      <AboutStorySection
        imageSrc={custard}
        title="Why Choose Sreekrithifarms?"
        description={
          "When you choose Sreekrithifarms, you're choosing:\n\n" +
          "• Unmatched Freshness: Produce picked at its peak and delivered directly to you.\n" +
          "• Local Support: Supporting a local farm and your community.\n" +
          "• Exceptional Quality: The finest fruits and vegetables, grown with care."
        }
      />
      <OurOfferings />
      <Footer />
    </>
  );
}
