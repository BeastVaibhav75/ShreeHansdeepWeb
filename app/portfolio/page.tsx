"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";

// Helper function to get products by category and limit the number
const getProductsByCategory = (categoryId: string, limit: number = 12) => {
  return products
    .filter((p) => p.category === categoryId)
    .slice(0, limit)
    .map((product) => ({
      id: product.id,
      title: product.name,
      image: product.image,
    }));
};

export default function Portfolio() {
  // Create gallery categories from actual product categories
  const galleryCategories = useMemo(() => {
    return categories.map((category) => ({
      title: category.name,
      categoryId: category.id,
      images: getProductsByCategory(category.id, 12),
    })).filter((cat) => cat.images.length > 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wood-100 via-wood-50 to-forest-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              Showcasing our craftsmanship and completed projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {galleryCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.categoryId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.images.map((image, imageIndex) => {
                  const PortfolioImage = () => {
                    const [imageError, setImageError] = useState(false);
                    return (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: imageIndex * 0.05 }}
                        className="relative h-64 bg-gradient-to-br from-wood-200 to-wood-400 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                      >
                        {imageError ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl opacity-50 group-hover:opacity-75 transition-opacity">
                              🪑
                            </span>
                          </div>
                        ) : (
                          <Image
                            src={image.image}
                            alt={image.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={() => setImageError(true)}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        )}
                        <div className="absolute inset-0 bg-charcoal-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-center px-4">
                            {image.title}
                          </span>
                        </div>
                      </motion.div>
                    );
                  };
                  return <PortfolioImage key={image.id} />;
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-forest-600 to-forest-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Like What You See?
            </h2>
            <p className="text-lg mb-8 text-forest-100 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life
            </p>
            <a
              href="/contact"
              className="bg-white text-forest-700 hover:bg-wood-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg inline-block"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

