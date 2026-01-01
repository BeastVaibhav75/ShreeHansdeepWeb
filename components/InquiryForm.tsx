"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirementType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-forest-50 border-2 border-forest-600 rounded-lg p-8 text-center"
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-forest-700 mb-2">
          Thank You!
        </h3>
        <p className="text-charcoal-700">
          We've received your inquiry and will get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal-900 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all bg-white text-black"
          placeholder="Your full name"
        />
      </div>

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
        <label htmlFor="email" className="block text-sm font-semibold text-charcoal-900 dark:text-white mb-2">
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
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="requirementType" className="block text-sm font-semibold text-charcoal-900 dark:text-white mb-2">
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
          <option value="">Select requirement type</option>
          <option value="home">Home Furniture</option>
          <option value="office">Office Furniture</option>
          <option value="industrial">Industrial Packing</option>
          <option value="custom">Custom Woodwork</option>
          <option value="metal">Metal Works</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all bg-white text-black"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}

