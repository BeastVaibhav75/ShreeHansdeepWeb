"use client";

import { motion } from "framer-motion";

export default function About() {
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
              About Shree Hans Deep
            </h1>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              Crafting Excellence in Wood & Industrial Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-charcoal-700 mb-4 leading-relaxed">
                Shree Hans Deep Wood Works & Saw Mills has been a trusted name in the 
                woodworking and industrial solutions industry. With years of experience 
                in manufacturing and trading, we have established ourselves as a leading 
                provider of premium furniture and industrial packing materials.
              </p>
              <p className="text-lg text-charcoal-700 mb-4 leading-relaxed">
                Our journey began with a simple vision: to create high-quality, durable 
                products that combine traditional craftsmanship with modern design. Today, 
                we serve a diverse clientele ranging from homeowners seeking elegant 
                furniture to factories requiring robust industrial packing solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="section-padding bg-wood-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6 text-center">
                Our Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                    🪵 Wood Works & Saw Mills
                  </h3>
                  <p className="text-charcoal-700">
                    Specialized in processing premium seasoned wood and creating 
                    custom furniture pieces that stand the test of time.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                    🏭 Industrial Solutions
                  </h3>
                  <p className="text-charcoal-700">
                    Manufacturing heavy-duty packing materials, pallets, and 
                    industrial furniture for factories and warehouses.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                    🎨 Custom Design
                  </h3>
                  <p className="text-charcoal-700">
                    Bespoke interior solutions and furniture designed to match 
                    your unique requirements and aesthetic preferences.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                    ⚙️ Metal Fabrication
                  </h3>
                  <p className="text-charcoal-700">
                    Expert M.S. and S.S. metal works including railings, 
                    structures, and mixed wood-metal designer furniture.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Commitment */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                Our Vision & Commitment
              </h2>
              <div className="space-y-6 text-lg text-charcoal-700 leading-relaxed">
                <p>
                  At Shree Hans Deep, we believe in creating products that are not just 
                  functional, but also beautiful and enduring. Our commitment to quality 
                  is reflected in every piece we craft, from a simple dining chair to 
                  complex industrial packing solutions.
                </p>
                <p>
                  We focus on three core principles: <strong className="text-charcoal-900">Durability</strong>, 
                  {" "}<strong className="text-charcoal-900">Elegance</strong>, and <strong className="text-charcoal-900">Value</strong>. 
                  Every product is designed to last, crafted with attention to detail, 
                  and priced fairly to provide exceptional value to our customers.
                </p>
                <p>
                  Our skilled artisans combine traditional woodworking techniques with 
                  modern manufacturing processes to deliver products that exceed 
                  expectations. Whether you're furnishing a home, setting up an office, 
                  or equipping a factory, we have the expertise and resources to meet 
                  your needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-forest-600 to-forest-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 text-forest-100 max-w-2xl mx-auto">
              Experience the difference that quality craftsmanship makes. 
              Contact us today to discuss your project.
            </p>
            <a
              href="/contact"
              className="bg-white text-forest-700 hover:bg-wood-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

