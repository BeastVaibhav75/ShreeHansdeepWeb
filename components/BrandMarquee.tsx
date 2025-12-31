"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const brands = [
  {
    name: "Supreme",
    logo: "https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Supreme",
  },
  {
    name: "Sleepwell",
    logo: "https://via.placeholder.com/150x80/0066cc/ffffff?text=Sleepwell",
  },
  {
    name: "Kurlon",
    logo: "https://via.placeholder.com/150x80/ff6600/ffffff?text=Kurlon",
  },
  {
    name: "Wakefit",
    logo: "https://via.placeholder.com/150x80/000000/ffffff?text=Wakefit",
  },
  {
    name: "Century",
    logo: "https://via.placeholder.com/150x80/cc0000/ffffff?text=Century",
  },
  {
    name: "Godrej",
    logo: "https://via.placeholder.com/150x80/0066cc/ffffff?text=Godrej",
  },
  {
    name: "Nilkamal",
    logo: "https://via.placeholder.com/150x80/ff0000/ffffff?text=Nilkamal",
  },
  {
    name: "Durian",
    logo: "https://via.placeholder.com/150x80/333333/ffffff?text=Durian",
  },
];

export default function BrandMarquee() {
  // Duplicate brands multiple times for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="bg-wood-50 py-12 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-2">
            Our Trusted Partners
          </h2>
          <p className="text-charcoal-600">
            Brands we work with
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-wood-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-wood-50 to-transparent z-10 pointer-events-none" />

          {/* Marquee Container */}
          <div className="overflow-hidden">
            <div className="flex gap-8 md:gap-12 animate-marquee">
              {duplicatedBrands.map((brand, index) => (
                <BrandLogo key={`${brand.name}-${index}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ brand }: { brand: { name: string; logo: string } }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex-shrink-0 w-[150px] h-[80px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
      {imageError ? (
        <div className="w-full h-full bg-charcoal-200 rounded flex items-center justify-center">
          <span className="text-charcoal-500 text-sm font-semibold">
            {brand.name}
          </span>
        </div>
      ) : (
        <Image
          src={brand.logo}
          alt={brand.name}
          width={150}
          height={80}
          className="object-contain max-w-full max-h-full"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}

