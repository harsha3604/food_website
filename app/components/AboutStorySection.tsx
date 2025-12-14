import Image, { StaticImageData } from "next/image";

interface StorySectionProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  swap?: boolean; // 👈 swap image & text
}

export default function AboutStorySection({
  imageSrc,
  title,
  description,
  ctaText,
  ctaHref = "/produce",
  swap = false,
}: StorySectionProps) {
  return (
    <section className="bg-white">
      <div
        className={`max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center`}
      >
        {/* Image */}
        <div className={`${swap ? "md:order-2" : "md:order-1"}`}>
          <Image
            src={imageSrc}
            alt={title}
            width={700}
            height={450}
            className="rounded-lg object-cover w-full h-[450px]"
            priority
          />
        </div>

        {/* Text */}
        <div className={`${swap ? "md:order-1" : "md:order-2"}`}>
          <h3 className="text-4xl font-serif text-[#87a96b] mb-6">{title}</h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {description}
          </p>

          {ctaText && (
            <a
              href={ctaHref}
              className="inline-block bg-[#87a96b] text-white px-6 py-3 rounded-md text-base transition hover:opacity-90"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
