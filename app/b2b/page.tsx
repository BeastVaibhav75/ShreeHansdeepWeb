"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const b2bServices = [
  {
    title: "Industrial Packing Materials",
    description: "Heavy-duty wooden pallets, crates, and packing solutions for factories and warehouses",
    icon: "📦",
    features: [
      "Custom-sized pallets",
      "Heavy-duty wooden crates",
      "Bulk order discounts",
      "Timely delivery",
    ],
  },
  {
    title: "Bulk Furniture Orders",
    description: "Office furniture and workstations for corporate spaces, hotels, and institutions",
    icon: "🏢",
    features: [
      "Volume pricing",
      "Consistent quality",
      "Project-based delivery",
      "Installation support",
    ],
  },
  {
    title: "Factory Solutions",
    description: "Custom furniture and storage solutions designed for industrial environments",
    icon: "🏭",
    features: [
      "Durable materials",
      "Custom specifications",
      "Industrial-grade quality",
      "Maintenance support",
    ],
  },
  {
    title: "Custom Manufacturing",
    description: "Bespoke manufacturing services for unique business requirements",
    icon: "⚙️",
    features: [
      "Design consultation",
      "Prototype development",
      "Scalable production",
      "Quality assurance",
    ],
  },
];

const benefits = [
  {
    title: "Competitive Pricing",
    description: "Volume discounts and competitive rates for bulk orders",
    icon: "💰",
  },
  {
    title: "Reliable Supply",
    description: "Consistent quality and on-time delivery for your business needs",
    icon: "✅",
  },
  {
    title: "Custom Solutions",
    description: "Tailored products designed to meet your specific requirements",
    icon: "🎯",
  },
  {
    title: "Expert Support",
    description: "Dedicated account management and technical support",
    icon: "👥",
  },
];

const industries = [
  "Manufacturing & Factories",
  "Warehouses & Logistics",
  "Corporate Offices",
  "Hotels & Hospitality",
  "Educational Institutions",
  "Healthcare Facilities",
  "Retail Chains",
  "Government Projects",
];

export default function B2BPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-forest-800 text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              B2B Industrial Solutions
              <span className="block text-forest-300 mt-2">
                Premium Wood & Metal Works for Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-200 mb-8 leading-relaxed">
              Partner with us for bulk orders, industrial packing materials, 
              custom manufacturing, and comprehensive business solutions. 
              Quality, reliability, and competitive pricing for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/b2b#inquiry" className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg text-lg">
                Request B2B Quote
              </Link>
              <Link href="/catalog#industrial" className="border-2 border-white text-white hover:bg-white hover:text-charcoal-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-lg">
                View Industrial Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* B2B Services */}
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
              Our B2B Services
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Comprehensive solutions designed for businesses, factories, and institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {b2bServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-wood-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-charcoal-700">
                      <svg className="w-5 h-5 text-forest-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Partner With Us
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Benefits that make us the preferred choice for B2B clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-charcoal-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
              Industries We Serve
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              We provide solutions across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-forest-50 p-6 rounded-lg text-center border-2 border-forest-200 hover:border-forest-400 transition-colors"
              >
                <p className="font-semibold text-charcoal-900">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Inquiry Form Section */}
      <section id="inquiry" className="section-padding bg-gradient-to-br from-forest-600 to-forest-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request a B2B Quote
              </h2>
              <p className="text-lg text-forest-100 max-w-2xl mx-auto">
                Fill out the form below and our B2B team will get back to you with 
                competitive pricing and customized solutions for your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-2xl"
            >
              <B2BInquiryForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg mb-8 text-charcoal-300 max-w-2xl mx-auto">
              Contact our B2B team today to discuss your requirements and get started
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/b2b#inquiry" className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                Get B2B Quote
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-charcoal-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Contact Sales Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// B2B Inquiry Form Component
function B2BInquiryForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    industry: "",
    requirementType: "",
    quantity: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.message || "There was an error submitting your inquiry. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your inquiry. Please try again or contact us directly.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-forest-50 border-2 border-forest-600 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-forest-700 mb-2">
          Thank You!
        </h3>
        <p className="text-charcoal-700">
          We've received your B2B inquiry. Our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-semibold text-charcoal-900 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all bg-white text-black"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-semibold text-charcoal-900 mb-2">
            Contact Person *
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            required
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all bg-white text-black"
            placeholder="Your name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-900 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all bg-white text-black"
            placeholder="01274-261129 or +91 98121 25410"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all bg-white text-black"
            placeholder="your.email@company.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="industry" className="block text-sm font-semibold text-charcoal-900 mb-2">
            Industry *
          </label>
          <select
            id="industry"
            name="industry"
            required
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all bg-white text-black"
          >
            <option value="">Select industry</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="requirementType" className="block text-sm font-semibold text-charcoal-900 mb-2">
            Requirement Type *
          </label>
          <select
            id="requirementType"
            name="requirementType"
            required
            value={formData.requirementType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all bg-white text-black"
          >
            <option value="">Select type</option>
            <option value="industrial-packing">Industrial Packing Materials</option>
            <option value="bulk-furniture">Bulk Furniture Orders</option>
            <option value="factory-solutions">Factory Solutions</option>
            <option value="custom-manufacturing">Custom Manufacturing</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-semibold text-charcoal-900 mb-2">
          Estimated Quantity / Volume
        </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all bg-white text-black"
          placeholder="e.g., 100 units, 50 pallets, etc."
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal-900 mb-2">
          Project Details / Requirements *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all resize-none bg-white text-black"
          placeholder="Tell us about your project requirements, timeline, specifications, etc."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit B2B Inquiry"}
      </button>
    </form>
  );
}

