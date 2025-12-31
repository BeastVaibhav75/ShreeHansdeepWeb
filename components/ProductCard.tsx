"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Generate placeholder based on product category
  const getPlaceholderImage = () => {
    const categoryMap: Record<string, string> = {
      "home-furniture": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "office-furniture": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "industrial": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      "custom-woodwork": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop",
      "metal-works": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    };
    return categoryMap[product.category] || "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop";
  };

  const imageSrc = imageError || !product.image.startsWith("/") 
    ? getPlaceholderImage() 
    : product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-64 bg-gradient-to-br from-wood-200 to-wood-400 overflow-hidden">
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🪑</span>
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal-900 mb-2">
          {product.name}
        </h3>
        <p className="text-charcoal-600 mb-4 text-sm">
          {product.description}
        </p>
        <Link
          href="/contact"
          className="btn-primary text-sm w-full text-center block"
        >
          Get Quote
        </Link>
      </div>
    </motion.div>
  );
}

