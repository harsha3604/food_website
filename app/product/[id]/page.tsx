import { products } from "@/app/data/products";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProductDetails from "@/app/components/ProductDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="p-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-700">
            Product not found
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </>
  );
}
