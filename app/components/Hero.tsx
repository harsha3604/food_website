export default function Hero() {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-farm.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Taste the Goodness of Nature
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Welcome to Sreekrithifarms, your local source for the freshest fruits
          and vegetables. We are committed to bringing the best of the farm to
          your table, ensuring quality and taste in every bite.
        </p>

        <button className="bg-[#87a96b] transition px-6 py-3 rounded-md text-sm font-medium">
          Explore our produce
        </button>
      </div>
    </section>
  );
}
