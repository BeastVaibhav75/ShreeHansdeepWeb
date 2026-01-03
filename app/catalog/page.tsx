"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { products, categories, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let filtered = products;
    
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    
    if (selectedSubcategory) {
      filtered = filtered.filter((p) => p.subcategory === selectedSubcategory);
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSubcategory]);

  // Check if category is in URL hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      if (hash && categories.find((c) => c.id === hash)) {
        setSelectedCategory(hash);
        setSelectedSubcategory(null); // Reset subcategory when category changes
      }
    }
  }, []);

  // Get available subcategories for selected category
  const getAvailableSubcategories = () => {
    if (!selectedCategory) return [];
    const categoryProducts = products.filter((p) => p.category === selectedCategory);
    const subcategories = new Set<string>();
    categoryProducts.forEach((p) => {
      if (p.subcategory) subcategories.add(p.subcategory);
    });
    return Array.from(subcategories).sort();
  };

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
      <section id="products-section" className="section-padding bg-white">
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
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedSubcategory(null); // Reset subcategory when category changes
                }}
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

          {/* Subcategory Filter Buttons */}
          {selectedCategory && getAvailableSubcategories().length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              <button
                onClick={() => setSelectedSubcategory(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                  selectedSubcategory === null
                    ? "bg-forest-500 text-white shadow-md"
                    : "bg-wood-50 text-charcoal-700 hover:bg-wood-100"
                }`}
              >
                All
              </button>
              {getAvailableSubcategories().map((subcat) => (
                <button
                  key={subcat}
                  onClick={() => setSelectedSubcategory(subcat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm capitalize ${
                    selectedSubcategory === subcat
                      ? "bg-forest-500 text-white shadow-md"
                      : "bg-wood-50 text-charcoal-700 hover:bg-wood-100"
                  }`}
                >
                  {subcat.replace(/-/g, " ")}
                </button>
              ))}
            </div>
          )}

          {/* Display Products by Category */}
          {selectedCategory ? (
            // Show single category when selected
            <>
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
              {filteredProducts.length > 0 ? (
                (() => {
                  // Group products by subcategory if they have subcategories
                  const subcategoryGroups = filteredProducts.reduce((acc, product) => {
                    const subcat = product.subcategory || "other";
                    if (!acc[subcat]) acc[subcat] = [];
                    acc[subcat].push(product);
                    return acc;
                  }, {} as Record<string, Product[]>);

                  const hasSubcategories = Object.keys(subcategoryGroups).length > 1 || 
                    (Object.keys(subcategoryGroups).length === 1 && Object.keys(subcategoryGroups)[0] !== "other");

                  if (hasSubcategories) {
                    return (
                      <div className="space-y-12">
                        {Object.entries(subcategoryGroups).map(([subcat, subcatProducts], subcatIndex) => (
                          <motion.div
                            key={subcat}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: subcatIndex * 0.1 }}
                          >
                            <h3 className="text-xl font-bold text-charcoal-900 mb-4 capitalize">
                              {subcat}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                              {subcatProducts.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                          <ProductCard key={product.id} product={product} index={index} />
                        ))}
                      </div>
                    );
                  }
                })()
              ) : (
                <div className="text-center py-12">
                  <p className="text-charcoal-600 text-lg">No products found in this category.</p>
                </div>
              )}
            </>
          ) : (
            // Show all categories with their products grouped by subcategory
            <div className="space-y-16">
              {categories.map((category, categoryIndex) => {
                const categoryProducts = products.filter(
                  (p) => p.category === category.id
                );
                if (categoryProducts.length === 0) return null;
                
                // Group by subcategory
                const subcategoryGroups = categoryProducts.reduce((acc, product) => {
                  const subcat = product.subcategory || "other";
                  if (!acc[subcat]) acc[subcat] = [];
                  acc[subcat].push(product);
                  return acc;
                }, {} as Record<string, Product[]>);

                const hasSubcategories = Object.keys(subcategoryGroups).length > 1 || 
                  (Object.keys(subcategoryGroups).length === 1 && Object.keys(subcategoryGroups)[0] !== "other");
                
                return (
                  <motion.div
                    key={category.id}
                    id={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="scroll-mt-20"
                  >
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-charcoal-900 mb-2">
                        {category.name}
                      </h2>
                      <p className="text-charcoal-600 text-lg">
                        {category.description}
                      </p>
                      <p className="text-forest-600 font-semibold mt-2">
                        {categoryProducts.length} Products
                      </p>
                    </div>
                    {hasSubcategories ? (
                      <div className="space-y-10">
                        {Object.entries(subcategoryGroups).map(([subcat, subcatProducts], subcatIndex) => (
                          <motion.div
                            key={subcat}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: subcatIndex * 0.05 }}
                          >
                            <h3 className="text-xl font-bold text-charcoal-800 mb-4 capitalize border-b-2 border-wood-200 pb-2">
                              {subcat}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                              {subcatProducts.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categoryProducts.map((product, index) => (
                          <ProductCard key={product.id} product={product} index={index} />
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
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
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedSubcategory(null); // Reset subcategory
                      // Scroll to top of products section
                      setTimeout(() => {
                        document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
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

