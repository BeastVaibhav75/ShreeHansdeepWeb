"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryCategories = [
  {
    title: "Modern Sofa Designs",
    images: [
      { id: "sofa-1", title: "Modern Sofa 1", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop" },
      { id: "sofa-2", title: "Modern Sofa 2", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop" },
      { id: "sofa-3", title: "Modern Sofa 3", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=600&fit=crop" },
      { id: "sofa-4", title: "Modern Sofa 4", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop" },
      { id: "sofa-5", title: "Modern Sofa 5", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop" },
      { id: "sofa-6", title: "Modern Sofa 6", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Dining Sets",
    images: [
      { id: "dining-1", title: "Dining Set 1", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop" },
      { id: "dining-2", title: "Dining Set 2", image: "https://images.unsplash.com/photo-1556911220-e15b29be8b8f?w=800&h=600&fit=crop" },
      { id: "dining-3", title: "Dining Set 3", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop" },
      { id: "dining-4", title: "Dining Set 4", image: "https://images.unsplash.com/photo-1556911220-e15b29be8b8f?w=800&h=600&fit=crop" },
      { id: "dining-5", title: "Dining Set 5", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop" },
      { id: "dining-6", title: "Dining Set 6", image: "https://images.unsplash.com/photo-1556911220-e15b29be8b8f?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Industrial Packing Products",
    images: [
      { id: "industrial-1", title: "Industrial Product 1", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" },
      { id: "industrial-2", title: "Industrial Product 2", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" },
      { id: "industrial-3", title: "Industrial Product 3", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" },
      { id: "industrial-4", title: "Industrial Product 4", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" },
      { id: "industrial-5", title: "Industrial Product 5", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" },
      { id: "industrial-6", title: "Industrial Product 6", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Office Interior Setups",
    images: [
      { id: "office-1", title: "Office Setup 1", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" },
      { id: "office-2", title: "Office Setup 2", image: "https://images.unsplash.com/photo-1497366754035-f200464aeb58?w=800&h=600&fit=crop" },
      { id: "office-3", title: "Office Setup 3", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" },
      { id: "office-4", title: "Office Setup 4", image: "https://images.unsplash.com/photo-1497366754035-f200464aeb58?w=800&h=600&fit=crop" },
      { id: "office-5", title: "Office Setup 5", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" },
      { id: "office-6", title: "Office Setup 6", image: "https://images.unsplash.com/photo-1497366754035-f200464aeb58?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Custom Metal-Wood Furniture",
    images: [
      { id: "custom-1", title: "Custom Furniture 1", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop" },
      { id: "custom-2", title: "Custom Furniture 2", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" },
      { id: "custom-3", title: "Custom Furniture 3", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop" },
      { id: "custom-4", title: "Custom Furniture 4", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" },
      { id: "custom-5", title: "Custom Furniture 5", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop" },
      { id: "custom-6", title: "Custom Furniture 6", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" },
    ],
  },
];

export default function Portfolio() {
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
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
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

