"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const brands = [
  {
    name: "Supreme",
    logo: "/images/brands/supreme.png",
    fallbackColor: "#1a1a1a",
  },
  {
    name: "Nilkamal",
    logo: "/images/brands/nilkamal.jpg",
    fallbackColor: "#ff0000",
  },
  {
    name: "Godrej",
    logo: "/images/brands/Godrej.png",
    fallbackColor: "#0066cc",
  },
  {
    name: "Durian",
    logo: "/images/brands/durian.svg",
    fallbackColor: "#333333",
  },
  {
    name: "Sleepwell",
    logo: "/images/brands/Sleepwell.svg",
    fallbackColor: "#0066cc",
  },
  {
    name: "Kurlon",
    logo: "/images/brands/kurlon.png",
    fallbackColor: "#ff6600",
  },
  {
    name: "Wakefit",
    logo: "/images/brands/wakefit.png",
    fallbackColor: "#000000",
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

function BrandLogo({ brand }: { brand: { name: string; logo: string; fallbackColor: string } }) {
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(brand.logo);

  // Try different image formats
  const imageFormats = [
    brand.logo,
    brand.logo.replace('.png', '.jpg'),
    brand.logo.replace('.png', '.jpeg'),
    brand.logo.replace('.png', '.svg'),
    brand.logo.replace('.png', '.webp'),
  ];

  const tryNextImage = () => {
    const currentIndex = imageFormats.indexOf(currentSrc);
    if (currentIndex < imageFormats.length - 1) {
      setCurrentSrc(imageFormats[currentIndex + 1]);
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  // Generate SVG fallback
  const svgFallback = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="150" height="80" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="80" fill="${brand.fallbackColor}" rx="8"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" font-weight="bold" 
            fill="white" text-anchor="middle" dominant-baseline="middle">${brand.name}</text>
    </svg>
  `)}`;

  return (
    <div className="flex-shrink-0 w-[150px] h-[80px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
      {imageError ? (
        <img
          src={svgFallback}
          alt={`${brand.name} logo`}
          className="object-contain max-w-full max-h-full"
        />
      ) : (
        <Image
          src={currentSrc}
          alt={`${brand.name} logo`}
          width={150}
          height={80}
          className="object-contain max-w-full max-h-full"
          onError={tryNextImage}
          unoptimized
        />
      )}
    </div>
  );
}

