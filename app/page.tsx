"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import BrandMarquee from "@/components/BrandMarquee";
import { products, categories } from "@/data/products";

// Helper function to get random product image from a category
const getRandomProductImage = (categoryId: string): string => {
  const categoryProducts = products.filter((p) => p.category === categoryId);
  if (categoryProducts.length === 0) {
    // Fallback to placeholder based on category
    const placeholders: Record<string, string> = {
      "home-furniture": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "office-furniture": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "industrial": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      "custom-woodwork": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop",
      "metal-works": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      "almira": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop",
    };
    return placeholders[categoryId] || placeholders["home-furniture"];
  }
  const randomIndex = Math.floor(Math.random() * categoryProducts.length);
  return categoryProducts[randomIndex].image;
};

const productCategories = [
  {
    title: "Home Furniture",
    categoryId: "home-furniture",
    description: "Elegant and durable furniture for your home",
    href: "/catalog#home-furniture",
    icon: "🏠",
  },
  {
    title: "Office Furniture",
    categoryId: "office-furniture",
    description: "Professional workspace solutions",
    href: "/catalog#office-furniture",
    icon: "💼",
  },
  {
    title: "Industrial Packing",
    categoryId: "industrial",
    description: "Heavy-duty packing materials for factories",
    href: "/catalog#industrial",
    icon: "📦",
  },
  {
    title: "Custom Woodwork",
    categoryId: "custom-woodwork",
    description: "Bespoke interior and furniture solutions",
    href: "/catalog#custom-woodwork",
    icon: "🪵",
  },
  {
    title: "Metal Works",
    categoryId: "metal-works",
    description: "M.S. & S.S. fabrication and structures",
    href: "/catalog#metal-works",
    icon: "⚙️",
  },
  {
    title: "Almira",
    categoryId: "almira",
    description: "Premium storage solutions with elegant design",
    href: "/catalog#almira",
    icon: "🗄️",
  },
];

const strengths = [
  {
    title: "Premium Seasoned Wood",
    description: "We use only the finest quality seasoned wood for durability and elegance",
    icon: "🌳",
  },
  {
    title: "Custom Designs",
    description: "Tailored solutions to match your unique requirements and style",
    icon: "✏️",
  },
  {
    title: "Skilled Craftsmanship",
    description: "Expert artisans with years of experience in wood and metal works",
    icon: "👷",
  },
  {
    title: "Timely Delivery",
    description: "Committed to delivering quality products on schedule",
    icon: "⏱️",
  },
];

export default function Home() {
  // Generate random product images for each category on component mount
  const [categoryImages, setCategoryImages] = useState<Record<string, string>>({});

  useEffect(() => {
    // Generate random images for each category
    const images: Record<string, string> = {};
    productCategories.forEach((category) => {
      images[category.categoryId] = getRandomProductImage(category.categoryId);
    });
    setCategoryImages(images);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-wood-100 via-wood-50 to-wood-100 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal-900 mb-6">
              Premium Wood & Industrial Solutions
              <span className="block text-wood-800 mt-2">
                for Homes, Offices & Factories
              </span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal-700 mb-8 leading-relaxed">
              Shree Hans Deep Wood Works & Saw Mills offers premium furniture manufacturing, 
              factory packing materials, custom woodwork, and metal fabrication services. 
              Quality craftsmanship meets modern design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog" className="btn-primary">
                View Catalog
              </Link>
              <Link href="/contact" className="btn-outline">
                Get a Quote
              </Link>
              <Link href="/b2b" className="btn-outline border-wood-700 text-wood-800 hover:bg-wood-700 hover:text-white">
                B2B Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              From elegant home furniture to industrial packing solutions, we cater to all your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const CategoryCard = () => {
                const [imageError, setImageError] = useState(false);
                const categoryImage = categoryImages[category.categoryId] || getRandomProductImage(category.categoryId);
                
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-wood-200 to-wood-400 overflow-hidden">
                      {imageError ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl">{category.icon}</span>
                        </div>
                      ) : (
                        <Image
                          src={categoryImage}
                          alt={category.title}
                          fill
                          className="object-cover"
                          onError={() => setImageError(true)}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-charcoal-600 mb-4">
                        {category.description}
                      </p>
                      <Link
                        href={category.href}
                        className="text-wood-700 hover:text-wood-800 font-semibold inline-flex items-center"
                      >
                        Explore
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                );
              };
              return <CategoryCard key={category.title} />;
            })}
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Key Strengths */}
      <section className="section-padding bg-wood-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Our commitment to quality and excellence sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{strength.icon}</div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                  {strength.title}
                </h3>
                <p className="text-charcoal-600">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-wood-700 to-wood-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-wood-100 max-w-2xl mx-auto">
              Contact us today for a consultation and get a custom quote for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-wood-800 hover:bg-wood-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                Get a Quote
              </Link>
              <Link href="/catalog" className="border-2 border-white text-white hover:bg-white hover:text-wood-800 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                View Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
