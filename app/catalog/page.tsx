"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { products, categories, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  // Check if category is in URL hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      if (hash && categories.find((c) => c.id === hash)) {
        setSelectedCategory(hash);
      }
    }
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
              Product Catalog
            </h1>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              Explore our wide range of premium furniture and industrial solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === null
                  ? "bg-forest-600 text-white shadow-md"
                  : "bg-wood-100 text-charcoal-700 hover:bg-wood-200"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-forest-600 text-white shadow-md"
                    : "bg-wood-100 text-charcoal-700 hover:bg-wood-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-charcoal-900 mb-2">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-charcoal-600">
                {categories.find((c) => c.id === selectedCategory)?.description}
              </p>
            </motion.div>
          )}

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-charcoal-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Category Sections */}
      <section className="section-padding bg-wood-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const categoryProducts = products.filter(
                (p) => p.category === category.id
              );
              return (
                <motion.div
                  key={category.id}
                  id={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-charcoal-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  <p className="text-forest-600 font-semibold mb-4">
                    {categoryProducts.length} Products
                  </p>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-forest-600 hover:text-forest-700 font-semibold inline-flex items-center"
                  >
                    View Products
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

